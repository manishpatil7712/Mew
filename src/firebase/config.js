//* Import the functions you need from the SDKs you need
import { initializeApp, getApps } from 'firebase/app';
import { getAuth, setPersistence, browserLocalPersistence } from 'firebase/auth';

//* Add the Web App's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCa3SOlwwAZgiW1xH6nXJIlsG--CXe8Mno",
  authDomain: "meow-9268d.firebaseapp.com",
  projectId: "meow-9268d",
  storageBucket: "meow-9268d.firebasestorage.app",
  messagingSenderId: "184429401124",
  appId: "1:184429401124:web:c96ff6df84a06582e2b4b1",
  measurementId: "G-86GHX6QPFB",
};

//* Initialize Firebase
let firebase_app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

//* Initialize Firebase Auth and set persistence
const auth = getAuth(firebase_app);
setPersistence(auth, browserLocalPersistence)
  .then(() => {
    console.log("Session persistence set to LOCAL");
  })
  .catch((error) => {
    console.error("Failed to set session persistence:", error);
  });

export { auth };
export default firebase_app; 
