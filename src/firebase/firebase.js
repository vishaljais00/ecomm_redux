import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from "firebase/auth";

// web app's Firebase configuration
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBMB9aKp_xebrjcOvVny-wrcyHA8_BcdZE",
  authDomain: "busybusy2-3d886.firebaseapp.com",
  projectId: "busybusy2-3d886",
  storageBucket: "busybusy2-3d886.appspot.com",
  messagingSenderId: "566605472877",
  appId: "1:566605472877:web:f69145ca63dbd160e80b64"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);
const auth = getAuth();

export default db;
export {app, auth};


