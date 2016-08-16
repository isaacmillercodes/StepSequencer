$(document).on('ready', function() {
  console.log('event sanity check!');
});

$(document).on('click', '.singleSquare', function() {
  $(this).addClass('active');
});

$(document).on('click', '.active', function() {
  $(this).removeClass('active');
});
