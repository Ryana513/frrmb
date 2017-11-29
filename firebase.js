import * as firebase from 'firebase';
const config = {
      var config = {
        apiKey: "AIzaSyDAtADdVg_WRzBee_ZYjdMMx2BX3ctVHHQ",
        authDomain: "frrmb-2a6dd.firebaseapp.com",
        databaseURL: "https://frrmb-2a6dd.firebaseio.com",
        projectId: "frrmb-2a6dd",
        storageBucket: "frrmb-2a6dd.appspot.com",
        messagingSenderId: "580595966651"
      };
      firebase.initializeApp(config);
      
      export const database = firebase.database().ref('posts/');
