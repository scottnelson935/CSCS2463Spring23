
let sound1 = new Tone.Player("sounds/guitar1.wav");

// let sounds = new Tone.Players({

//   "balloon": "sounds/balloon.wav",
//   "guitar1": "sounds/guitar1.wav",
//   "TShort1": "sounds/TShort1.mp3",
//   "TShort2": "sounds/TShort2.mp3",

// });

// let button1, button2, button3, button4;

function setup() {
  createCanvas(400, 400);
  // sounds.toDestination();
  sound1.toDestination();

  // button1 = createButton("Do We Love Weird Al?");
  // button1.position(75, 50);
  // button1.mousePressed(() => playSound("TShort1"));

  // button2 = createButton("Pop!");
  // button2.position(75, 100);
  // button2.mousePressed(() => playSound("balloon"));

  // button3 = createButton("ba-dum-bum");
  // button3.position(75, 150);
  // button3.mousePressed(() => playSound("guitar1"));

  // button4 = createButton("What nationality is Weird Al?");
  // button4.position(75, 200);
  // button4.mousePressed( () => playSound("TShort2"));
}

function draw() {
  background(150);
}


function keyPressed() {
  // if (key === "1") {
  //   sounds.player("balloon").start();
  // } else if (key === "2") {
  //   sounds.player("guitar1").start();
  // } else if (key === "3") {
  //   sounds.player("TShort1").start();
  // } else if (key === "4") {
  //   sounds.player("TShort2").start();
  // }
  sound1.playbackRate = 0.5;
  sound1.start();
}

// function playSound(whichSound) {
//   if (whichSound === "balloon") {
//     sounds.player("balloon").start();
//   } else if (whichSound === "guitar1") {
//     sounds.player("guitar1").start();
//   } else if (whichSound === "TShort1") {
//     sounds.player("TShort1").start();
//   } else if (whichSound === "TShort2") {
//     sounds.player("TShort2").start();
//   }
// }