const firebaseConfig = { 
apiKey: "AIzaSyBTVpG70RGg43Fmjd_xx5G81JnY1p8ROEw", 
authDomain: "redsocial-e6609.firebaseapp.com", 
projectId: "redsocial-e6609", 
storageBucket: "redsocial-e6609.appspot.com", 
messagingSenderId: "226111876640", 
appId: "1:226111876640:web:0200a551118628ca90d645" }
; // Initialize Firebase const 
firebase.initializeApp(firebaseConfig);
//AÑADE TUS ENLACES DE FIREBASE
function addUser() {
user_name = document.getElementById("user_name").value;
firebase.database().ref("/").child(user_name).update({
purpose :"adding user";
})
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Inicio del código

      //Final del código
      });});}
getData();
