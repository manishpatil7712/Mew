//* Import the functions you need from the SDKs you need
import { initializeApp, getApps } from 'firebase/app';
import { getAuth, setPersistence, browserLocalPersistence } from 'firebase/auth';

//* Add the Web App's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD49Pnx3irtcOBTwEJxZcokSdAXeBIf4xs",
  authDomain: "dogs-90dcc.firebaseapp.com",
  projectId: "dogs-90dcc",
  storageBucket: "dogs-90dcc.appspot.com",
  messagingSenderId: "802013809969",
  appId: "1:802013809969:web:0660022d2bb6d8ad0e3410",
  measurementId: "G-G6Y5T6MMWE",
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
