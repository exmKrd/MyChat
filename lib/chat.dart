import 'package:flutter/material.dart';
import 'package:firebase_auth/firebase_auth.dart';
import 'package:cloud_firestore/cloud_firestore.dart';

class Chat extends StatefulWidget {
  final String userEmail;
  final String userName;

  const Chat({Key? key, required this.userEmail, required this.userName})
      : super(key: key);

  @override
  _ChatScreenState createState() => _ChatScreenState();
}

class _ChatScreenState extends State<Chat> {
  final TextEditingController _controller = TextEditingController();
  String? chatID;

  @override
  void initState() {
    super.initState();
    _initializeChat();
  }

  void _initializeChat() async {
    User? currentUser = FirebaseAuth.instance.currentUser;
    String? sourceEmail = currentUser?.email;

    if (sourceEmail != null) {
      // Vérifier si une conversation existe déjà entre ces deux utilisateurs
      QuerySnapshot querySnapshot = await FirebaseFirestore.instance
          .collection('conversations')
          .where('participants',
              arrayContainsAny: [sourceEmail, "email"]).get();

      bool conversationExists = false;

      for (var doc in querySnapshot.docs) {
        List participants = doc['participants'];
        if (participants.contains(sourceEmail) &&
            participants.contains(widget.userEmail)) {
          chatID = doc.id;
          conversationExists = true;
          break;
        }
      }

      if (!conversationExists) {
        // Créer une nouvelle conversation
        DocumentReference newChatRef =
            await FirebaseFirestore.instance.collection('conversations').add({
          'participants': [sourceEmail, widget.userEmail],
          'timestamp': FieldValue.serverTimestamp(),
        });
        chatID = newChatRef.id;
      }

      setState(() {});
    } else {
      print('Erreur : Impossible de récupérer l\'email de l\'utilisateur.');
    }
  }

  void _sendMessage(String message) async {
    if (message.isNotEmpty && chatID != null) {
      User? currentUser = FirebaseAuth.instance.currentUser;
      String? sourceEmail = currentUser?.email;

      if (sourceEmail != null) {
        // Sauvegarde du message dans la base de données
        await FirebaseFirestore.instance
            .collection('conversations')
            .doc(chatID)
            .collection('messages')
            .add({
          'source': sourceEmail,
          'destination': widget.userEmail,
          'message': message,
          'timestamp': FieldValue.serverTimestamp(),
        });
      } else {
        print('Erreur : Impossible de récupérer l\'email de l\'utilisateur.');
      }
    }
  }

  void _navigateBackToDiscussions() {
    Navigator.pop(context);
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Chat avec ${widget.userName}'),
        actions: [
          IconButton(
            icon: Icon(Icons.arrow_back),
            onPressed: _navigateBackToDiscussions,
          ),
        ],
      ),
      body: chatID == null
          ? Center(child: CircularProgressIndicator())
          : Column(
              children: [
                Expanded(
                  child: StreamBuilder<QuerySnapshot>(
                    stream: FirebaseFirestore.instance
                        .collection('conversations')
                        .doc(chatID)
                        .collection('messages')
                        .orderBy('timestamp', descending: true)
                        .snapshots(),
                    builder: (context, snapshot) {
                      if (snapshot.hasError) {
                        return Center(child: Text('Erreur: ${snapshot.error}'));
                      }

                      if (snapshot.connectionState == ConnectionState.waiting) {
                        return Center(child: CircularProgressIndicator());
                      }

                      if (!snapshot.hasData || snapshot.data!.docs.isEmpty) {
                        return Center(child: Text('Aucun message'));
                      }

                      var messages = snapshot.data!.docs
                          .map((doc) => doc['message'] as String)
                          .toList();

                      return ListView.builder(
                        reverse: true, // Start from bottom
                        itemCount: messages.length,
                        itemBuilder: (context, index) {
                          return ListTile(
                            title: Text(messages[index]),
                          );
                        },
                      );
                    },
                  ),
                ),
                Divider(height: 1.0),
                Container(
                  decoration: BoxDecoration(color: Theme.of(context).cardColor),
                  child: Padding(
                    padding: EdgeInsets.symmetric(horizontal: 8.0),
                    child: Row(
                      children: [
                        Expanded(
                          child: TextField(
                            controller: _controller,
                            textInputAction: TextInputAction.send,
                            onSubmitted: (text) {
                              _sendMessage(text);
                            },
                            decoration: InputDecoration.collapsed(
                              hintText: 'Entre ton message..',
                            ),
                          ),
                        ),
                        IconButton(
                          icon: Icon(Icons.send),
                          onPressed: () {
                            _sendMessage(_controller.text);
                          },
                        ),
                      ],
                    ),
                  ),
                ),
              ],
            ),
    );
  }
}
