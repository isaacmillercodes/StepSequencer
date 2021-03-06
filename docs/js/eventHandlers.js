$(document).on('ready', function() {
  console.log('event sanity check!');
});

$(document).on('click', '.singleSquare', function() {
  $(this).addClass('active');
});

$(document).on('click', '.active', function() {
  $(this).removeClass('active');
  $(this).playEmptySound();
});

$('.clearButton').on('click', function(event) {
  event.preventDefault();
  $('.singleSquare').removeClass('active');
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
  }

});

var beat = 1;

function sweeperCycle() {
  if (beat === 17) {
    beat = 1;
    $('.col-16').removeClass('sweeper');
  }
  $('[class^=".col"]').removeClass('sweeper');
  $('.col-' + beat).addClass('sweeper');
  $('.col-' + (beat - 1)).removeClass('sweeper');
  beat++;

  var $active = $('.sweeper.active');

  if ($active.length) {
    $active.each(function (i, el) {
      if ($(el).hasClass('row-1')) {
        playSound(G5);
      } else if ($(el).hasClass('row-2')) {
        playSound(E5);
      } else if ($(el).hasClass('row-3')) {
        playSound(D5);
      } else if ($(el).hasClass('row-4')) {
        playSound(C5);
      } else if ($(el).hasClass('row-5')) {
        playSound(A5);
      } else if ($(el).hasClass('row-6')) {
        playSound(B4);
      } else if ($(el).hasClass('row-7')) {
        playSound(A4);
      } else if ($(el).hasClass('row-8')) {
        playSound(G4);
      } else if ($(el).hasClass('row-9')) {
        playSound(F4);
      } else if ($(el).hasClass('row-10')) {
        playSound(E4);
      } else if ($(el).hasClass('row-11')) {
        playSound(D4);
      } else if ($(el).hasClass('row-12')) {
        playSound(C4);
      } else if ($(el).hasClass('row-13')) {
        playSound(hihat);
      } else if ($(el).hasClass('row-14')) {
        playSound(clap);
      } else if ($(el).hasClass('row-15')) {
        playSound(snare);
      } else if ($(el).hasClass('row-16')) {
        playSound(kick);
      }
    });
  }

}

var newSweeper;

function startSweeper() {

  newSweeper = setInterval(sweeperCycle, 375);

}

function stopSweeper() {
  clearInterval(newSweeper);
}
