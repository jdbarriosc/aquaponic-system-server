import { FirebaseOptions, initializeApp } from "firebase/app";

function checkInitializeFirebaseConnectionEnvVariables(): void {
    if (!process.env.FIREBASE_API_KEY) {
        throw new Error('FIREBASE_API_KEY must be set in env variables for connection to be initialized.');
      }
  
    if (!process.env.FIREBASE_API_KEY) {
        throw new Error('FIREBASE_API_KEY must be set in env variables for connection to be initialized.');
      }
  
    if (!process.env.FIREBASE_AUTH_DOMAIN) {
        throw new Error('FIREBASE_AUTH_DOMAIN must be set in env variables for connection to be initialized.');
      }
  
    if (!process.env.FIREBASE_PROJECT_ID) {
        throw new Error('FIREBASE_PROJECT_ID must be set in env variables for connection to be initialized.');
      }
  
    if (!process.env.FIREBASE_STORAGE_BUCKET) {
        throw new Error('FIREBASE_STORAGE_BUCKET must be set in env variables for connection to be initialized.');
      }
  
    if (!process.env.FIREBASE_MESSAGING_SENDER_ID) {
        throw new Error('FIREBASE_MESSAGING_SENDER_ID must be set in env variables for connection to be initialized.');
      }
  
    if (!process.env.FIREBASE_APP_ID) {
        throw new Error('FIREBASE_APP_ID must be set in env variables for connection to be initialized.');
      }
}

function initializeFirebaseConnection(): void {
  checkInitializeFirebaseConnectionEnvVariables();

  const firebaseOptions: FirebaseOptions = {
      apiKey: process.env.FIREBASE_API_KEY,
      authDomain: process.env.FIREBASE_AUTH_DOMAIN,
      projectId: process.env.FIREBASE_PROJECT_ID,
      storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
      messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
      appId: process.env.FIREBASE_APP_ID,
  };

  initializeApp(firebaseOptions);      
}

export {
  initializeFirebaseConnection,
};

// import { collection, getDocs, getFirestore } from "firebase/firestore";

// const db = getFirestore();

// const querySnapshot = await getDocs(collection(db, "sensors"));

// querySnapshot.forEach((doc) => {
//     console.log(JSON.stringify(doc.data(), null, 2));
// });
