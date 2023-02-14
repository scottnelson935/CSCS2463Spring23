//Scott Nelson 2023

// let previously - for something that wont change, use const

let sound1 = new Tone.Player("sounds/guitar1.wav");

let sounds = new Tone.Players({
  'guitar': "sounds/guitar1.wav",
  'balloon': "sounds/balloon.wav",
  'TShort1': "sounds/TShort1.mp3",
  'TShort2': "sounds/TShort2.mp3"
});

let button1;
let button2;
let button3;
let button4;

function setup() {
  createCanvas(400, 400);
  sounds.toDestination();
  sound1.toDestination();

  button1 = createButton('Do we love Weird Al?');
  button1.position((width / 2)-60, (height /2)-12);
  button1.mousePressed(() => playSound("TShort1"));
  
  button2 = createButton('An American Original?');
  button2.position((width / 3)-60, (height /3)-12);
  button2.mousePressed(() =>playSound("TShort2"));

  button3 = createButton('Balloon Button');
  button3.position((width / 4)-60, (height /4)-12);
  button3.mousePressed(() => playSound("balloon"));

  button4 = createButton('Melt My Face');
  button4.position((width / 1.2)-60, (height /1.2)-12);
  button4.mousePressed(() => playSound("guitar"));
}

function draw() {
  background(220);
}

function keyPressed() {
  // console.log("key is:", key)
  if (key === "1") {
    sounds.player('TShort1').start();
    // sound1.start();
  } else if (key === "2") {
    sounds.player('TShort2').start();
  } else if (key === "3") {
    sounds.player("balloon").start();
  } else if (key === "4") {
    sounds.player("guitar").start();
  }
  // sound1.playbackRate = 0.5;
  // sound1.playbackRate = (mouseY /200)+0.01;

}

function playSound(whichSound) {
  if (whichSound === "TShort1") {
    sounds.player('TShort1').start();
  } else if (whichSound === "TShort2") {
    sounds.player('TShort2').start();
  } else if (whichSound === "balloon") {
    sounds.player("balloon").start();
  } else if (whichSound === "guitar") {
    sounds.player("guitar").start();
  }
}