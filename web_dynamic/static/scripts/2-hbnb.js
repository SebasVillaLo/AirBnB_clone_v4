$(function () {
  checkBox();
  getStatus();
});

var mylist = {};
function checkBox() {
  $('input[type="checkbox"]').on('change', function () {
    if ($(this).is(':checked')) {
      mylist[$(this).attr('data-id')] = $(this).attr('data-name');
    } else {
      delete mylist[$(this).attr('data-id')]
    }
    function cortarTextoConPuntos(texto, limite) {
      var puntosSuspensivos = "...";
      if (texto.length > limite) {
        texto = texto.substring(0, limite) + puntosSuspensivos;
      }

      return texto;
    }

    $('.amenities h4').text(cortarTextoConPuntos(Object.values(mylist).join(', '), 42));
  });
}
function getStatus() {
  $.getJSON(`http://${window.location.hostname}:5001/api/v1/status/`, function (data) {
    if (data.status === "OK") {
      $("#api_status").addClass("available");
    } else {
      $("#api_status").removeClass("available");
    }
  })
}
