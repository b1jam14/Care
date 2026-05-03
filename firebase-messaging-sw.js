self.addEventListener("install", () => {
  self.skipWaiting();
});

self.addEventListener("activate", () => {
  self.clients.claim();
});

importScripts("https://www.gstatic.com/firebasejs/12.12.1/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/12.12.1/firebase-messaging-compat.js");

firebase.initializeApp({
  apiKey: "AIzaSyAOlAIN2F0KZqNuvoh5ohlT66OdOhzz7P8",
  authDomain: "care-2cbc1.firebaseapp.com",
  projectId: "care-2cbc1",
  storageBucket: "care-2cbc1.firebasestorage.app",
  messagingSenderId: "102325538795",
  appId: "1:102325538795:web:51648a53db1cc0f1d093ae"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(payload => {
  const title = payload.notification?.title || "Care";
  const options = {
    body: payload.notification?.body || "Nouvelle notification",
    icon: "./icon-192.png",
    badge: "./icon-192.png"
  };

  self.registration.showNotification(title, options);
});
