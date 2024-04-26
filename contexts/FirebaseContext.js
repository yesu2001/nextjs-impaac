"use client";
import PropTypes from "prop-types";
import { createContext, useEffect, useReducer, useState } from "react";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signOut,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
  RecaptchaVerifier,
  signInWithPhoneNumber,
  sendPasswordResetEmail,
  confirmPasswordReset,
} from "firebase/auth";
//
import { FIREBASE_API } from "@/config";
import { getAuserHelper, updateUser } from "@/helper/user";
import { signup } from "@/helper/auth";
import { createNgoHelper, getNgoHelper, updateNgoHelper } from "@/helper/ngo";

// ----------------------------------------------------------------------

const ADMIN_EMAILS = [""];

const firebaseApp = initializeApp(FIREBASE_API);
const AUTH = getAuth(firebaseApp);

const initialState = {
  isAuthenticated: false,
  isInitialized: false,
  user: null,
};

const reducer = (state, action) => {
  if (action.type === "INITIALISE") {
    const { isAuthenticated, user } = action.payload;
    return {
      ...state,
      isAuthenticated,
      isInitialized: true,
      user,
    };
  }

  return state;
};

const AuthContext = createContext({
  ...initialState,
  method: "firebase",
  refreshUser: () => Promise.resolve(),
  login: () => Promise.resolve(),
  register: () => Promise.resolve(),
  updatePassword: () => Promise.resolve(),
  updateUserProfile: () => Promise.resolve(),
  logout: () => Promise.resolve(),
  registerNgo: () => Promise.resolve(),
  updateNgoProfile: () => Promise.resolve(),
  refreshOgo: () => Promise.resolve(),
});

// ----------------------------------------------------------------------

AuthProvider.propTypes = {
  children: PropTypes.node,
};

function AuthProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [profile, setProfile] = useState(null);

  const [ngoProfile, setNgoProfile] = useState(null);

  useEffect(
    () =>
      onAuthStateChanged(AUTH, async (user) => {
        if (user) {
          const { accessToken, displayName, email, phoneNumber, uid } = user;
          const response = await getAuserHelper(user.uid, user.accessToken);
          if (response.error && displayName && email) {
            await signup(accessToken, {
              name: displayName,
              email,
              phonenumber: phoneNumber,
            }).then((data) => {
              if (data.error) {
                console.log(data.error);
              }
              setProfile(data);
            });
          }
          setProfile(response);

          if (response.base_ngo) {
            const res = await getNgoHelper(
              response._id,
              user.accessToken,
              response.base_ngo
            );
            setNgoProfile(res);
          }

          dispatch({
            type: "INITIALISE",
            payload: { isAuthenticated: true, user },
          });
        } else {
          dispatch({
            type: "INITIALISE",
            payload: { isAuthenticated: false, user: null },
          });
        }
      }),
    [dispatch]
  );

  const refreshUser = async (uid, token) => {
    const response = await getAuserHelper(uid, token);
    setProfile(response);
  };
  const login = (email, password) =>
    signInWithEmailAndPassword(AUTH, email, password);

  const register = (email, password, firstName, lastName) =>
    createUserWithEmailAndPassword(AUTH, email, password).then(async (res) => {
      await signup(res.user.accessToken, { name: firstName, email });
    });

  const updatePassword = (oobCode, newPassword) =>
    confirmPasswordReset(AUTH, oobCode, newPassword);

  const resetPassword = (email) => {
    sendPasswordResetEmail(AUTH, email);
  };

  const updateUserProfile = (userId, data) => {
    const { displayName, photoURL } = data;
    updateProfile(AUTH.currentUser, { displayName, photoURL });
  };

  const logout = () => {
    signOut(AUTH);
    setProfile(null);
    setNgoProfile(null);
  };

  const refreshNgo = async (userId, token, ngoId) => {
    const response = await getNgoHelper(userId, token, ngoId);
    setNgoProfile(response);
  };

  const registerNgo = async (userId, token, data, uid) => {
    const ngoData = await createNgoHelper(userId, token, {
      name: data.name,
      registered_name: data.registered_name,
      bio: data.bio,
    });
    setNgoProfile(ngoData);
    await refreshUser(uid, token);
  };

  const updateNgoProfile = async (userId, token, ngoId, data) => {
    const ngoData = await updateNgoHelper(userId, token, ngoId, data);
    setNgoProfile(ngoData);
    return ngoData;
  };

  const generateRecaptcha = (captachId) => {
    window.recaptchaVerifier = new RecaptchaVerifier(
      captachId,
      {
        size: "invisible",
      },
      AUTH
    );
  };
  const registerWithPhoneNumber = async (data) => {
    const appVerifier = window.recaptchaVerifier;
    const { country, phoneNumber } = data;
    const number = `\n+${country}${phoneNumber}`;

    const result = await signInWithPhoneNumber(AUTH, number, appVerifier);
    if (result.error) {
      return result.error;
    }
  };

  const verifyOtp = async (otp, data) => {
    const { confirmationResult } = window;
    confirmationResult
      .confirm(otp)
      .then((result) => {
        // User signed in successfully.
        console.log("result", result);
        // ...
      })
      .catch((error) => {
        // User couldn't sign in (bad verification code?)
        // ...
      });
  };

  return (
    <AuthContext.Provider
      value={{
        ...state,
        method: "firebase",
        user: {
          uid: state?.user?.uid,
          ngoId: profile?.base_ngo,
          id: profile?._id,
          email: state?.user?.email,
          photoURL: state?.user?.photoURL || profile?.photoURL,
          displayName: state?.user?.displayName || profile?.name,
          role: ADMIN_EMAILS.includes(state?.user?.email) ? "admin" : "user",
          phoneNumber: state?.user?.phoneNumber || profile?.phonenumber || "",
          country: profile?.address?.country || "",
          address: profile?.address?.street || "",
          state: profile?.address?.state || "",
          city: profile?.address?.city || "",
          areaCode: profile?.address?.area_code || "",
          about: profile?.about || "",
          isPublic: profile?.isPublic || false,
          token: state?.user?.accessToken,
          facebook: profile?.social_links?.facebook,
          twitter: profile?.social_links?.twitter,
          linkedin: profile?.social_links?.linkedin,
          instagram: profile?.social_links?.instagram,
          following: profile?.following,
          followers: profile?.followers,
          kycStatus: profile?.kyc_status,
          userType: profile?.user_role,
        },
        ngo: {
          id: ngoProfile?._id || profile?._id || "",
          name: ngoProfile?.name || "",
          registered_name: ngoProfile?.registered_name || "",
          bio: ngoProfile?.bio || "",
          panCard: ngoProfile?.pan_card || "",
          street: ngoProfile?.address?.street || "",
          state: ngoProfile?.address?.state || "",
          city: ngoProfile?.address?.city || "",
          area_code: ngoProfile?.address?.area_code || "",
          country: ngoProfile?.address?.country || "",
          about: ngoProfile?.about || "",
        },
        ngoProfile: ngoProfile?.data,
        userProfile: profile,
        refreshUser,
        login,
        register,
        resetPassword,
        updatePassword,
        updateUserProfile,
        logout,
        registerNgo,
        refreshNgo,
        updateNgoProfile,
        generateRecaptcha,
        registerWithPhoneNumber,
        verifyOtp,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider };
