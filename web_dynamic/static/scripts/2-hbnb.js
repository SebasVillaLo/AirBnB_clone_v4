$(function () {
  var mylist = [];
  $('input[type="checkbox"]').on('change', function () {
    if ($(this).is(':checked')) {
      mylist.push($(this).attr('data-name'));
    } else {
      const index = mylist.indexOf($(this).attr('data-name'));
      mylist.splice(index, 1);
    }
    $('.amenities h4').text(mylist.join(', '));
  });
});

const web = 'http://0.0.0.0:5001/api/v1/status/';
$(function () {
  $.get(web, function (data, statusText, xhr) {
    if (xhr.status === 200) {
      alert("malo")
      $("div#api_status").addClass("available");
      return;
    } else {
      $("div#api_status").removeClass("available");
    }
  })
});
