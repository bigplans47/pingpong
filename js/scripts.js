// backend logic
var sampleArray = [];
var allNumbers = "";
var sampleAnswer = "";

var userInputMod = "";
var userInputModCount = "";
var ping = "ping";
var pong = "pong";
var pingpong = ping.concat(pong);
var sampleAnswerNumber = parseInt(sampleAnswer);

var counter = function (userInput) {
  userInputModCount = userInput;
  // sampleArray = int numbers[5];
  for (i =0; i <userInputModCount; i+=1) {
    sampleArray[i] = i;
    alert(sampleArray);
    // userInputModCount = sampleArray[i]

    console.log();
  }
  sampleArray=[];
  // for (i= 0; i < userInputModCount; i +=) {
  //   userInputModCount = userInputModCount.append(" "+userInputModCount);
  //   <br>;
  }


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
    userInputMod = ping;
    // userInputMod = userInput + ping;
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
    counter(userInput);
    $(".result").append("<li>" +userInputMod+ "</li>");
    $(".loop").append(userInputModCount+"<br>");

  });
});
