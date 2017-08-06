// UNABLE TO CONNECT TO FIREBASE
//GET file:///action_page.php? net::ERR_FILE_NOT_FOUND



// Initialize Firebase
  var config = {
    apiKey: "AIzaSyDWHSJMWwzRuxK9KkTp6tuKvtdHGIwY_Jg",
    authDomain: "trainschedule-14734.firebaseapp.com",
    databaseURL: "https://trainschedule-14734.firebaseio.com",
    projectId: "trainschedule-14734",
    storageBucket: "trainschedule-14734.appspot.com",
    messagingSenderId: "867357288668"
  };

firebase.initializeApp(config);

var trainData = firebase.database();

$("addTrainBtn").on("click",function(){
  var trainName = $("#trainNameInput").val().trim();
  var destination = $("#destinationInput").val().trim();
  var firstTrain = moment($("#firstTrainInput").val().trim(),"HH:mm").subtract(10,"years").format("X");
  var frequency = $("#freqeuncyInput").val().trim();

  var newTrain = {
    name: trainName,
    destination: destination,
    firstTrain: firstTrain,
    frequency: frequency
  }

  trainData.ref().push(newTrain);

  alert("Train Added");

  $("#trainNameInput").val("");
  $("#destinationInput").val("");
  $("#firstTrainInput").val("");
  $("#frequencyInput").val("");
  
  return false;
})

trainData.ref().on("child_added",function(snapshot){
  var name = snapshot.val().name;
  var destination = snapshot.val().destination;
  var frequency = snapshot.val().frequency;
  var firstTrain = snapshot.val().firstTrain;

  var remainder = moment().diff(moment.unix(firstTrain),"minutes")%frequency;
  var minutes = frequency - remainder;
  var arrival = moment().add(minutes,"m").format("hh:mm A");

  //console.log(remainder);
  //console.log(minutes);
  //console.log(arrival);

  $("#trainTable > tBody").append("<tr><td>"+name+"</td><td>"+destination+"</td><td>"+arrival+"</td><td>"+minutes+"</td></tr>");
})

