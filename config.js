import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyDhWOzjUpxpQJPU7wc9cCREzhjybQ4pcmc",
    authDomain: "e-ride-317d1.firebaseapp.com",
    projectId: "e-ride-317d1",
    storageBucket: "e-ride-317d1.appspot.com",
    messagingSenderId: "247830976730",
    appId: "1:247830976730:web:49b0ad59a2fa2276e1ade3"
  };
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
