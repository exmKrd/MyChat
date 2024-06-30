import 'package:flutter/material.dart';
import 'package:firebase_auth/firebase_auth.dart';
import 'package:cloud_firestore/cloud_firestore.dart';
import 'chat.dart';

class Contact extends StatefulWidget {
  const Contact({Key? key}) : super(key: key);

  @override
  State<Contact> createState() => _ContactState();
}

class _ContactState extends State<Contact> {
  late Stream<DocumentSnapshot> _userStream;
  final FirebaseAuth _auth = FirebaseAuth.instance;
  final FirebaseFirestore _firestore = FirebaseFirestore.instance;

  final TextEditingController _searchController = TextEditingController();
  List<Map<String, dynamic>> _searchResults = [];

  @override
  void initState() {
    super.initState();
    _userStream =
        _firestore.collection('users').doc(_auth.currentUser!.uid).snapshots();
  }

  Widget _buildUserListItem(DocumentSnapshot doc) {
    var userData = doc.data() as Map<String, dynamic>;
    List<dynamic> contacts = userData['contacts'] ?? [];

    return ListView.builder(
      itemCount: contacts.length,
      itemBuilder: (context, index) {
        String displayName = contacts[index]['displayName'];
        String email = contacts[index]['email'];

        return Card(
          child: ListTile(
            title: Text(displayName),
            trailing: IconButton(
              icon: Icon(Icons.delete),
              onPressed: () {
                _showDeleteDialog(displayName, email);
              },
            ),
            onTap: () {
              Navigator.push(
                context,
                MaterialPageRoute(
                  builder: (context) =>
                      Chat(userEmail: email, userName: displayName),
                  fullscreenDialog: true,
                ),
              );
            },
          ),
        );
      },
    );
  }

  Widget _buildSearchResults() {
    return ListView.builder(
      itemCount: _searchResults.length,
      itemBuilder: (context, index) {
        String displayName = _searchResults[index]['displayName'];
        String email = _searchResults[index]['email'];

        return ListTile(
          title: Text(displayName),
          onTap: () {
            Navigator.push(
              context,
              MaterialPageRoute(
                builder: (context) =>
                    Chat(userEmail: email, userName: displayName),
                fullscreenDialog: true,
              ),
            );
          },
        );
      },
    );
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Contacts'),
      ),
      body: StreamBuilder<DocumentSnapshot>(
        stream: _userStream,
        builder: (context, snapshot) {
          if (snapshot.hasError) {
            return Center(child: Text('Erreur : ${snapshot.error}'));
          }

          if (snapshot.connectionState == ConnectionState.waiting) {
            return Center(child: CircularProgressIndicator());
          }

          var userData = snapshot.data!.data() as Map<String, dynamic>;
          List<dynamic> contacts = userData['contacts'] ?? [];

          return Column(
            children: [
              TextField(
                controller: _searchController,
                decoration: InputDecoration(
                  labelText: "Rechercher un utilisateur",
                  prefixIcon: Icon(Icons.search),
                ),
                onChanged: (value) {
                  _performSearch(value.trim());
                },
              ),
              Expanded(
                child: _searchResults.isNotEmpty
                    ? _buildSearchResults()
                    : contacts.isNotEmpty
                        ? _buildUserListItem(snapshot.data!)
                        : Center(child: Text('Aucun contact disponible')),
              ),
            ],
          );
        },
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: () {
          _showAddContactDialog();
        },
        child: Icon(Icons.add),
      ),
    );
  }

  void _performSearch(String query) {
    if (query.isEmpty) {
      setState(() {
        _searchResults.clear();
      });
      return;
    }

    FirebaseFirestore.instance
        .collection('users')
        .where('displayName', isGreaterThanOrEqualTo: query)
        .where('displayName', isLessThan: query + '\uf8ff')
        .get()
        .then((querySnapshot) {
      setState(() {
        _searchResults = querySnapshot.docs
            .map((doc) => doc.data())
            .toList();
      });
    }).catchError((error) {
      print("Error searching for users: $error");
      setState(() {
        _searchResults.clear();
      });
    });
  }

  void _showAddContactDialog() {
    showDialog(
      context: context,
      builder: (BuildContext context) {
        return AlertDialog(
          title: Text('Ajouter un contact'),
          content: TextField(
            controller: _searchController,
            decoration: InputDecoration(
              labelText: "Entrez le nom d'utilisateur",
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
              child: Text('Ajouter'),
              onPressed: () {
                _addContact(_searchController.text.trim());
              },
            ),
          ],
        );
      },
    );
  }

  void _addContact(String displayName) {
    FirebaseFirestore.instance
        .collection('users')
        .where('displayName', isEqualTo: displayName)
        .get()
        .then((querySnapshot) {
      if (querySnapshot.docs.isNotEmpty) {
        DocumentSnapshot contactDoc = querySnapshot.docs.first;
        var contactData = contactDoc.data() as Map<String, dynamic>;
        String email = contactData['email'];

        _firestore.collection('users').doc(_auth.currentUser!.uid).update({
          'contacts': FieldValue.arrayUnion([
            {'displayName': displayName, 'email': email}
          ])
        }).then((value) {
          ScaffoldMessenger.of(context).showSnackBar(
            SnackBar(
              content: Text('Contact ajouté avec succès!'),
              duration: Duration(seconds: 2),
            ),
          );
          Navigator.of(context).pop();
        }).catchError((error) {
          ScaffoldMessenger.of(context).showSnackBar(
            SnackBar(
              content: Text('Erreur lors de l\'ajout du contact.'),
              duration: Duration(seconds: 2),
            ),
          );
        });
      } else {
        ScaffoldMessenger.of(context).showSnackBar(
          SnackBar(
            content:
                Text('Aucun utilisateur trouvé avec ce nom d\'utilisateur.'),
            duration: Duration(seconds: 2),
          ),
        );
      }
    });
  }

  void _showDeleteDialog(String displayName, String email) {
    showDialog(
      context: context,
      builder: (BuildContext context) {
        return AlertDialog(
          title: Text('Supprimer le contact'),
          content: Text('Êtes-vous sûr de vouloir supprimer ce contact ?'),
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
                _deleteContact(displayName, email);
              },
            ),
          ],
        );
      },
    );
  }

  void _deleteContact(String displayName, String email) {
    _firestore.collection('users').doc(_auth.currentUser!.uid).update({
      'contacts': FieldValue.arrayRemove([
        {'displayName': displayName, 'email': email}
      ])
    }).then((value) {
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(
          content: Text('Contact supprimé avec succès!'),
          duration: Duration(seconds: 2),
        ),
      );
      Navigator.of(context).pop();
    }).catchError((error) {
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(
          content: Text('Erreur lors de la suppression du contact.'),
          duration: Duration(seconds: 2),
        ),
      );
    });
  }
}
