import firebase from "firebase/app";
import "firebase/auth";

var firebaseConfig = {
    apiKey: "AIzaSyAf_zRuuyMTQAnIwXCUTSEvyfwH40lkbDE",
    authDomain: "opensourcecode2020.firebaseapp.com",
    databaseURL: "https://opensourcecode2020.firebaseio.com",
    projectId: "opensourcecode2020",
    storageBucket: "opensourcecode2020.appspot.com",
    messagingSenderId: "34900038841",
    appId: "1:34900038841:web:b7cf5ff304a73b74e8f768",
    measurementId: "G-WBC35TMMJH"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export const auth = firebase.auth();

  const googleProvider = new firebase.auth.GoogleAuthProvider();
  const githubProvider = new firebase.auth.GithubAuthProvider();

  export const signInWithGoogle = () => {
    auth.signInWithPopup(googleProvider);
  };

  export const signInWithGithub = () => {
    auth.signInWithPopup(githubProvider);
  }






  /*
  <!-- The core Firebase JS SDK is always required and must be listed first -->
<script src="https://www.gstatic.com/firebasejs/7.14.3/firebase-app.js"></script>

<!-- TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#available-libraries -->
<script src="https://www.gstatic.com/firebasejs/7.14.3/firebase-analytics.js"></script>

<script>
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAf_zRuuyMTQAnIwXCUTSEvyfwH40lkbDE",
    authDomain: "opensourcecode2020.firebaseapp.com",
    databaseURL: "https://opensourcecode2020.firebaseio.com",
    projectId: "opensourcecode2020",
    storageBucket: "opensourcecode2020.appspot.com",
    messagingSenderId: "34900038841",
    appId: "1:34900038841:web:b7cf5ff304a73b74e8f768",
    measurementId: "G-WBC35TMMJH"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
</script>
*/