// backend logic
var sampleArray = [];
var sampleAnswer = "";
var userInputModCount = "";
var answerLook ="";
var ping = "ping";
var pong = "pong";
var pingpong = ping.concat("-"+pong);
var counter = function (userInput) {
  userInputModCount = userInput;
  for (i =0; i <userInputModCount; i+=1) {
    sampleArray = sampleArray.slice(0,userInputModCount-1);
    sampleArray[i] = i+1;
    if (sampleArray[i] % 3 ===0 && sampleArray[i] % 5 ===0) {
        sampleArray[i] = pingpong;
    } else if (sampleArray[i] % 3 ===0) {
        sampleArray[i] = ping;
    } else if (sampleArray[i] % 5 ===0) {
        sampleArray[i] = pong;
    }
  }
  answerLook = sampleArray.toString();
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
