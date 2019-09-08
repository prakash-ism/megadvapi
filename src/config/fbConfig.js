import firebase from 'firebase/app';
import 'firebase/firestore'
import 'firebase/auth'

var firebaseConfig = {
    apiKey: "AIzaSyAvT8rht03uKMXMZd8s--1et_OYI5oz9qw",
    authDomain: "megadvapi.firebaseapp.com",
    databaseURL: "https://megadvapi.firebaseio.com",
    projectId: "megadvapi",
    storageBucket: "megadvapi.appspot.com",
    messagingSenderId: "292843121123",
    appId: "1:292843121123:web:2f03092e5cf090d8"
  };
  // Initialize Firebase

  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({})
  //timestampsInSnapshots : true

  export default firebase;
