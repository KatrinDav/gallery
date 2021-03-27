import firebase from 'firebase';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyB9rKAkQs0xm31m2QtZW-3hVXY14jXzRAA",
    authDomain: "images-ninja-project.firebaseapp.com",
    projectId: "images-ninja-project",
    storageBucket: "images-ninja-project.appspot.com",
    messagingSenderId: "251226357255",
    appId: "1:251226357255:web:e256b41f4cd1f65cd3b4a2"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };