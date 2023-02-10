// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
/**
 * To find your Firebase config object:
 * 
 * 1. Go to your [Project settings in the Firebase console](https://console.firebase.google.com/project/_/settings/general/)
 * 2. In the "Your apps" card, select the nickname of the app for which you need a config object.
 * 3. Select Config from the Firebase SDK snippet pane.
 * 4. Copy the config object snippet, then add it here.
 */
const config = {
  apiKey: "AIzaSyBf7IAskXqZWNcX1oYkNRHUkG_L5zECmU0",
  authDomain: "friendlychat-luca.firebaseapp.com",
  projectId: "friendlychat-luca",
  storageBucket: "friendlychat-luca.appspot.com",
  messagingSenderId: "215761041234",
  appId: "1:215761041234:web:3d65c125973e5126ebac8b"
};

export function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error('No Firebase configuration object provided.' + '\n' +
    'Add your web app\'s configuration object to firebase-config.js');
  } else {
    return config;
  }
}

// Initialize Firebase
const app = initializeApp(config);