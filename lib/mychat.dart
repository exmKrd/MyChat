import 'package:flutter/material.dart';
import 'package:firebase_auth/firebase_auth.dart';
import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:focus_detector/focus_detector.dart';
import 'package:mychat/chat.dart';
import 'package:mychat/contact.dart';
import 'package:mychat/listechat.dart';
import 'package:mychat/setting.dart';

class MyChat extends StatefulWidget {
  const MyChat({Key? key}) : super(key: key);

  @override
  _MyChatState createState() => _MyChatState();
}

class _MyChatState extends State<MyChat> {
  int _selectedIndex = 0;
  String? _userDisplayName;
  String? _userEmail; // Nouvelle variable pour stocker l'email de l'utilisateur

  static const List<Widget> _widgetOptions = <Widget>[
    Listchat(),
    Contact(),
    Text('Person Page'),
    Setting(),
  ];

  @override
  void initState() {
    super.initState();
    _checkUserAndUsername();
  }

  void _checkUserAndUsername() async {
    User? user = FirebaseAuth.instance.currentUser;
    if (user == null) {
      return; // Utilisateur non connecté
    }

    DocumentSnapshot userDoc = await FirebaseFirestore.instance
        .collection('users')
        .doc(user.uid)
        .get();

    if (!userDoc.exists ||
        userDoc['displayName'] == null ||
        userDoc['displayName'].isEmpty) {
      await _askForDisplayName();
    } else {
      setState(() {
        _userDisplayName = userDoc['displayName'];
        _userEmail = user.email; // Stocker l'email de l'utilisateur
      });
    }
  }

  Future<void> _askForDisplayName() async {
    String? displayName;
    bool isUsernameTaken = true;

    while (isUsernameTaken) {
      displayName = await showDialog(
        context: context,
        builder: (context) {
          String input = '';
          return AlertDialog(
            title: Text('Entrer votre nom d\'utilisateur'),
            content: TextField(
              onChanged: (value) => input = value,
            ),
            actions: [
              TextButton(
                onPressed: () {
                  Navigator.pop(context, input);
                },
                child: Text('OK'),
              ),
            ],
          );
        },
      );

      if (displayName != null && displayName.isNotEmpty) {
        isUsernameTaken = await _isUsernameTaken(displayName);
        if (isUsernameTaken) {
          ScaffoldMessenger.of(context).showSnackBar(
            SnackBar(content: Text("nom d'utilisateur déjà utilisé")),
          );
        }
      } else {
        isUsernameTaken =
            false; // Sortir de la boucle si l'utilisateur n'a pas entré de nom d'utilisateur
      }
    }

    if (displayName != null && displayName.isNotEmpty) {
      User? user = FirebaseAuth.instance.currentUser;
      await FirebaseFirestore.instance.collection('users').doc(user!.uid).set({
        'displayName': displayName,
        'email': user.email // Stocker l'email de l'utilisateur
      }, SetOptions(merge: true));
      setState(() {
        _userDisplayName = displayName;
        _userEmail = user.email; // Stocker l'email de l'utilisateur
      });
    } else {
      print(FirebaseAuth.instance.currentUser?.uid);
    }
  }

  Future<bool> _isUsernameTaken(String username) async {
    final QuerySnapshot result = await FirebaseFirestore.instance
        .collection('users')
        .where('displayName', isEqualTo: username)
        .limit(1)
        .get();
    final List<DocumentSnapshot> documents = result.docs;
    return documents.isNotEmpty;
  }

  void _onItemTapped(int index) {
    setState(() {
      _selectedIndex = index;
    });
  }

  @override
  Widget build(BuildContext context) {
    return FocusDetector(
      onVisibilityGained: () {
        _checkUserAndUsername();
      },
      child: Scaffold(
        body: Container(
          padding: const EdgeInsets.fromLTRB(15, 10, 10, 10),
          child: Column(
            children: [
              Row(
                children: [
                  const Text(
                    "Bienvenue dans ton Chat ",
                    style: TextStyle(fontSize: 24),
                  ),
                  if (_userDisplayName != null) SizedBox(width: 10),
                  Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Text(
                        _userDisplayName ?? 'User',
                        style: TextStyle(fontSize: 24),
                      ),
                      if (_userEmail != null)
                        Text(
                          _userEmail!,
                          style: TextStyle(fontSize: 16, color: Colors.grey),
                        ),
                    ],
                  ),
                  const SizedBox(width: 10),
                  CircleAvatar(
                    radius: 30,
                    backgroundImage: AssetImage("assets/images/pdp.jpeg"),
                  ),
                ],
              ),
              Expanded(
                child: Center(
                  child: _widgetOptions.elementAt(_selectedIndex),
                ),
              ),
            ],
          ),
        ),
        bottomNavigationBar: BottomNavigationBar(
          type: BottomNavigationBarType.fixed,
          selectedItemColor: Colors.orange.shade400,
          unselectedItemColor: Colors.grey,
          currentIndex: _selectedIndex,
          onTap: _onItemTapped,
          items: const [
            BottomNavigationBarItem(
              icon: Icon(Icons.chat),
              label: "Chat",
            ),
            BottomNavigationBarItem(
              icon: Icon(Icons.group),
              label: "Contact",
            ),
            BottomNavigationBarItem(
              icon: Icon(Icons.call),
              label: "Calls",
            ),
            BottomNavigationBarItem(
              icon: Icon(Icons.settings),
              label: "Settings",
            ),
          ],
        ),
      ),
    );
  }
}
