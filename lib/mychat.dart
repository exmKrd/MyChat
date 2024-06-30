import 'package:flutter/material.dart';
import 'package:firebase_auth/firebase_auth.dart';
import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:focus_detector/focus_detector.dart';
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
  String? _userEmail;

  static List<Widget> _widgetOptions = <Widget>[
    Listechat(),
    Contact(),
    Text("en développement, patience... "),
    Text("en développement, patience... "),
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
        _userEmail = user.email;
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
              decoration: InputDecoration(
                hintText: 'Nom d\'utilisateur',
                counterText: '', // Masque le texte du compteur
              ),
              maxLength: 15, // Limite le nombre de caractères
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
            SnackBar(content: Text("Nom d'utilisateur déjà utilisé")),
          );
        }
      } else {
        isUsernameTaken = false;
      }
    }

    if (displayName != null && displayName.isNotEmpty) {
      User? user = FirebaseAuth.instance.currentUser;
      if (user != null) {
        await FirebaseFirestore.instance.collection('users').doc(user.uid).set({
          'displayName': displayName,
          'email': user.email,
        }, SetOptions(merge: true));
        setState(() {
          _userDisplayName = displayName;
          _userEmail = user.email; // Met à jour _userEmail avec l'email actuel
        });
      }
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
        appBar: PreferredSize(
          preferredSize: Size.fromHeight(kToolbarHeight + 5),
          child: AppBar(
            titleSpacing: 0,
            backgroundColor: Colors.grey.shade300,
            title: Row(
              children: [
                Text(
                  "Bienvenue dans ton Chat",
                  style: TextStyle(fontSize: 18, color: Colors.black),
                ),
                if (_userDisplayName != null) ...[
                  SizedBox(width: 5),
                  Container(
                    width: 100, // Limite la largeur du conteneur
                    child: Text(
                      _userDisplayName!,
                      style: TextStyle(fontSize: 18, color: Colors.black),
                      overflow:
                          TextOverflow.ellipsis, // Gère le débordement du texte
                    ),
                  ),
                ],
                Text(
                  " !",
                  style: TextStyle(fontSize: 18, color: Colors.black),
                ),
              ],
            ),
            actions: [
              CircleAvatar(
                backgroundColor: Colors.black,
                child: Icon(
                  Icons.account_circle,
                  color: Colors.white,
                ),
              ),
              SizedBox(width: 10),
            ],
          ),
        ),
        body: Container(
          padding: const EdgeInsets.fromLTRB(15, 10, 10, 10),
          child: Column(
            children: [
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
              label: "Contacts",
            ),
            BottomNavigationBarItem(
              icon: Icon(Icons.call),
              label: "Appels",
            ),
            BottomNavigationBarItem(
                icon: Icon(Icons.notifications), label: "Notifications"),
            BottomNavigationBarItem(
              icon: Icon(Icons.settings),
              label: "Paramètres",
            ),
          ],
        ),
      ),
    );
  }
}
