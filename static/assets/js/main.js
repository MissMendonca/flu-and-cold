function invalidation(){
  $("#vac-results").html(" ");
  $("#invalid-alert").html("<div class='alert alert-danger' role='alert'>Please insert a valid Postcode.</div>");
}

function text(userInput) {
  // regular expressions regex to search for numbers and letters in a string ranging from 5 to 7
  var letterNumber = /^[0-9a-zA-z]{5,7}$/;
  // regex to search for only numbers in a string
  var isNum = /^\d+$/;
  if (!(isNum.test(userInput.value)) && userInput.value.match(letterNumber)) {
    $("#invalid-alert").html(" ");
    postcodeLatLong(userInput.value);
  }
  else {
    invalidation();
  }
}

function postcodeLatLong(location) {
  fetch('https://api.postcodes.io/postcodes/' + location)
    .then(
      function(response) {
        if (response.status !== 200) {
          invalidation();
        }
        // Examine the text in the response
        response.json().then(function(data) {
            var latitude = data.result.latitude;
            var longitude = data.result.longitude;
            var locationData = [latitude, longitude];
            nhsPharmacies(locationData);
          })
          .catch(function(err) {
            console.log('Error:', err);
          });
      }
    );
}

function nhsPharmacies(pharLocation){
  
  let data = {
    "searchFields": "ServiceCodesProvided",
    "search": "SRV0277",
    "searchMode": "all",
    "orderby": "geo.distance(Geocode, geography'POINT("+ pharLocation[0]+ " "+ pharLocation[1] +")') ",
    "select": "OrganisationName,Address1,Address2,Address3,City,County,Postcode,Contacts",
    "top": 25,
    "skip": 0,
    "count": true
  };
   
  
 fetch('https://api.nhs.uk/service-search/search?api-version=1', {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
      "subscription-key": "f579dfb01a494dedb657474c8f13735d"
    },
    body: JSON.stringify(data),
  })
  .then((response) => response.json())
  .then((data) => {
    console.log('Success:', data);
  });
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
});
     
