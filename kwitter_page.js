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
//YOUR FIREBASE LINKS
var user_name=localStorage.getItem("user_name");
var room_name=localStorage.getItem("room_name");
function send(){
    var msg=document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
        message:msg,
        user_name:user_name,
        like:0
    });
    document.getElementById("msg").value="";
}
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
message=message_data['message']
like=message_data['like']
user_name=message_data['user_name']

var name_tag="<h2>"+user_name+"<img src='tick.png' class='user_tick'></h2>";
var message="<h4 class='message_h4'>"+message+"</h4>"
var like1="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
var like2="<span class='glyphicon glyphicon-thumbs-up'>Like : "+like+"</span></button><hr>"

var row=name_tag+message+like1+like2;
document.getElementById("output").innerHTML+=row;

//End code
 } });  }); }
getData();

function updateLike(message_id){
    console.log("update"+message_id);
   var likes=document.getElementById(message_id).value;
   updated_likes=Number(likes)+1;
   firebase.database().ref(room_name).child(message_id).update({
       like:updated_likes
   });
}

function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location="index.html";
}