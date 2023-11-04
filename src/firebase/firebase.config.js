import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_APIKEY,
  authDomain: import.meta.env.VITE_AUTHDOMAIN,
  projectId: import.meta.env.VITE_PROJECTID,
  storageBucket: import.meta.env.VITE_STORAGEBUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
  appId: import.meta.env.VITE_APPID,

  // apiKey: "AIzaSyCY7UYSIObgDFIQQ_857IF4YdLBCro3__A",
  // authDomain: "job-house-94161.firebaseapp.com",
  // projectId: "job-house-94161",
  // storageBucket: "job-house-94161.appspot.com",
  // messagingSenderId: "942911964838",
  // appId: "1:942911964838:web:57041e355bd19f86909667",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
