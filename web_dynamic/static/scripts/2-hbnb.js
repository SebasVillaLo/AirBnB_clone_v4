$(function () {
  var mylist = [];
  $('input[type="checkbox"]').on('change', function () {
    if ($(this).is(':checked')) {
      mylist.push($(this).attr('data-name'));
    } else {
      const index = mylist.indexOf($(this).attr('data-name'));
      mylist.splice(index, 1);
    }
    function cortarTextoConPuntos(texto, limite) {
      var puntosSuspensivos = "...";
      if (texto.length > limite) {
        texto = texto.substring(0, limite) + puntosSuspensivos;
      }

      return texto;
    }

    $('.amenities h4').text(cortarTextoConPuntos(mylist.join(', '), 42));
    $('div .amenities h4').css("width", "300px");
    $('div .amenities h4').css("height", "16.5px");
  });
  $.getJSON(`http://${window.location.hostname}:5001/api/v1/status/`, function (data) {
    if (data.status === "OK") {
      $("#api_status").addClass("available");
    } else {
      $("#api_status").removeClass("available");
    }
  })
});
