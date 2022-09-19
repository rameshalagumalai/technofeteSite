import React, { useContext, createContext, useState, useEffect } from "react";
import { auth } from "../components/firebaseConfig/firebase";
import "firebase/compat/app";
import toast from "react-hot-toast";
import { sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export function AuthProvider({ children }) {
  const [user, setUser] = useState();
  const [token, setToken] = useState();
  const [currentUser, setCurrentUser] = useState();
  const [createdUser, setCreatedUser] = useState();

  const login = async (email, password) => {
    await signInWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        console.log(userCredentials);
        toast.success("Logged In");
      })
      .catch((err) => {
        switch (err.code) {
          case "auth/wrong-password":
            toast.error("Incorrect Password");
            break;
          case "auth/user-not-found":
            toast.error("No user found");
            break;
          default:
            toast.error("Something Wrong");
        }
      });
  };

  const resetPassword = async (email) => {
      await sendPasswordResetEmail(auth, email)
        .then(() => {
            toast.success("Email sent successfully, check your inbox");
        })
        .catch(e => {
            toast.error(e.message);
        });
  }

  const logout = async () => {
    await auth.signOut();
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        setCurrentUser(user);
        setUser(user.uid);
        user.getIdToken(true).then(idToken => setToken(idToken))
      } else {
        setUser("");
      }
    });

    return unsubscribe;
  }, []);

  const value = {
    createdUser,
    setCreatedUser,
    currentUser,
    user,
    token,
    login,
    resetPassword,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
