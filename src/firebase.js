import { initializeApp } from "firebase/app";

import {
    GoogleAuthProvider,
    getAuth,
    signInWithPopup,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    sendPasswordResetEmail,
    signOut,
    updateProfile,
} from "firebase/auth";

import {
    getFirestore,
    query,
    getDocs,
    collection,
    where,
    addDoc
} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAPJpQMWutHyqf0OUdnikxUVxegTHPC74o",
    authDomain: "swapee-webapp-dev.firebaseapp.com",
    projectId: "swapee-webapp-dev",
    storageBucket: "swapee-webapp-dev.appspot.com",
    messagingSenderId: "156541551430",
    appId: "1:156541551430:web:332170850a60dd2a39db47",
    measurementId: "G-6029N0VXJE"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const googleProvider = new GoogleAuthProvider();

const signInWithGoogle = async () => {
    try {
        const res = await signInWithPopup(auth, googleProvider);
        const user = res.user;
        const q = query(collection(db, "users"), where("uid", "==", user.uid));
        const docs = await getDocs(q);

        if (docs.docs.length === 0) {
        await addDoc(collection(db, "users"), {
            uid: user.uid,
            name: user.displayName,
            authProvider: "google",
            email: user.email,
        });
        }
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
};

const logInWithEmailAndPassword = async (email, password) => {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        if (user) {
            return {
                success: true,
                uid: user.uid,
                email: user.email,
                displayName: user.displayName,
                accessToken: user.accessToken
            };
        } else {
            return {
                success: false,
                message: "User not found"
            };
        }
    } catch (err) {
        if (err.code === "auth/wrong-password") {
            return {
                success: false,
                message: "Incorrect password"
            };
        } else if (err.code === "auth/user-not-found") {
            return {
                success: false,
                message: "User not found for given email address"
            };
        } else {
            return {
                success: false,
                message: err.message
            };
        }
    }
};

const registerWithEmailAndPassword = async (name, email, password) => {
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password);
        const user = res.user;
        await updateProfile(auth.currentUser, { displayName: name })
        console.log(user)
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
};

const sendPasswordReset = async (email) => {
    try {
        await sendPasswordResetEmail(auth, email);
        alert("Password reset link sent!");
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
};

const logout = () => {
    signOut(auth);
};

const isUserLogedin = () => {
    return auth.currentUser != null;
};

export {
    auth,
    db,
    signInWithGoogle,
    logInWithEmailAndPassword,
    registerWithEmailAndPassword,
    sendPasswordReset,
    logout,
    isUserLogedin
};