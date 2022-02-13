$(function () {
  checkBox();
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
