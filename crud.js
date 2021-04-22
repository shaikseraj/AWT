
var firebaseConfig = {
  apiKey: "AIzaSyCkDBMkOiBauwby829kN8AwHofab9uF6z0",
  authDomain: "project1-b4f77.firebaseapp.com",
  projectId: "project1-b4f77",
  storageBucket: "project1-b4f77.appspot.com",
  messagingSenderId: "472004183586",
  appId: "1:472004183586:web:1f0291c05fcbe9056eec7b",
  measurementId: "G-TNF7M0S7H9"
};
firebase.initializeApp(firebaseConfig);

  var db=firebase.database().ref().child("students");

  function insertData(){
      var rollno=document.getElementById("rollno").value;
      var name=document.getElementById("name").value;
      console.log("data inserting");
      db.child(rollno).set({
          Name:name,
          Rollno:rollno
      })
      console.log("data inserted");
  }

  function deleteData(){
      var rollno=window.prompt("Enter the rollno to be deleted");
        db.child(rollno).remove();
        console.log("Data deleted");
  }

  function updateData(){
    var rollno=document.getElementById("rollno").value;
    var name=document.getElementById("name").value;
    db.child(rollno).update({Name:name});
    console.log("data updated");
  }

  function readData(){
      db.on("value",(snap)=>{
          snap.forEach((data)=>{
              console.log(data.val().Name);
              console.log(data.val().Rollno);
          })
      })
  }