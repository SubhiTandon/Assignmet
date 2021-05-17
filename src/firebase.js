import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCnEpCb-tUltr_MErR0NkUlJDPen0IpPrw",
  authDomain: "clone-29914.firebaseapp.com",
  projectId: "clone-29914",
  storageBucket: "clone-29914.appspot.com",
  messagingSenderId: "709799322035",
  appId: "1:709799322035:web:59870951522bf4d108abc6",
  measurementId: "G-75338MBENC",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
