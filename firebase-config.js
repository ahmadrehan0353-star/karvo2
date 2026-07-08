// ====================================================================
// KARVO CONFIGURATION — you must edit the values below before launch
// See SETUP-GUIDE.md for the step-by-step instructions.
// ====================================================================

// 1) Paste your Firebase config here (from Firebase console → Project settings → Your apps)
const firebaseConfig = {
  apiKey: "AIzaSyCVf7AzjRZO09JLW0nw1MSrvUZp5qz3mGg",
  authDomain: "karvo-69a4c.firebaseapp.com",
  projectId: "karvo-69a4c",
  storageBucket: "karvo-69a4c.firebasestorage.app",
  messagingSenderId: "490190724361",
  appId: "1:490190724361:web:2427cabe9c7251faf387d8"
};

// 2) Your email — pro application alerts arrive here, and this account is the ONLY admin
const OWNER_EMAIL = "ahmadrehan0353@gmail.com";

// 3) Your WhatsApp number (already set)
const OWNER_WHATSAPP = "923128539607";

// --------------------------------------------------------------------
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();
