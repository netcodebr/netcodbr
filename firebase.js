// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-app.js";
// importe outros SDKs se precisar (auth/firestore/storage/etc)

export const firebaseConfig = {
  apiKey: "AIzaSyDO51-dKgK5SIeohgWZjqkqc9zXZm5l1YA",
  authDomain: "netcodebr-c3110.firebaseapp.com",
  projectId: "netcodebr-c3110",
  storageBucket: "netcodebr-c3110.firebasestorage.app",
  messagingSenderId: "664767369517",
  appId: "1:664767369517:web:7d30db790ca516e80883a4"
};

export const app = initializeApp(firebaseConfig);

// flag simples para app.js detectar
window.__firebaseReady = true;
