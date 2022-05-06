import React, { useContext, createContext, useState, useEffect } from "react";
import { auth } from "../components/firebase/firebase";
import "firebase/compat/app";
import axios from "axios";

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export function AuthProvider({ children }) {
  const [user, setUser] = useState();
  const [isloggedin, setStatus] = useState(false);

  const signUp = async (email, password) => {
    try {
      console.log(email, password);
      await auth.createUserWithEmailAndPassword(email, password);
    } catch (e) {
      return e;
    }
  };

  const login = async (email, password) => {
    try {
      await auth.signInWithEmailAndPassword(email, password);
    } catch (e) {
      return e;
    }
  };

  const logout = async () => {
    await auth.signOut();
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        setUser(user);
        setStatus(true);
      } else {
        setStatus(false);
      }
    });

    return unsubscribe;
  }, []);

  const value = {
    user,
    signUp,
    login,
    isloggedin,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
