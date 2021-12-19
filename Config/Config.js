import  firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBAEHiMrI3yLjNIZX_yvFcSbEh7_KkxnZE",
    authDomain: "khana-skl-18d48.firebaseapp.com",
    projectId: "khana-skl-18d48",
    storageBucket: "khana-skl-18d48.appspot.com",
    messagingSenderId: "433751662629",
    appId: "1:433751662629:web:965a029c98d66faef9dfcc"
  };
  const Firebase = firebase.initializeApp(firebaseConfig)
  
  export default Firebase;