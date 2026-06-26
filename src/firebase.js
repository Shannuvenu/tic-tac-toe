import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAMEfJVRVx5CBqsLjjf0Fu6guRXwPP_3QM",
  authDomain: "tic-tac-toe-b0e12.firebaseapp.com",
  projectId: "tic-tac-toe-b0e12",
  storageBucket: "tic-tac-toe-b0e12.firebasestorage.app",
  messagingSenderId: "1015489189357",
  appId: "1:1015489189357:web:2614b337d728c062eb03e4",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();