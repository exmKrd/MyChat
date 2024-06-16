import 'package:firebase_auth/firebase_auth.dart';
import 'package:flutter/material.dart';
import 'package:cloud_firestore/cloud_firestore.dart';
import 'chat.dart'; 

class Contact extends StatefulWidget {
  const Contact({Key? key}) : super(key: key);

  @override
  State<Contact> createState() => _ContactState();
}

class _ContactState extends State<Contact> {
  late Stream<QuerySnapshot> _usersStream;
  final FirebaseAuth _auth = FirebaseAuth.instance;

  @override
  void initState() {
    super.initState();
    _usersStream = FirebaseFirestore.instance.collection('users').snapshots();
  }

  Widget _buildUserListItem(DocumentSnapshot doc) {
    var userData = doc.data() as Map<String, dynamic>;
    String displayName = userData['displayName'] ?? 'Pas de nom';
    String email = userData['email'] ?? "Pas d'email";

    if (_auth.currentUser?.email != email) {
      return GestureDetector(
        onTap: () {
          Navigator.push(
            context,
            MaterialPageRoute(
              builder: (context) => Chat(userEmail: email, userName: displayName),
              fullscreenDialog: true,
              
            ),
          );
        },
        child: Card(
          child: ListTile(
            title: Text(displayName),
            subtitle: Text(email),
          ),
        ),
      );
    } else {
      return Container();
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Contacts'),
      ),
      body: StreamBuilder<QuerySnapshot>(
        stream: _usersStream,
        builder: (context, snapshot) {
          if (snapshot.hasError) {
            return Center(child: Text('Erreur : ${snapshot.error}'));
          }

          if (snapshot.connectionState == ConnectionState.waiting) {
            return Center(child: CircularProgressIndicator());
          }

          if (!snapshot.hasData || snapshot.data!.docs.isEmpty) {
            return Center(child: Text('Aucun contact disponible'));
          }

          return ListView(
            children: snapshot.data!.docs.map((doc) => _buildUserListItem(doc)).toList(),
          );
        },
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: () {
      
          print('Ajouter un nouveau contact');
         
        },
        child: Icon(Icons.add),
      ),
    );
  }
}
