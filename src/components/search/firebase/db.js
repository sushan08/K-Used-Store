
import { initializeApp } from "firebase/app";
import 'firebase/auth';
import { createUserWithEmailAndPassword, updateProfile, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB_tdr2DV8LrIaHWjgebqIzG2EA3Ew-gtY",
  authDomain: "kustore-c0e8a.firebaseapp.com",
  projectId: "kustore-c0e8a",
  storageBucket: "kustore-c0e8a.appspot.com",
  messagingSenderId: "101950527856",
  appId: "1:101950527856:web:194c53fe1071ce740e97b5"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

async function register ({firstname, lastname, email, password}) {
const resp= await createUserWithEmailAndPassword(
    auth,
    email,
    password
  );

  await updateProfile(resp.user, {displayName: `${firstname} ${lastname}`});
}

async function login({email, password}){
  const resp= await signInWithEmailAndPassword(
    auth,
    email,
    password
  );
  return resp.user;
}

async function logout(){
  await signOut(auth);
}

export const firebasedb ={
    register: register,
    login: login,
    logout: logout
}