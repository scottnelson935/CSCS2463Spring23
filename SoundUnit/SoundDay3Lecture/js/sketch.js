const synth = new Tone.Synth();


let notes = {

  'a': 'C4',
  's': 'D4',
  'd': 'E4',
  'f': 'F4',
  'g': 'G4',
  'h': 'A4',
  'j': 'B4',
  'k': 'C5'

};

let dur = 0;


function setup() {
  createCanvas(400, 400);
  synth.toDestination();
}

function draw() {
  background(220);
}

function keyPressed() {
  console.log(whatNote);
  let whatNote = notes[key];
  
  if (keyCode === 32) {
    dur += 1;
  }

  synth.triggerAttack(whatNote, now);
}

function keyRelease() {
  synth.triggerRelease(now + dur/frameCount);
}