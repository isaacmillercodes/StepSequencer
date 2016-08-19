$(document).on('ready', function() {
  console.log('music sanity check!');
  loadSounds();
});

$(document).on('click', '.singleSquare', function() {
  if ($(this).hasClass('row-1')) {
    playSound(G5);
  } else if ($(this).hasClass('row-2')) {
    playSound(E5);
  } else if ($(this).hasClass('row-3')) {
    playSound(D5);
  } else if ($(this).hasClass('row-4')) {
    playSound(C5);
  } else if ($(this).hasClass('row-5')) {
    playSound(A5);
  } else if ($(this).hasClass('row-6')) {
    playSound(B4);
  } else if ($(this).hasClass('row-7')) {
    playSound(A4);
  } else if ($(this).hasClass('row-8')) {
    playSound(G4);
  } else if ($(this).hasClass('row-9')) {
    playSound(F4);
  } else if ($(this).hasClass('row-10')) {
    playSound(E4);
  } else if ($(this).hasClass('row-11')) {
    playSound(D4);
  } else if ($(this).hasClass('row-12')) {
    playSound(C4);
  } else if ($(this).hasClass('row-13')) {
    playSound(hihat);
  } else if ($(this).hasClass('row-14')) {
    playSound(clap);
  } else if ($(this).hasClass('row-15')) {
    playSound(snare);
  } else if ($(this).hasClass('row-16')) {
    playSound(kick);
  }
});

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

function playSound(soundID) {
  createjs.Sound.play(soundID);
}

// if ($('.sweeper').hasClass('active')) {
//   if ($(this).hasClass('row-1')) {
//     playSound(G5);
//   } else if ($(this).hasClass('row-2')) {
//     playSound(E5);
//   } else if ($(this).hasClass('row-3')) {
//     playSound(D5);
//   } else if ($(this).hasClass('row-4')) {
//     playSound(C5);
//   } else if ($(this).hasClass('row-5')) {
//     playSound(A5);
//   } else if ($(this).hasClass('row-6')) {
//     playSound(B4);
//   } else if ($(this).hasClass('row-7')) {
//     playSound(A4);
//   } else if ($(this).hasClass('row-8')) {
//     playSound(G4);
//   } else if ($(this).hasClass('row-9')) {
//     playSound(F4);
//   } else if ($(this).hasClass('row-10')) {
//     playSound(E4);
//   } else if ($(this).hasClass('row-11')) {
//     playSound(D4);
//   } else if ($(this).hasClass('row-12')) {
//     playSound(C4);
//   } else if ($(this).hasClass('row-13')) {
//     playSound(hihat);
//   } else if ($(this).hasClass('row-14')) {
//     playSound(clap);
//   } else if ($(this).hasClass('row-15')) {
//     playSound(snare);
//   } else if ($(this).hasClass('row-16')) {
//     playSound(kick);
//   }
// }
