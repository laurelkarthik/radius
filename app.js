
( function() {


  // Initialize Firebase example
 var config = {
    apiKey: "AIzaSyAqlo3qJ-if4BeffG6_DwDJrWr0IaJrbiI",
    authDomain: "radius-cdc32.firebaseapp.com",
    databaseURL: "https://radius-cdc32.firebaseio.com",
    storageBucket: "radius-cdc32.appspot.com",
    messagingSenderId: "45589152517"
  };
  firebase.initializeApp(config);
  //const preobj =document.getElementById("email");
  //const dbrefobj =firebase.database().ref().child('heading');
  //sync object
  //dbrefobj.on('value',function(datasnapshot) {
   // snap => console.log(snap,val()));





}());


function smt()
{
  
  var email =document.getElementById("email");
    var email1= email.value;
    var pwd1 =document.getElementById("pwd");
    var pwd2= pwd.value;
  var uname =document.getElementById("name");
  var username =uname.value;
 
  var firebaseref=firebase.database().ref();
  firebaseref.push().set(email1);
  firebaseref.push().set(pwd2);
   firebaseref.push().set(username);
   
  
}
