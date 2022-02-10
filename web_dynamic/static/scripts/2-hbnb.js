$(function() {
  var mylist = [];
  $('input[type="checkbox"]').on( 'change', function() {
    if( $(this).is(':checked') ) {
      mylist.push($(this).attr('data-name'));
    } else {
      const index = mylist.indexOf($(this).attr('data-name'));
      mylist.splice(index, 1);
    }
    $('.amenities h4').text(mylist.join(', '));
  });
});

// const request = require('request');
//const web = "http://0.0.0.0:5001/api/v1/status/";

//request
//  .get(web)
//  .on('response', function (response) {
//    const status = response.statusCode; // 200
//    if (status === 200) {
//      $("div#api_status").addClass("available");
//    } else {
//      $("div#api_status").removeClass("available");
//   }
//  });
