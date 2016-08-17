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

// function sweeperCycle() {
//   var clickCounter = 1;
//   var beat = 1;
//
//   setInterval(function() {
//     if (beat === 17) {
//       beat = 1;
//       $('.col-16').removeClass('sweeper');
//     }
//     $('.col-' + beat).addClass('sweeper');
//     $('.col-' + (beat - 1)).removeClass('sweeper');
//     beat++;
//
//   }, 250);
// }

var clickCount = 0;

$(document).on('click', '.playButton', function(event) {
  event.preventDefault();
  clickCount++;
  if (clickCount > 1) {
    stopSweeper();
    clickCount = 0;
    beat = 1;
    //$('.singleSquare').removeClass('sweeper');

  } else {
    startSweeper();
  }

});

// var clickCounter = 1;
var beat = 1;

function sweeperCycle() {
  if (beat === 17) {
    beat = 1;
    $('.col-16').removeClass('sweeper');
  }
  $('.col-' + beat).addClass('sweeper');
  $('.col-' + (beat - 1)).removeClass('sweeper');
  beat++;

}



var newSweeper;

function startSweeper() {

 newSweeper = setInterval(sweeperCycle, 375);

}

function stopSweeper() {
  clearInterval(newSweeper);
}
