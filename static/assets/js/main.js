$( document ).ready(function() {

/---Activate smooth scroll to a specific div when button is clicked--/ 
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

/---Initializing AOS---/ 
  AOS.init();
 
}); 

