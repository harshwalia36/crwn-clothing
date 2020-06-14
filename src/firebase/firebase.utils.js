import firebase from 'firebase/app';  //we do "/app" bcz we are not importing the whole firebase library which is very large
import 'firebase/firestore';
import 'firebase/auth';

const config={
    apiKey: "AIzaSyCig55am0qAb8gyY7PKjgnTgqv13jqYYW8",
    authDomain: "crwn-db-a878d.firebaseapp.com",
    databaseURL: "https://crwn-db-a878d.firebaseio.com",
    projectId: "crwn-db-a878d",
    storageBucket: "crwn-db-a878d.appspot.com",
    messagingSenderId: "266894909503",
    appId: "1:266894909503:web:a6d83d1198206f3f12d88a",
    measurementId: "G-ECPRQ9ZN71"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider =new firebase.auth.GoogleAuthProvider(); //this give access to Google Auth provider class from the authentication library
  provider.setCustomParameters({prompt:'select_account'});  //this means that we want  to always trigger the Google pop up when ever we use this Google auth.
  export const signInWithGoogle =() => auth.signInWithPopup(provider);

  export default firebase;