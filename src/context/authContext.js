import React, { useContext, createContext, useState, useEffect } from "react";
import { auth } from "../components/firebaseConfig/firebase";
import "firebase/compat/app";
import axios from "axios";
import toast from "react-hot-toast";

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export function AuthProvider({ children }) {
  const [user, setUser] = useState();
  const [isloggedin, setStatus] = useState(false);

  const signUp = (email, password) => {
    return auth.createUserWithEmailAndPassword(email, password);
  };

  const login = async (email, password) => {
    try {
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
        console.log(user.uid);
        setUser(user.uid);
      } else {
        setUser("");
      }
    });

    return unsubscribe;
  }, []);

  const value = {
    user,
    signUp,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
