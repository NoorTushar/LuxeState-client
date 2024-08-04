import { createContext, useEffect, useState } from "react";
import {
   GoogleAuthProvider,
   createUserWithEmailAndPassword,
   onAuthStateChanged,
   signInWithEmailAndPassword,
   signInWithPopup,
   signOut,
   updateProfile,
   sendEmailVerification,
} from "firebase/auth";
import { auth } from "../Firebase/firebase.config";

import PropTypes from "prop-types";

export const AuthContext = createContext(null);

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
   // current user:
   const [user, setUser] = useState(null);

   // loader for loading till we get the user
   const [loading, setLoading] = useState(true);

   // create firebase user
   const createUser = (email, password) => {
      setLoading(true);
      return createUserWithEmailAndPassword(auth, email, password);
   };

   // login using firebase email and password
   const loginUser = (email, password) => {
      setLoading(true);
      return signInWithEmailAndPassword(auth, email, password);
   };

   // updating user with username and password
   const updateUser = (userName, userPhoto) => {
      setLoading(true);
      return updateProfile(auth.currentUser, {
         displayName: userName,
         photoURL: userPhoto,
      });
   };

   // login with Google using firebase
   const loginWithGoogle = () => {
      setLoading(true);
      return signInWithPopup(auth, googleProvider);
   };

   // logout
   const logoutUser = () => {
      return signOut(auth);
   };

   // const saveUser = useCallback(
   //    async (user) => {
   //       const currentUser = {
   //          email: user?.email,
   //          role: "guest",
   //          status: "Verified",
   //       };
   //       const { data } = await axiosPublic.put(`/people`, currentUser);
   //       return data;
   //    },
   //    [axiosPublic]
   // );

   // observe user
   useEffect(() => {
      const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
         console.log("Current value of the current user", currentUser);
         setUser(currentUser);
         setLoading(false);
      });
      return () => {
         unSubscribe();
      };
   }, []);

   const authInfo = {
      user,
      loading,
      createUser,
      loginUser,
      loginWithGoogle,
      updateUser,
      setLoading,
      logoutUser,
      sendEmailVerification,
   };
   return (
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
   );
};

AuthProvider.propTypes = {
   children: PropTypes.node,
};

export default AuthProvider;
