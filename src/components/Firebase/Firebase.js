// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useContext, useEffect, useState } from "react";
import { CityContext } from "../../Contexts/CityContext";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyARdl0lNuOwNpgnDeoijeKyh7hEIJKMOEc",
  authDomain: "auth-test-2ecb1.firebaseapp.com",
  projectId: "auth-test-2ecb1",
  storageBucket: "auth-test-2ecb1.appspot.com",
  messagingSenderId: "76612572560",
  appId: "1:76612572560:web:36168a51349a7947038f15",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

export function signup(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}

export function login(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}

export function logout() {
  return signOut(auth);
}

// Custom React Hook
export function useAuth() {
  // const { currentUser, setCurrentUser } = useContext(CityContext)
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);

      return unsub;
    });
  }, []);

  return currentUser;
}
