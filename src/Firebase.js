import firebase from 'firebase';

var firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCaEAdhX7pwRzNKp53CwR4NHP-gh9Zn1qQ",
    authDomain: "react-contact-form-d603d.firebaseapp.com",
    projectId: "react-contact-form-d603d",
    storageBucket: "react-contact-form-d603d.appspot.com",
    messagingSenderId: "350566607367",
    appId: "1:350566607367:web:10829336a2a960e69198a2"
});

var db = firebaseApp.firestore();

export { db };