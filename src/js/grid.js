$(document).on('ready', function() {
  console.log('sanity check!');

  // Create Grid

  for (var i = 1; i < 17; i++) {
    for (var j = 1; j < 17; j++) {
      if (i < 13) {
        $('.squareGrid').append('<div class="singleSquare melody col-' + j + ' row-' + i + '"></div>');
      } else {
        $('.squareGrid').append('<div class="singleSquare drums col-' + j + ' row-' + i + '"></div>');
      }
    }
  }

  for (var x = 1; x <= 4; x++) {
    for (var y = 1; y <= 4; y++) {
      if (y === 1) {
        $('.squareGrid').append('<div class="beatMarkers beat' + y + '"><p>' + y + '</p></div>');
      } else {
        $('.squareGrid').append('<div class="beatMarkers beat' + y + '"><p>' + y + '</p></div>');
      }
    }
  }

});
