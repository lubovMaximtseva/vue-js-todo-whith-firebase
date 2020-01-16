import firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBfei6fr7f4pcvt5HO5uQcb36iVQJvNGWQ",
  authDomain: "task-ba271.firebaseapp.com",
  databaseURL: "https://task-ba271.firebaseio.com",
  projectId: "task-ba271",
  storageBucket: "task-ba271.appspot.com",
  messagingSenderId: "417436626691",
  appId: "1:417436626691:web:1c552d2599f7c16a810336"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const firestore = firebaseApp.firestore();

export default firestore;
