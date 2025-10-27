import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { AuthContext } from "./AuthContext";
import { auth } from "../../Firebase/Firebase.config";
import { useEffect, useState } from "react";
import Loading from "../../components/Loading";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [backLocation, setBackLocation] = useState("/");

  // * Sing Up with Email and Password
  const singUpWithEmailAndPassword = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // * Login with Email and Password
  const loginWithEmailAndPassword = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // * Login User With Google
  const googleProvider = new GoogleAuthProvider();
  const singInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  // * Sing Out
  const singOutUser = () => {
    setLoading(true);
    return signOut(auth);
  };

  // * Current User Track
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser || null);
        setLoading(false);
      });

    return () => unsubscribe();
  }, []);

  const authInfo = {
    singUpWithEmailAndPassword,
    loginWithEmailAndPassword,
    singInWithGoogle,
    user,
    setUser,
    singOutUser,
    loading,
    setLoading,
    backLocation,
    setBackLocation,
  };

  if(loading){
    return <Loading />
  }

  return <AuthContext value={authInfo}>{children}</AuthContext>;
};

export default AuthProvider;
