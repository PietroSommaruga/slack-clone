import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyD9UxGXz430-WTYZuJmkfWO-bbwBsMWMtA",
    authDomain: "slack-clone-b9755.firebaseapp.com",
    projectId: "slack-clone-b9755",
    storageBucket: "slack-clone-b9755.appspot.com",
    messagingSenderId: "313277681356",
    appId: "1:313277681356:web:8a37e0c224cabd72d5fc69"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { db, auth, provider };