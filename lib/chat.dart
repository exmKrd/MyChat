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
  String? sourceEmail;

  @override
  void initState() {
    super.initState();
    _initializeChat();
  }

  void _initializeChat() async {
    User? currentUser = FirebaseAuth.instance.currentUser;
    sourceEmail = currentUser?.email;

    if (sourceEmail != null) {
      QuerySnapshot querySnapshot = await FirebaseFirestore.instance
          .collection('conversations')
          .where('participants',
              arrayContainsAny: [sourceEmail, widget.userEmail]).get();

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
        _controller.clear();
      } else {
        print('Erreur : Impossible de récupérer l\'email de l\'utilisateur.');
      }
    }
  }

  void _deleteMessage(DocumentSnapshot messageData) async {
    if (chatID != null) {
      await FirebaseFirestore.instance
          .collection('conversations')
          .doc(chatID)
          .collection('messages')
          .doc(messageData.id)
          .delete();
    }
  }

  void _navigateBackToDiscussions() {
    Navigator.pop(context);
  }

  Future<void> _confirmDeleteMessage(DocumentSnapshot messageData) async {
    return showDialog<void>(
      context: context,
      barrierDismissible: false, // User must tap a button
      builder: (BuildContext context) {
        return AlertDialog(
          title: Text('Confirmer la suppression'),
          content: SingleChildScrollView(
            child: ListBody(
              children: <Widget>[
                Text('Voulez-vous vraiment supprimer ce message ?'),
              ],
            ),
          ),
          actions: <Widget>[
            TextButton(
              child: Text('Annuler'),
              onPressed: () {
                Navigator.of(context).pop();
              },
            ),
            TextButton(
              child: Text('Supprimer'),
              onPressed: () {
                _deleteMessage(messageData);
                Navigator.of(context).pop();
              },
            ),
          ],
        );
      },
    );
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        backgroundColor: Colors.amber,
        leading: IconButton(
          icon: Icon(Icons.arrow_back),
          onPressed: _navigateBackToDiscussions,
        ),
        automaticallyImplyLeading: false,
        title: Text('Chat avec ${widget.userName}'),
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

                      var messages = snapshot.data!.docs;

                      return ListView.builder(
                        reverse: true,
                        itemCount: messages.length,
                        itemBuilder: (context, index) {
                          var messageData = messages[index];
                          bool isSourceMessage =
                              messageData['source'] == sourceEmail;

                          return GestureDetector(
                            onLongPress: () {
                              if (isSourceMessage) {
                                _confirmDeleteMessage(messageData);
                              }
                            },
                            child: Align(
                              alignment: isSourceMessage
                                  ? Alignment.centerRight
                                  : Alignment.centerLeft,
                              child: Container(
                                margin: EdgeInsets.symmetric(
                                  vertical: 4.0,
                                  horizontal: 8.0,
                                ),
                                padding: EdgeInsets.symmetric(
                                  vertical: 10.0,
                                  horizontal: 14.0,
                                ),
                                decoration: BoxDecoration(
                                  color: isSourceMessage
                                      ? Colors.orange.shade400
                                      : Colors.grey[300],
                                  borderRadius: BorderRadius.circular(10.0),
                                ),
                                child: Text(
                                  messageData['message'],
                                  style: TextStyle(
                                    color: isSourceMessage
                                        ? Colors.white
                                        : Colors.black,
                                  ),
                                ),
                              ),
                            ),
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
                              hintText: 'Entre ton message...',
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
