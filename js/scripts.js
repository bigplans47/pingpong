// backend logic
var sampleArray = [];
var sampleAnswer = "";
var userInputModCount = "";
var answerLook ="";
var ping = "ping";
var pong = "pong";
var pingpong = ping.concat(pong);
var counter = function (userInput) {
  userInputModCount = userInput;
  for (i =0; i <userInputModCount; i+=1) {
      sampleArray[i] = i+1;
  }
  if (sampleArray[2] === 3) {
    sampleArray[2] = ping;
  }
  if (sampleArray[4] === 5) {
    sampleArray[4] = pong;
  }
  if (sampleArray[14] === 15) {
    sampleArray[14] = pingpong;
  }
  answerLook = sampleArray.toString();
    sampleArray=[];
    console.log();
  }
  //logic for user interface
$(document).ready(function(){
  $(".form-whole").submit(function(event) {
    event.preventDefault();
    var userInput = parseInt($(".userNumber").val());
    counter(userInput);
    $(".loop").prepend("<br>"+answerLook+"<br>");
  });
});
