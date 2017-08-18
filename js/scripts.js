// backend logic
var sampleArray = [1, 2, 3, 4, 5];
var allNumbers = "";
var sampleAnswer = "";

var userInputMod = "";
var ping = "ping";
var pong = "pong";
var pingpong = ping.concat(pong);
var sampleAnswerNumber = parseInt(sampleAnswer);



var pingPongFunction = function (userInput) {

  // var userInputMod = userInput;
  //will come back to for function below to make program count, for now just doing a match with ifs
  // for (i = 0; i < 5; i++) {
  //   array[i];
  // console.log(i);
  // }
  if ((userInput % 15) === 0) {
    // userInput = userInput.toString();
    userInputMod = userInput +pingpong;
    console.log(userInput);
  }
  else if (userInput % 3 === 0) {
    userInputMod = userInput + ping;
  }
  else if (userInput % 5 === 0) {
    userInputMod = userInput + pong;
  }
  else {
    userInputMod = userInput;
  }

  return;
}



// frontend user interface
$(document).ready(function(){
  $(".form-whole").submit(function(event) {
    event.preventDefault();
    var userInput = parseInt($(".userNumber").val());
    // alert(userInput);
    pingPongFunction(userInput);
    $(".result").append("<li>" +userInputMod+ "</li>");

  });
});
