import React, { useContext, createContext, useState, useEffect } from "react";
import { auth } from "../components/firebaseConfig/firebase";
import "firebase/compat/app";
import toast from "react-hot-toast";
import { createUser } from "../components/apiRequests/Requests.js";

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export function AuthProvider({ children }) {
  const [user, setUser] = useState();

  const signUp = async (details) => {
    await auth
      .createUserWithEmailAndPassword(details.email, details.password)
      .then((userCredentials) => {
        createUser({...details, uid: userCredentials.user.uid});
        toast.success("Account created successfully");
      })
      .catch((err) => {
        console.log(err.code);
        switch (err.code) {
          case "auth/email-already-in-use":
            toast.error("This email is already in use");
            break;
          case "auth/weak-password":
            toast.error("The password must be atlest 6 characters long.");
            break;
          default:
            console.log("Default");
        }
      });
  };

  const login = async (email, password) => {
    await auth
      .signInWithEmailAndPassword(email, password)
      .then((userCredentials) => {
        console.log(userCredentials);
        toast.success("Logged In");
      })
      .catch((err) => {
        switch (err.code) {
          case "auth/wrong-password":
            toast.error("Incorrect Password");
            break;
          default:
            console.log("Default");
        }
        console.log(err.code);
      });
  };

  const logout = async () => {
    await auth.signOut();
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
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
