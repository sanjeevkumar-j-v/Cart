import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as firebase from 'firebase'
import 'firebase/firestore';



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDLeowqdzGAH_ND2jsU4V2ib7VbSBX4kDQ",
  authDomain: "cart-47794.firebaseapp.com",
  databaseURL: "https://cart-47794.firebaseio.com",
  projectId: "cart-47794",
  storageBucket: "cart-47794.appspot.com",
  messagingSenderId: "85256742722",
  appId: "1:85256742722:web:2237b07ab52eba79cf0adb"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

