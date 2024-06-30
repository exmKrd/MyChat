import 'package:flutter/material.dart';
import 'package:firebase_auth/firebase_auth.dart';
import 'package:cloud_firestore/cloud_firestore.dart';

class Setting extends StatefulWidget {
  const Setting({Key? key}) : super(key: key);

  @override
  _SettingState createState() => _SettingState();
}

class _SettingState extends State<Setting> {
  final TextEditingController _usernameController = TextEditingController();

  Future<void> updateUserDisplayName(String newDisplayName) async {
    try {
      User? user = FirebaseAuth.instance.currentUser;
      if (user != null) {
        String oldDisplayName =
            user.displayName ?? ''; // Ancien nom d'utilisateur

        // Mettre à jour le nom d'utilisateur de l'utilisateur actuel dans Firestore
        await FirebaseFirestore.instance
            .collection("users")
            .doc(user.uid)
            .update({'displayName': newDisplayName});

        // Récupérer tous les contacts qui référencent l'ancien nom d'utilisateur
        QuerySnapshot contactsToUpdateQuery = await FirebaseFirestore.instance
            .collection('contacts')
            .where('displayName', isEqualTo: oldDisplayName)
            .get();

        WriteBatch batch = FirebaseFirestore.instance.batch();

        contactsToUpdateQuery.docs.forEach((contactDoc) {
          // Mettre à jour le nom d'utilisateur dans chaque contact
          DocumentReference contactRef = FirebaseFirestore.instance
              .collection('contacts')
              .doc(contactDoc.id);

          batch.update(contactRef, {'displayName': newDisplayName});
        });

        // Exécuter la transaction batch pour mettre à jour tous les contacts
        await batch.commit();

        // Afficher un message de succès
        ScaffoldMessenger.of(context).showSnackBar(
          SnackBar(
            content: Text(
                'Nom d\'utilisateur mis à jour avec succès, veuillez recharger la page'),
            duration: Duration(seconds: 2),
          ),
        );

        // Recharger la page ou naviguer vers une nouvelle page si nécessaire
        Navigator.pushReplacement(
          context,
          MaterialPageRoute(builder: (BuildContext context) => Setting()),
        );
        Navigator.of(context).pop(); // Fermer le dialog
      } else {
        print('Utilisateur non connecté');
      }
    } catch (e) {
      print('Erreur lors de la mise à jour du nom d\'utilisateur: $e');
    }
  }

