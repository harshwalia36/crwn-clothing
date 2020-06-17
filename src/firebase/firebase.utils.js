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

 export const createUserProfileDocument=async (userAuth ,additionalData) =>{
   if(!userAuth)
    return;
   
    const userRef =firestore.doc(`users/${userAuth.uid}`);        //create  userRef at the path provided

    const snapshot = await userRef.get();         //take a snapshot of the userRef to know the data exists or not

    // docRef is used to perform CRUD operation on firestore database
    if(!snapshot.exists)
    {
      const {displayName, email} = userAuth;
      const createdAt= new Date();

      try{
            await userRef.set({
              displayName,
              email,
              createdAt,
              ...additionalData
            })
      }
      catch(err){
          console.log('error creating a user' , err.message);
      }   
    }
    return userRef; 
 }
   
  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider =new firebase.auth.GoogleAuthProvider(); //this give access to Google Auth provider class from the authentication library
  provider.setCustomParameters({prompt:'select_account'});  //this means that we want  to always trigger the Google pop up when ever we use this Google auth.
  export const signInWithGoogle =() => auth.signInWithPopup(provider);

  export default firebase;