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
    $.ajax({
    type: 'POST',
    url: `http://${window.location.hostname}:5001/api/v1/places_search`,
    data: '{}',
    dataType: 'json',
    contentType: 'application/json',
    success: function (data) {
      for (let i = 0; i < data.length; i++) {
        let place = data[i];
        $('.places ').append('<article><h2>' + place.name + '</h2><div class="price_by_night"><p>$' + place.price_by_night + '</p></div><div class="information"><div class="max_guest"><div class="guest_image"></div><p>' + place.max_guest + '</p></div><div class="number_rooms"><div class="bed_image"></div><p>' + place.number_rooms + '</p></div><div class="number_bathrooms"><div class="bath_image"></div><p>' + place.number_bathrooms + '</p></div></div><div class="description"><p>' + place.description + '</p></div></article>');
      }
    }
  });
});
