import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";
import app from "../firebase/Firebase.config.js";

const auth = getAuth(app);
export const AuthContext = createContext();
const Context = ({ children }) => {
  const [user, setUser] = useState({ displayName: "Tamanna" });

  const createUserWithEmailAndPass = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const loginWithEmailPass=(email, password)=>{
    return signInWithEmailAndPassword(auth, email,password);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);
  const authInfo = { user, createUserWithEmailAndPass, loginWithEmailPass };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default Context;
