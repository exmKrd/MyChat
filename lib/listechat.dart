import 'package:flutter/material.dart';
import 'package:mychat/contact.dart';

class Listchat extends StatelessWidget {
  const Listchat({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Conversations'),
      ),
      body: ConversationListView(),
      floatingActionButton: FloatingActionButton(
        onPressed: () {
          // Navigate to the Contact screen
          Navigator.push(
            context,
            MaterialPageRoute(builder: (context) => Contact()),
          );
        },
        child: Icon(Icons.add),
      ),
    );
  }
}

class ConversationListView extends StatelessWidget {
  ConversationListView({super.key});

  // Dummy data for demonstration
  final List<String> conversations = [];

  @override
  Widget build(BuildContext context) {
    return conversations.isEmpty
        ? Center(
            child: Text(
              "Aucune conversations pour l'instant. appuyer sur le + pour commencer à discuter",
              textAlign: TextAlign.center,
            ),
          )
        : ListView.builder(
            itemCount: conversations.length,
            itemBuilder: (context, index) {
              String conversationName = conversations[index];

              return ListTile(
                title: Text(conversationName),
                leading: CircleAvatar(
                  child: Text(conversationName[0]),
                ),
                onTap: () {
                  Navigator.push(
                    context,
                    MaterialPageRoute(
                      builder: (context) =>
                          ChatScreen(conversationName: conversationName),
                    ),
                  );
                },
              );
            },
          );
  }
}

class ChatScreen extends StatelessWidget {
  final String conversationName;

  const ChatScreen({Key? key, required this.conversationName})
      : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(conversationName),
      ),
      body: Center(
        child: Text('Chat with $conversationName'),
      ),
    );
  }
}
