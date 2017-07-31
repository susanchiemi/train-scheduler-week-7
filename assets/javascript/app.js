// Initialize Firebase
  var config = {
    apiKey: "AIzaSyDWHSJMWwzRuxK9KkTp6tuKvtdHGIwY_Jg",
    authDomain: "trainschedule-14734.firebaseapp.com",
    databaseURL: "https://trainschedule-14734.firebaseio.com",
    projectId: "trainschedule-14734",
    storageBucket: "",
    messagingSenderId: "867357288668"
  };

firebase.initializeApp(config);

var trainData = firebase.database();

$("addTrainBtn").on("click",function(){
  var trainName = $("#trainNameInput").val().trim();
  var destination = $("#destinationInput").val().trim();
  var firstTrain = $("#firstTrainInput").val().trim();
  var frequency = $("#freqeuncy").val().trim();    
})
