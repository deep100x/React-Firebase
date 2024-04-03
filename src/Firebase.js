import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDYRR2rG2IQZSgJYE_i- RvBqtKQdAf_TI",
  authDomain: "fir-course-73ae1.firebaseapp.com",
  projectId: "fir-course-73ae1",
  storageBucket: "fir-course-73ae1.appspot.com",
  messagingSenderId: 867265267076,
  appId: "1:867265267076:web:361101115f932e5df449d1",
  measurementId: "G-H8LFKXB4DH",
  databaseURL: "https://fir-course-73ae1-default-rtdb.firebaseio.com"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
