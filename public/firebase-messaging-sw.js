importScripts('https://www.gstatic.com/firebasejs/9.2.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.2.0/firebase-messaging-compat.js');

firebase.initializeApp({
    apiKey: "AIzaSyBdLXZlc08QNEP2RUrbZhlr8Rp71XjOzEQ",
    authDomain: "react-firebase-project-c36b0.firebaseapp.com",
    projectId: "react-firebase-project-c36b0",
    storageBucket: "react-firebase-project-c36b0.appspot.com",
    messagingSenderId: "472615623138",
    appId: "1:472615623138:web:8a5606c0ae4e1d2e1281bb"
});

const messaging = firebase.messaging();

// messaging.onBackgroundMessage(function(payload) {
//     console.log('[firebase-messaging-sw.js] Received background message ', payload);
//     // Customize notification here
//     const notificationTitle = 'Titulo de la notificacion';
//     const notificationOptions = {
//       body: 'Este es el body',
//       icon: 'https://www.gstatic.com/devrel-devsite/prod/vaa3422febae2287bcd4c6469032c7425ab2e6def56185b000bf112cadd0fbfd4/firebase/images/touchicon-180.png'
//     };
  
//     self.registration.showNotification(notificationTitle,
//       notificationOptions);
//   });