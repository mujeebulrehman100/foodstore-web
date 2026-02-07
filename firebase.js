
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCqkAoviyL1tm3KpyF1SMGxcMFymjCfjc0",
  authDomain: "foodstore-69ec9.firebaseapp.com",
  projectId: "foodstore-69ec9",
  storageBucket: "foodstore-69ec9.appspot.com",
  messagingSenderId: "382657600084",
  appId: "1:382657600084:web:f37fe5d5d2880057196bc1"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
