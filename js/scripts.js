// backend logic
var sampleArray = [1, 2, 3, 4, 5];
var allNumbers = "";
var sampleAnswer = "";

var userInputMod = "";
var ping = "ping";
var pong = "pong";
var pingpong = "pingpong";
var sampleAnswerNumber = parseInt(sampleAnswer);



var pingPongFunction = function (userInput) {

  // var userInputMod = userInput;
  //will come back to for function below to make program count, for now just doing a match with ifs
  // for (i = 0; i < 5; i++) {
  //   array[i];
  // console.log(i);
  // }
  if ((userInput % 3) === 0) {
    // userInput = userInput.toString();
    userInputMod = userInput + ping;
    console.log(userInput);
  }
  else {
    userInputMod
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
