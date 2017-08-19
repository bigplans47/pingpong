// backend logic
var sampleArray = [];
var allNumbers = "";
var sampleAnswer = "";

var userInputMod = "";
var userInputModCount = "";
var answerLook ="";
var ping = "ping";
var pong = "pong";
var pingpong = ping.concat(pong);
var sampleAnswerNumber = parseInt(sampleAnswer);

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
  // if (answerLook[2] === 3) {
  //   answerlook[2] = ping;
  // }

  if (i+1 === 3) {
    sampleArray[i] = ping;
  } else if (i+1 % 5 === 0) {
    sampleArray[i] = "pong";
  }
  else if (i+1 % 15 === 0) {
    sampleArray[i] = "pingpong";
  }


    sampleArray=[];
    console.log();

  }
  // sampleArray=[];
  // for (i= 0; i < userInputModCount; i +=) {
  //   userInputModCount = userInputModCount.append(" "+userInputModCount);
  //   <br>;
  // }


// var pingPongFunction = function (userInput) {
//   if ((userInput % 15) === 0) {
//     userInputMod = pingpong;
//   }
//   else if (userInput % 3 === 0) {
//     userInputMod = ping;
//   }
//   else if (userInput % 5 === 0) {
//     userInputMod = pong;
//   }
//   else {
//     userInputMod = userInput;
//   }
//   return;
// }
// frontend user interface
$(document).ready(function(){
  $(".form-whole").submit(function(event) {
    event.preventDefault();
    var userInput = parseInt($(".userNumber").val());
    // alert(userInput);
    // pingPongFunction(userInput);
    counter(userInput);
    // $(".result").append("<li>" +userInputMod+ "</li>");
    $(".loop").prepend(answerLook+"<br>");

  });
});
