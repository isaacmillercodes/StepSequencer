$(document).on('ready', function() {
  console.log('sanity check!');

  // Create Grid

  for (var i = 1; i < 17; i++) {
    for (var j = 1; j < 17; j++) {
      $('.squareGrid').append('<div class="singleSquare col-' + i + ' row-' + j + '"></div>');
    }
  }

});