  Future<void> showLegalDialog(BuildContext context) async {
    showDialog(
      context: context,
      builder: (BuildContext context) {
        return AlertDialog(
          title: Text('Mentions Légales'),
          content: SingleChildScrollView(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(
                  "Mentions Légales\n\n"
                  "1. Informations générales\n\n"
                  "Ce site web et l'application associée (MyChat) sont exploités par Derick Maxime \n\n"
                  "2. Responsabilité\n\n"
                  "Nous nous efforçons de fournir des informations précises et à jour dans l'Application. Toutefois, nous ne garantissons pas l'exactitude, l'exhaustivité ou la pertinence des informations fournies. L'utilisation de l'Application est à vos propres risques.\n\n"
                  "3. Propriété intellectuelle\n\n"
                  "Tous les contenus, logos, marques de commerce et autres éléments de propriété intellectuelle présents dans l'Application sont la propriété de Derick Maxime ou de ses concédants de licence. Ils sont protégés par les lois sur les droits d'auteur et les marques de commerce en vigueur.\n\n"
                  "4. Collecte et utilisation des données\n\n"
                  "Nous respectons votre vie privée et protégeons vos données personnelles conformément à notre Politique de Confidentialité. En utilisant l'Application, vous consentez à la collecte et à l'utilisation de vos données conformément à cette politique.\n\n"
                  "5. Liens vers des sites tiers\n\n"
                  "L'Application peut contenir des liens vers des sites web tiers. Nous ne sommes pas responsables du contenu de ces sites web tiers ni des pratiques en matière de protection des données qu'ils peuvent adopter.\n\n"
                  "6. Modifications des mentions légales\n\n"
                  "Nous nous réservons le droit de modifier ces mentions légales à tout moment. Les modifications seront publiées dans l'Application et entreront en vigueur dès leur publication.\n\n"
                  "7. Contact\n\n"
                  "Pour toute question concernant ces mentions légales, veuillez nous contacter à l'adresse suivante :\n"
                  "MyChat.app.2024@gmail.com",
                ),
              ],
            ),
          ),
          actions: <Widget>[
            TextButton(
              onPressed: () {
                Navigator.of(context).pop();
              },
              child: Text('Fermer'),
            ),
          ],
        );
      },
    );
  }

  Future<void> showAboutDialog(BuildContext context) async {
    showDialog(
      context: context,
      builder: (BuildContext context) {
        return AlertDialog(
          title: Text('À propos'),
          content: Text(
            "MyChat est une application de messagerie développée par un élève de 6 ième informatique "
            "Elle permet aux utilisateurs de communiquer facilement et efficacement avec leurs amis et leur famille. "
            "L'objectif de MyChat est de fournir une plateforme simple et sécurisée pour les conversations quotidiennes. "
            "MyChat est en version bêta, des bugs peuvent survenir.",
          ),
          actions: <Widget>[
            TextButton(
              onPressed: () {
                Navigator.of(context).pop();
              },
              child: Text('Fermer'),
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
        title: const Text('Paramètres'),
        automaticallyImplyLeading: false,
      ),
      body: Padding(
        padding: const EdgeInsets.all(16.0),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            ElevatedButton(
              onPressed: () async {
                await FirebaseAuth.instance.signOut();
              },
              child: const Text('Se déconnecter'),
            ),
            SizedBox(height: 20),
            ElevatedButton(
              onPressed: () {
                showLegalDialog(context);
              },
              child: const Text('Mentions Légales'),
            ),
            SizedBox(height: 20),
            ElevatedButton(
              onPressed: () {
                showAboutDialog(context);
              },
              child: const Text('À propos'),
            ),
            SizedBox(height: 20),
            ElevatedButton(
              onPressed: () {
                showDialog(
                  context: context,
                  builder: (BuildContext context) {
                    return AlertDialog(
                      title: Text('Changer nom d\'utilisateur'),
                      content: Column(
                        mainAxisSize: MainAxisSize.min,
                        children: [
                          TextField(
                            controller: _usernameController,
                            decoration: InputDecoration(
                              labelText: 'Nouveau nom d\'utilisateur',
                            ),
                          ),
                        ],
                      ),
                      actions: <Widget>[
                        TextButton(
                          onPressed: () {
                            Navigator.of(context).pop();
                          },
                          child: Text('Annuler'),
                        ),
                        TextButton(
                          onPressed: () {
                            String newUsername =
                                _usernameController.text.trim();
                            if (newUsername.isNotEmpty) {
                              updateUserDisplayName(newUsername);
                            } else {
                              ScaffoldMessenger.of(context).showSnackBar(
                                SnackBar(
                                  content: Text(
                                      'Veuillez entrer un nouveau nom d\'utilisateur'),
                                  duration: Duration(seconds: 2),
                                ),
                              );
                            }
                          },
                          child: Text('Confirmer'),
                        ),
                      ],
                    );
                  },
                );
              },
              child: const Text('Changer nom d\'utilisateur'),
            ),
            SizedBox(height: 20),
            Text(
              'Contact',
              style: TextStyle(
                fontSize: 20,
                fontWeight: FontWeight.bold,
              ),
            ),
            SizedBox(height: 10),
            Row(
              children: [
                Icon(Icons.email, color: Colors.blue),
                SizedBox(width: 10),
                Text(
                  'MyChat.app.2024@gmail.com',
                  style: TextStyle(fontSize: 16),
                ),
              ],
            ),
            SizedBox(height: 20),
            Text(
              '© 2024 Derick Maxime',
              style: TextStyle(color: Colors.grey),
            ),
          ],
        ),
      ),
    );
  }
}
