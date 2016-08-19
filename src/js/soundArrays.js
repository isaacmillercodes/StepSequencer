$(document).on('ready', function() {
  console.log('array sanity check!');
  loadSounds();
});

$(document).on('click', '.singleSquare', function() {
  $(this).addClass('active');
  checkSound();
  //allRowSounds[5].playSound(allRowSounds[5].soundID);
});

$(document).on('click', '.active', function() {
  $(this).removeClass('active');
  $(this).playEmptySound();
});

$('.clearButton').on('click', function(event) {
  event.preventDefault();
  $('.singleSquare').removeClass('active');
});

var sweeperArray = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []];

var G5 = "G5";
var E5 = "E5";
var D5 = "D5";
var C5 = "C5";
var A5 = "A5";
var B4 = "B4";
var A4 = "A4";
var G4 = "G4";
var F4 = "F4";
var E4 = "E4";
var D4 = "D4";
var C4 = "C4";
var hihat = "hihat";
var clap = "clap";
var snare = "snare";
var kick = "kick";

function loadSounds () {
  createjs.Sound.registerSound("sounds/G5.wav", G5);
  createjs.Sound.registerSound("sounds/E5.wav", E5);
  createjs.Sound.registerSound("sounds/D5.wav", D5);
  createjs.Sound.registerSound("sounds/C5.wav", C5);
  createjs.Sound.registerSound("sounds/A5.wav", A5);
  createjs.Sound.registerSound("sounds/B4.wav", B4);
  createjs.Sound.registerSound("sounds/A4.wav", A4);
  createjs.Sound.registerSound("sounds/G4.wav", G4);
  createjs.Sound.registerSound("sounds/F4.wav", F4);
  createjs.Sound.registerSound("sounds/E4.wav", E4);
  createjs.Sound.registerSound("sounds/D4.wav", D4);
  createjs.Sound.registerSound("sounds/C4.wav", C4);
  createjs.Sound.registerSound("sounds/hihat.wav", hihat);
  createjs.Sound.registerSound("sounds/clap.wav", clap);
  createjs.Sound.registerSound("sounds/snare.wav", snare);
  createjs.Sound.registerSound("sounds/kick.wav", kick);
}

function RowSound (rowNum, soundID) {
  this.rowNum = rowNum;
  this.soundID = soundID;
}

RowSound.prototype.playSound = function(soundID) {
  createjs.Sound.play(soundID);
};

var allRowSounds = [
  new RowSound(1, G5),
  new RowSound(2, E5),
  new RowSound(3, D5),
  new RowSound(4, C5),
  new RowSound(5, A5),
  new RowSound(6, B4),
  new RowSound(7, A4),
  new RowSound(8, G4),
  new RowSound(9, F4),
  new RowSound(10, E4),
  new RowSound(11, D4),
  new RowSound(12, C4),
  new RowSound(13, hihat),
  new RowSound(14, clap),
  new RowSound(15, snare),
  new RowSound(16, kick),
];

function checkSound() {

  for (var i = 0; i < 16; i++) {

    if ($('.singleSquare').hasClass('row-' + (i + 1))) {
      allRowSounds[i].playSound(allRowSounds[i].soundID);
    }
  }

}



console.log(allRowSounds);

// var row1 = new RowSound(1, G5);
// var row2 = new RowSound(2, E5);
// var row3 = new RowSound(3, D5);
// var row4 = new RowSound(4, C5);
// var row5 = new RowSound(5, A5);
// var row6 = new RowSound(6, B4);
// var row7 = new RowSound(7, A4);
// var row8 = new RowSound(8, G4);
// var row9 = new RowSound(9, F4);
// var row10 = new RowSound(10, E4);
// var row11 = new RowSound(11, D4);
// var row12 = new RowSound(12, C4);
// var row13 = new RowSound(13, hihat);
// var row14 = new RowSound(14, clap);
// var row15 = new RowSound(15, snare);
// var row16 = new RowSound(16, kick);
