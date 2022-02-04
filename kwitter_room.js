var firebaseConfig = {
      apiKey: "AIzaSyAiTAVkRD9_ASaG7Kx-WOnPwlVzkss3lPg",
      authDomain: "kwitter-5b98c.firebaseapp.com",
      databaseURL: "https://kwitter-5b98c-default-rtdb.firebaseio.com",
      projectId: "kwitter-5b98c",
      storageBucket: "kwitter-5b98c.appspot.com",
      messagingSenderId: "680612164274",
      appId: "1:680612164274:web:14ace812a64dcf0e608fab"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML=" Welcome "+user_name+"!";

function add_room(){
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"adding room name"
      });
      localStorage.setItem("room_name",room_name);
      window.location="kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("Room_names"+Room_names);
row="<div class='room_name' id="+Room_names+" onclick='redirect_to_room_name(this.id)'>#"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();
function redirect_to_room_name(name){
console.log(name);
localStorage.setItem("room_name",name);
window.location="kwitter_page.html";
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}
