function text(userInput) {
    // regular expressions regex to search for numbers and letters in a string ranging from 5 to 7
    var letterNumber = /^[0-9a-zA-z]{5,7}$/;
    // regex to search for only numbers in a string
    var isNum = /^\d+$/;
    if (!(isNum.test(userInput.value)) && userInput.value.match(letterNumber)) {
        $("#invalid-alert").html(" ");
        $("#vac-results").html("Congratulations!");
    }
    else {
        $("#vac-results").html(" ");
        $("#invalid-alert").html("<div class='alert alert-danger' role='alert'>Please insert a valid Postcode.</div>");
    }
}

$( document ).ready(function() {

// Activate smooth scroll to a specific div when button is clicked
  $(".smooth").click(function() {
    $('html, body').animate({
      scrollTop: $("#introduction").offset().top
    }, 2000);
  });
  
  $("#nav_sym").click(function() {
    $('html, body').animate({
      scrollTop: $("#symptoms").offset().top
    }, 2250);
  });
  
  $("#nav_prev").click(function() {
    $('html, body').animate({
      scrollTop: $("#prevention").offset().top
    }, 3000);
  });
  
  $("#nav_treat").click(function() {
    $('html, body').animate({
      scrollTop: $("#treatment").offset().top
    }, 3000);
  });
  
  $("#nav_vac").click(function() {
    $('html, body').animate({
      scrollTop: $("#free-vaccination").offset().top
    }, 3500);
  });
  
  $("#scroll-up").click(function() {
    $('html, body').animate({
      scrollTop: $("#beginning").offset().top
    }, 3000);
    
 });
   text;
});
     
