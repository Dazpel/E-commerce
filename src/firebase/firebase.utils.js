import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config  = {
    apiKey: "AIzaSyD1teST1H04qBCCWRUZQ-rlFXiJZUw6kpw",
    authDomain: "udemyecommerce-90954.firebaseapp.com",
    databaseURL: "https://udemyecommerce-90954.firebaseio.com",
    projectId: "udemyecommerce-90954",
    storageBucket: "udemyecommerce-90954.appspot.com",
    messagingSenderId: "203640212957",
    appId: "1:203640212957:web:289372a2745735aff8fa34",
    measurementId: "G-RLNZCM9BQF"
  };

  firebase.initializeApp(config);


  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;