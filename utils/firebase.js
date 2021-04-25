import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
if (!firebase.apps.length) {
    firebase.initializeApp({
        apiKey: "AIzaSyABQ_iUleG8myeuC-N_iok1twoFo1o4wXQ",
        authDomain: "event-5dd92.firebaseapp.com",
        projectId: "event-5dd92",
        storageBucket: "event-5dd92.appspot.com",
        messagingSenderId: "318325406901",
        appId: "1:318325406901:web:4019a8af8317a45cf3d2fc",
        measurementId: "G-CMQYDH5DZX"
    });
  }
  const auth = firebase.auth();
  export {auth,firebase}