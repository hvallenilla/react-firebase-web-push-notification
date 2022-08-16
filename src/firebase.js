import { initializeApp } from "firebase/app";
import { getMessaging } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyAGW5sFSv7AZqAo4ALV0UNVxlN_i6XqE5A",
  authDomain: "gpx-grower-app.firebaseapp.com",
  projectId: "gpx-grower-app",
  storageBucket: "gpx-grower-app.appspot.com",
  messagingSenderId: "406228877549",
  appId: "1:406228877549:web:a3a8f840bfa4664b1e4ce4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);  

export const messaging = getMessaging(app);