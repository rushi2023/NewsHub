import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

import { auth,  firebaseDB } from "../firebase";
import { onValue, ref, set } from "firebase/database";

const userAuthContext = createContext();

export function UserAuthContextProvider({ children }) {
  const [user, setUser] = useState({});




  function logIn(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }
  
  function logOut() {
    return signOut(auth);
  }

function fetch(){
   const dbref = ref(firebaseDB, "newsHub/");
  
    onValue(dbref, (data) => {
 return  data.val();
    }
    );
  
}



  function googleSignIn() {
    const googleAuthProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleAuthProvider);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
      // console.log("Auth", currentuser);
      setUser(currentuser);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  function signUp(email,password) {
  return createUserWithEmailAndPassword(auth, email, password);
     
   }




function creatUserDB( email, password, address, name,username){
  set(ref(firebaseDB, "newsHub/" +username), {
    Email: email,
    name: name,
    address: address,
    password: password,
    username:username
  });
}
  return (
    <userAuthContext.Provider
      value={{ user, logIn, signUp, logOut, googleSignIn,creatUserDB,fetch}}
    >
      {children}
    </userAuthContext.Provider>
  );
}

export function useUserAuth() {
  return useContext(userAuthContext);
}









