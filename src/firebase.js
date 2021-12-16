import { useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore, collection, getDocs, addDoc } from "firebase/firestore";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "@firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDmzUQqf-sKE9naWQvsJhroJobVlHCxcVQ",
  authDomain: "react-auth-bf077.firebaseapp.com",
  projectId: "react-auth-bf077",
  storageBucket: "react-auth-bf077.appspot.com",
  messagingSenderId: "791646911323",
  appId: "1:791646911323:web:bcfcac491986507e0cf87e",
  measurementId: "G-LMK2S8NEZH",
};

// Current user
const useAuth = () => {
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => setCurrentUser(user));
    return unsub;
  }, []);

  return currentUser;
};

const firebase = initializeApp(firebaseConfig);

// firstore db
const db = getFirestore(firebase);

// getting all posts from firebase cloud database;
const getDataFromFireStore = async () => {
  try {
    const docSnap = await getDocs(collection(db, "posts"));
    const myData = [];
    docSnap.forEach((doc) => {
      myData.push(doc.data());
    });
    return myData;
  } catch (e) {
    alert(e);
  }
};

// sending data to firestore
const sendDataToFireStore = async (title, content, author) => {
  try {
    const docRef = await addDoc(collection(db, "posts"), {
      title,
      content,
      time: String(new Date()),
      author,
    });
    console.log(docRef.id);
    return docRef;
  } catch (e) {
    alert(e);
  }
};

// deleting data from firestore
const deleteDataFromFireStore = async (docId) => {
  try {
    const delRef = await collection(db, "posts", "0EcXXrHQpVkc9eBTqVSE");
  } catch (e) {
    alert(e);
  }
};

// Initialize Firebase
const analytics = getAnalytics(firebase);
const auth = getAuth();

// signUp Function
const signUp = async (email, password) => {
  try {
    const createUser = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    console.log(createUser);
    return createUser;
  } catch (error) {
    alert(error);
  }
};

// signIn Function
const signIn = async (email, password) => {
  try {
    const createUser = await signInWithEmailAndPassword(auth, email, password);
    console.log(createUser);
    return createUser;
  } catch (error) {
    alert(error);
  }
};

const handleLogout = async () => {
  const logout = await signOut(auth);
  return logout;
};

export default firebase;
export {
  signUp,
  signIn,
  useAuth,
  handleLogout,
  getDataFromFireStore,
  sendDataToFireStore,
  deleteDataFromFireStore,
};
export { auth };
