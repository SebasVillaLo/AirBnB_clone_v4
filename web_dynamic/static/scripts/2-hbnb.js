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
