import 'package:flutter/material.dart';
import 'package:firebase_auth/firebase_auth.dart';
import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:mychat/contact.dart';
import 'package:mychat/chat.dart';

class Listechat extends StatelessWidget {
  Listechat({Key? key});

  Future<void> _deleteConversation(String conversationId) async {
    try {
      // Supprimer les messages de la conversation
      var messagesSnapshot = await FirebaseFirestore.instance
          .collection('conversations')
          .doc(conversationId)
          .collection('messages')
          .get();

      for (var doc in messagesSnapshot.docs) {
        await doc.reference.delete();
      }

      // Supprimer la conversation elle-même
      await FirebaseFirestore.instance
          .collection('conversations')
          .doc(conversationId)
          .delete();
    } catch (e) {
      print('Erreur lors de la suppression: $e');
    }
  }

  Future<void> _showDeleteConfirmationDialog(
      BuildContext context, String conversationId) async {
    return showDialog<void>(
      context: context,
      barrierDismissible: false,
      builder: (BuildContext dialogContext) {
        return AlertDialog(
          title: Text('Confirmer la suppression'),
          content: Text(
              'Êtes-vous sûr de vouloir supprimer cette conversation ? (déconseillé pour le moment, des améliorations doivent arrivées !)'),
          actions: <Widget>[
            TextButton(
              child: Text('Annuler'),
              onPressed: () {
                Navigator.of(dialogContext).pop();
              },
            ),
            TextButton(
              child: Text('Supprimer'),
              onPressed: () {
                Navigator.of(dialogContext).pop();
                _deleteConversation(conversationId);
              },
            ),
          ],
        );
      },
    );
  }

  @override
  Widget build(BuildContext context) {
    User? currentUser = FirebaseAuth.instance.currentUser;
    String? userEmail = currentUser?.email;

    if (userEmail == null) {
      return Center(child: CircularProgressIndicator());
    }

    return StreamBuilder<QuerySnapshot>(
      stream: FirebaseFirestore.instance
          .collection('conversations')
          .where('participants', arrayContains: userEmail)
          .snapshots(),
      builder: (context, snapshot) {
        if (snapshot.hasError) {
          return Center(child: Text('Erreur: ${snapshot.error}'));
        }

        if (snapshot.connectionState == ConnectionState.waiting) {
          return Center(child: CircularProgressIndicator());
        }

        if (!snapshot.hasData || snapshot.data!.docs.isEmpty) {
          return Container(
            child: Column(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                Text(
                  "Aucune conversation pour l'instant. Appuyez sur le + pour commencer à discuter",
                  textAlign: TextAlign.center,
                ),
                SizedBox(height: 20),
                FloatingActionButton(
                  onPressed: () {
                    Navigator.push(
                      context,
                      MaterialPageRoute(builder: (context) => Contact()),
                    );
                  },
                  child: Icon(Icons.add),
                ),
              ],
            ),
          );
        }

        var conversations = snapshot.data!.docs;

        return Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Padding(
              padding: const EdgeInsets.all(8.0),
              child: Text(
                'Conversations',
                style: TextStyle(
                  fontSize: 24,
                  fontWeight: FontWeight.bold,
                ),
              ),
            ),
            Expanded(
              child: ListView.builder(
                itemCount: conversations.length,
                itemBuilder: (context, index) {
                  var conversation = conversations[index];
                  var participants = conversation['participants'];
                  String otherUserEmail =
                      participants.firstWhere((email) => email != userEmail);

                  return FutureBuilder<DocumentSnapshot>(
                    future: FirebaseFirestore.instance
                        .collection('users')
                        .where('email', isEqualTo: otherUserEmail)
                        .limit(1)
                        .get()
                        .then((querySnapshot) => querySnapshot.docs.first),
                    builder: (context, userSnapshot) {
                      if (userSnapshot.connectionState ==
                          ConnectionState.waiting) {
                        return ListTile(
                          title: Text("Chargement..."),
                          leading: CircleAvatar(
                            child: Text("..."),
                          ),
                        );
                      }

                      if (!userSnapshot.hasData) {
                        return Container(); // passe si données n'existent pas
                      }

                      var userDocument = userSnapshot.data!;
                      var displayName = userDocument['displayName'];
                      var userEmail = userDocument['email'];

                      return StreamBuilder<QuerySnapshot>(
                        stream: FirebaseFirestore.instance
                            .collection('conversations')
                            .doc(conversation.id)
                            .collection('messages')
                            .orderBy('timestamp', descending: true)
                            .snapshots(),
                        builder: (context, messageSnapshot) {
                          if (messageSnapshot.hasError) {
                            return ListTile(
                              title: Text(
                                  'Erreur lors de la récupération des messages'),
                            );
                          }

                          if (messageSnapshot.connectionState ==
                              ConnectionState.waiting) {
                            return ListTile(
                              title: Text("Chargement..."),
                              leading: CircleAvatar(
                                child: Text("..."),
                              ),
                            );
                          }

                          if (!messageSnapshot.hasData ||
                              messageSnapshot.data!.docs.isEmpty) {
                            return ListTile(
                              title:
                                  Text(displayName ?? 'Utilisateur sans nom'),
                              subtitle: Text("Aucun message"),
                              leading: CircleAvatar(
                                child: Icon(
                                  Icons.account_circle,
                                  size: 40,
                                  color: Colors.black,
                                ),
                                backgroundColor: Colors.white,
                              ),
                              trailing: IconButton(
                                color: Colors.red,
                                icon: Icon(Icons.delete),
                                onPressed: () {
                                  _showDeleteConfirmationDialog(
                                      context, conversation.id);
                                },
                              ),
                              onTap: () {
                                Navigator.push(
                                  context,
                                  MaterialPageRoute(
                                    builder: (context) => Chat(
                                      userEmail:
                                          userEmail ?? 'Email non disponible',
                                      userName:
                                          displayName ?? 'Utilisateur sans nom',
                                    ),
                                  ),
                                );
                              },
                            );
                          }

                          var latestMessage = messageSnapshot.data!.docs.first;
                          var messageText = latestMessage['message'];

                          return ListTile(
                            title: Text(displayName ?? 'Utilisateur sans nom'),
                            subtitle: Text(
                              messageText ?? 'Aucun message',
                              maxLines: 1,
                            ),
                            leading: CircleAvatar(
                              child: Icon(
                                Icons.account_circle,
                                size: 40,
                                color: Colors.black,
                              ),
                              backgroundColor: Colors.white,
                            ),
                            onTap: () {
                              Navigator.push(
                                context,
                                MaterialPageRoute(
                                  builder: (context) => Chat(
                                    userEmail:
                                        userEmail ?? 'Email non disponible',
                                    userName:
                                        displayName ?? 'Utilisateur sans nom',
                                  ),
                                ),
                              );
                            },
                            trailing: IconButton(
                              color: Colors.red,
                              icon: Icon(Icons.delete),
                              onPressed: () {
                                _showDeleteConfirmationDialog(
                                    context, conversation.id);
                              },
                            ),
                          );
                        },
                      );
                    },
                  );
                },
              ),
            ),
          ],
        );
      },
    );
  }
}
