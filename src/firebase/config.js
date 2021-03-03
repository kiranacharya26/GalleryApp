import firebase from 'firebase/app'
import 'firebase/storage'
import 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyAcD5PR5BZ7EygCyOFHJZWnS0jSJwwSC48",
    authDomain: "gallery-9b7ec.firebaseapp.com",
    projectId: "gallery-9b7ec",
    storageBucket: "gallery-9b7ec.appspot.com",
    messagingSenderId: "447881577180",
    appId: "1:447881577180:web:07fa825a16bc28fbc4aa19",
    measurementId: "G-KN11KBXTBT"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  const projectStorage = firebase.storage()
  const projectFirestore = firebase.firestore()
  const timeStamp  = firebase.firestore.FieldValue.serverTimestamp

  export {projectFirestore, projectStorage,timeStamp}