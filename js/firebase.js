import { initializeApp } from "https://www.gstatic.com/firebasejs/12.12.1/firebase-app.js";
import { getMessaging } from "https://www.gstatic.com/firebasejs/12.12.1/firebase-messaging.js";

const firebaseConfig = { 
    apiKey: "AIzaSyAOlAIN2F0KZqNuvoh5ohlT66OdOhzz7P8",
    authDomain: "care-2cbc1.firebaseapp.com",
    projectId: "care-2cbc1",
    storageBucket: "care-2cbc1.firebasestorage.app",
    messagingSenderId: "102325538795",
    appId: "1:102325538795:web:51648a53db1cc0f1d093ae"
};

const app = initializeApp(firebaseConfig);
export const messaging = getMessaging(app);