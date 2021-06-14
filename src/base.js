import firebase from 'firebase';
import 'firebase/storage'


const firebaseConfig = {
    apiKey: "AIzaSyD7DN2ZxGPPDCV_X_SshrdRASuisAzkGpg",
    authDomain: "projecy-storage.firebaseapp.com",
    projectId: "projecy-storage",
    storageBucket: "projecy-storage.appspot.com",
    messagingSenderId: "498398582214",
    appId: "1:498398582214:web:2cb8d23c2e60b212400ec7"
  };
  // Initialize Firebase
 export const app = firebase.initializeApp(firebaseConfig);