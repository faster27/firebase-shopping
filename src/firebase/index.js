// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getMessaging, getToken } from 'firebase/messaging';
import { getFirestore } from "firebase/firestore";


const vapidKey = "BNBqHo3cRReDAsNaZlYBSDy6QN-ei-khkHgis1z-1qGY2t_ME-W3peAFUl6wDMoGwVVIYrXUU-jJ9TwuFnkhTcw"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBdLXZlc08QNEP2RUrbZhlr8Rp71XjOzEQ",
  authDomain: "react-firebase-project-c36b0.firebaseapp.com",
  projectId: "react-firebase-project-c36b0",
  storageBucket: "react-firebase-project-c36b0.appspot.com",
  messagingSenderId: "472615623138",
  appId: "1:472615623138:web:8a5606c0ae4e1d2e1281bb"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const messaging = getMessaging();

getToken(messaging, { vapidKey })
  .then((currentToken) => {
    if (currentToken) {
      // Send the token to your server and update the UI if necessary
      // ...
      sendTokenToServer(currentToken)
    } else {
      // Show permission request UI
      console.log('No registration token available. Request permission to generate one.');
      // ...
    }
  }).catch((err) => {
    console.log('An error occurred while retrieving token. ', err);
    // ...
  });

const sendTokenToServer = () => {
  if(localStorage.getItem('tokenSentToServer')) return;
  // TO-DO: Implementar la logica de que en el servidor 
  // se almacene el token
  console.log("Ha almacenado el token")
  localStorage.setItem('tokenSentToServer', '1');
} 

export const db = getFirestore(app);
