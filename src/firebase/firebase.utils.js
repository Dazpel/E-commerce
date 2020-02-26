import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
