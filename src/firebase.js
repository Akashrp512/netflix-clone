import firebase from './firebase';

const firebaseConfig = {
    apiKey: "AIzaSyC_8yKLkKNwtreIItvFH1RYJGHa2YsdSMc",
    authDomain: "netflix-clone-f8189.firebaseapp.com",
    projectId: "netflix-clone-f8189",
    storageBucket: "netflix-clone-f8189.appspot.com",
    messagingSenderId: "689132083030",
    appId: "1:689132083030:web:9a9a83b93bb62a1689e8f7"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.fireStore();
  const auth =firebase.auth();

  export {auth};
  export default db;