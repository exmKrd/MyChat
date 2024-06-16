import 'dart:async';


import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:firebase_auth/firebase_auth.dart';
import 'package:flutter/material.dart';
import 'package:mychat/mychat.dart';
import 'login.dart';
import 'package:firebase_core/firebase_core.dart';
import 'package:flutter/widgets.dart';
import 'firebase_options.dart';
var db = FirebaseFirestore.instance;

void main() async {
  
  
  // Initialize Firebase Core
  WidgetsFlutterBinding.ensureInitialized();
  await Firebase.initializeApp(
    options: DefaultFirebaseOptions.currentPlatform,
  ); // Initialize Firebase Core
  runApp(const MyApp());
}

class MyApp extends StatefulWidget {
  const MyApp({super.key});

  @override
  State<MyApp> createState() => _MyApp();

}

class _MyApp extends State<MyApp>  {
  late StreamSubscription _userAuthSubscription;
  bool userLoggedIn = false;


@override
  void initState() {
    super.initState();
_userAuthSubscription =
        FirebaseAuth.instance.authStateChanges().listen((User? user) {
      if (user == null) {
        setState(() {
          userLoggedIn = false;
        });
      } else {
        setState(() {
          userLoggedIn = true;
        });

        
      }
    });
}

@override
  void dispose() {
    _userAuthSubscription.cancel();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'MyChat',
      theme: ThemeData(
        colorScheme: ColorScheme.fromSeed(
          seedColor: Color.fromARGB(255, 243, 164, 60),
        ),
        useMaterial3: true,
      ),
      home: userLoggedIn ? const MyChat() : const LoginScreen()
    );
  }
}