import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBKAWtJBIUXeQA5D1gcaY_9FYvFyaMMmqE",
  authDomain: "twitter-clone-f3025.firebaseapp.com",
  projectId: "twitter-clone-f3025",
  storageBucket: "twitter-clone-f3025.appspot.com",
  messagingSenderId: "1020622740940",
  appId: "1:1020622740940:web:4c1440489b9510dfff9169",
  measurementId: "G-B09SHFS03L",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
