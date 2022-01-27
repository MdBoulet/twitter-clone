import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAu27K7RJzOrCJwSoQ_Q-3BeYuZs5Sx4Zw",
  authDomain: "twitter-clone-8325c.firebaseapp.com",
  projectId: "twitter-clone-8325c",
  storageBucket: "twitter-clone-8325c.appspot.com",
  messagingSenderId: "934944127126",
  appId: "1:934944127126:web:b6bfe4c27db66193cc2ab7"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export default db;