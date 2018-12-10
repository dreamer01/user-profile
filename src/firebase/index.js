import firebase from "firebase";

const initFirebaseApp = function() {
  const options = {
		apiKey: "AIzaSyCaimB_OuxFrvujbUHyBpp3sF0YU0cL2Ls",
    authDomain: "rideaparty.firebaseapp.com",
    databaseURL: "https://rideaparty.firebaseio.com",
    projectId: "rideaparty",
    storageBucket: "rideaparty.appspot.com",
    messagingSenderId: "663220767702"
    // apiKey: process.env.FIREBASE_API_KEY,
    // authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    // databaseURL: process.env.FIREBASE_DATABASE_URL,
    // projectId: process.env.FIREBASE_PROJECT_ID,
    // storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    // messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
  };

  return firebase.initializeApp(options);
};
export default initFirebaseApp;
