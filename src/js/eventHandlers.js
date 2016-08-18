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

var clickCount = 0;

$(document).on('click', '.playButton', function(event) {
  event.preventDefault();
  clickCount++;
  if (clickCount > 1) {
    stopSweeper();
    clickCount = 0;
    beat = 1;
    $('.singleSquare').removeClass('sweeper');

  } else {
    startSweeper();
    sweeperSounds();
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

// function sweeperSounds() {
//   if ($('.sweeper').hasClass('active')) {
//     if ($(this).hasClass('row-1')) {
//       playSound(G5);
//     } else if ($(this).hasClass('row-2')) {
//       playSound(E5);
//     } else if ($(this).hasClass('row-3')) {
//       playSound(D5);
//     } else if ($(this).hasClass('row-4')) {
//       playSound(C5);
//     } else if ($(this).hasClass('row-5')) {
//       playSound(A5);
//     } else if ($(this).hasClass('row-6')) {
//       playSound(B4);
//     } else if ($(this).hasClass('row-7')) {
//       playSound(A4);
//     } else if ($(this).hasClass('row-8')) {
//       playSound(G4);
//     } else if ($(this).hasClass('row-9')) {
//       playSound(F4);
//     } else if ($(this).hasClass('row-10')) {
//       playSound(E4);
//     } else if ($(this).hasClass('row-11')) {
//       playSound(D4);
//     } else if ($(this).hasClass('row-12')) {
//       playSound(C4);
//     } else if ($(this).hasClass('row-13')) {
//       playSound(hihat);
//     } else if ($(this).hasClass('row-14')) {
//       playSound(clap);
//     } else if ($(this).hasClass('row-15')) {
//       playSound(snare);
//     } else if ($(this).hasClass('row-16')) {
//       playSound(kick);
//     }
//   }
//
// }
