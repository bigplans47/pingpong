// backend logic




// frontend user interface
$(document).ready(function(){
  $(".form-whole").submit(function(event) {
    event.preventDefault();
    var userInput = $(".userNumber").val();
    alert(userInput);
    $(".result").text(userInput);

  });
});
