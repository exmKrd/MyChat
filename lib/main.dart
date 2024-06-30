import 'dart:async';
import 'package:firebase_auth/firebase_auth.dart';
import 'package:flutter/material.dart';
import 'package:mychat/mychat.dart';
import 'login.dart';
import 'package:firebase_core/firebase_core.dart';
import 'firebase_options.dart';

void main() async {
  WidgetsFlutterBinding.ensureInitialized();
  await Firebase.initializeApp(
    options: DefaultFirebaseOptions.currentPlatform,
  );

  runApp(const MyApp());
}

class MyApp extends StatefulWidget {
  const MyApp({Key? key}) : super(key: key);

  @override
  State<MyApp> createState() => _MyAppState();
}

class _MyAppState extends State<MyApp> {
  late StreamSubscription<User?> _userAuthSubscription;
  bool userLoggedIn = false;

  @override
  void initState() {
    super.initState();
    _userAuthSubscription =
        FirebaseAuth.instance.authStateChanges().listen((User? user) {
      setState(() {
        userLoggedIn = user != null;
      });
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
      theme: ThemeData.light().copyWith(
          colorScheme: ColorScheme.fromSeed(seedColor: Colors.orange.shade400)),
      home: userLoggedIn ? const MyChat() : const LoginScreen(),
    );
  }
}
