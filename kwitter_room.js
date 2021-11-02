
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyAyf_mbzZhSbkh66V4A_R84SDgxP1lOHvo",
      authDomain: "kwitter-70b2d.firebaseapp.com",
      databaseURL: "https://kwitter-70b2d-default-rtdb.firebaseio.com",
      projectId: "kwitter-70b2d",
      storageBucket: "kwitter-70b2d.appspot.com",
      messagingSenderId: "334516477341",
      appId: "1:334516477341:web:e63011a6eda13d417ea374"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    user_name =  localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
      purpose : "adding room name"
      });
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
}

function redirecttoroom(name)
{
console.log(name);
localStorage.setItem("room_name", name);
window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name -" + Room_names);
      row ="<div class='room_name' id="+ Room_names +" onclick='redirecttoroom(this.id)'>#" + Room_names + "</div><hr>" 
      document.getElementById("output").innerHTML += row; 
      //End code
      });});}
getData();
function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}