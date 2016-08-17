$(document).on('ready', function() {
  console.log('event sanity check!');
});

$(document).on('click', '.singleSquare', function() {
  $(this).addClass('active');
});

$(document).on('click', '.active', function() {
  $(this).removeClass('active');
});

//Start Sweeper

function startSweeper() {
  var timer = 1;

  setInterval(function() {
    if (timer === 17) {
      timer = 1;
      $('.col-16').removeClass('sweeper');
    }
    $('.col-' + timer).addClass('sweeper');
    $('.col-' + (timer - 1)).removeClass('sweeper');
    timer++;

  }, 250);
}

$(document).on('click', '.playButton', function(event) {
  event.preventDefault();
  startSweeper();
});

$(document).on('click', '.stopButton', function(event) {
  event.preventDefault();

  $('.singleSquare').removeClass('sweeper');

});
