import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
   apiKey: "AIzaSyBIz7t_7BV3_zaOcrBEp0lhudcKtQHj98w",
  authDomain: "facebook-messenger-clone-d778c.firebaseapp.com",
  projectId: "facebook-messenger-clone-d778c",
  storageBucket: "facebook-messenger-clone-d778c.appspot.com",
  messagingSenderId: "922085860972",
  appId: "1:922085860972:web:365456a800d1e857b85a49",
  measurementId: "G-FXT52P6R4Y"
};

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };