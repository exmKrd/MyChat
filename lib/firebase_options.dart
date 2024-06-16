// File generated by FlutterFire CLI.
// ignore_for_file: type=lint
import 'package:firebase_core/firebase_core.dart' show FirebaseOptions;
import 'package:flutter/foundation.dart'
    show defaultTargetPlatform, kIsWeb, TargetPlatform;

/// Default [FirebaseOptions] for use with your Firebase apps.
///
/// Example:
/// ```dart
/// import 'firebase_options.dart';
/// // ...
/// await Firebase.initializeApp(
///   options: DefaultFirebaseOptions.currentPlatform,
/// );
/// ```
class DefaultFirebaseOptions {
  static FirebaseOptions get currentPlatform {
    if (kIsWeb) {
      return web;
    }
    switch (defaultTargetPlatform) {
      case TargetPlatform.android:
        return android;
      case TargetPlatform.iOS:
        return ios;
      case TargetPlatform.macOS:
        return macos;
      case TargetPlatform.windows:
        return windows;
      case TargetPlatform.linux:
        throw UnsupportedError(
          'DefaultFirebaseOptions have not been configured for linux - '
          'you can reconfigure this by running the FlutterFire CLI again.',
        );
      default:
        throw UnsupportedError(
          'DefaultFirebaseOptions are not supported for this platform.',
        );
    }
  }

  static const FirebaseOptions web = FirebaseOptions(
    apiKey: 'AIzaSyATn82fhvv58DkWUFsX3X_R8u-k-Wq0YGw',
    appId: '1:445947855754:web:44b56260dadc402c017e73',
    messagingSenderId: '445947855754',
    projectId: 'mychat-5938a',
    authDomain: 'mychat-5938a.firebaseapp.com',
    storageBucket: 'mychat-5938a.appspot.com',
    measurementId: 'G-Q2V8R8YVDZ',
  );

  static const FirebaseOptions android = FirebaseOptions(
    apiKey: 'AIzaSyAhLFnseoNNkbat2UpEWbyL4kpiuAtF3HA',
    appId: '1:445947855754:android:ab75580f66254eb3017e73',
    messagingSenderId: '445947855754',
    projectId: 'mychat-5938a',
    storageBucket: 'mychat-5938a.appspot.com',
  );

  static const FirebaseOptions ios = FirebaseOptions(
    apiKey: 'AIzaSyDeDuSw6TCv3drbGnUXXHj2piESbJ5pDiM',
    appId: '1:445947855754:ios:b8945972536c33d4017e73',
    messagingSenderId: '445947855754',
    projectId: 'mychat-5938a',
    storageBucket: 'mychat-5938a.appspot.com',
    iosBundleId: 'com.example.mychat',
  );

  static const FirebaseOptions macos = FirebaseOptions(
    apiKey: 'AIzaSyDeDuSw6TCv3drbGnUXXHj2piESbJ5pDiM',
    appId: '1:445947855754:ios:b8945972536c33d4017e73',
    messagingSenderId: '445947855754',
    projectId: 'mychat-5938a',
    storageBucket: 'mychat-5938a.appspot.com',
    iosBundleId: 'com.example.mychat',
  );

  static const FirebaseOptions windows = FirebaseOptions(
    apiKey: 'AIzaSyATn82fhvv58DkWUFsX3X_R8u-k-Wq0YGw',
    appId: '1:445947855754:web:862c2a5f78c8e8f7017e73',
    messagingSenderId: '445947855754',
    projectId: 'mychat-5938a',
    authDomain: 'mychat-5938a.firebaseapp.com',
    storageBucket: 'mychat-5938a.appspot.com',
    measurementId: 'G-57J48QL9RT',
  );
  

}