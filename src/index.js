import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import firebase from 'firebase'

firebase.initializeApp({
   
        apiKey: "AIzaSyCAZ9hNAF7Hmu4UbQ1WNBNg_frmcnngS4U",
        authDomain: "react-tweete.firebaseapp.com",
        databaseURL: "https://react-tweete.firebaseio.com",
        projectId: "react-tweete",
        storageBucket: "react-tweete.appspot.com",
        messagingSenderId: "114563570852"
    
});


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
