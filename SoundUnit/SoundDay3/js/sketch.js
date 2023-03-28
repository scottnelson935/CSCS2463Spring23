//create a synth and connect it to the main output (your speakers)
const synth = new Tone.Synth().toDestination();
// const drum = new Tone.MembraneSynth();
// const reverb = new Tone.JCReverb(0.4);

let notes = {
  'a': 'C4',
  's': 'D4',
  'd': 'E4',
  'f': 'f4',
  'g': 'g4',
  'h': 'A4',
  'j': 'B4',
  'k': 'C5'
}

function setup() {
  createCanvas(400, 400);
  // synth.connect(reverb);
  // drum.connect(reverb);
  // reverb.roomSize = 0.9;
  // reverb.toDestination();
}

function draw() {
  background(220);
}

function keyPressed() {
  let toPlay = notes[key];
  console.log(toPlay);
  // synth.resonance = 0.99;
  // synth.dampening = 500;
  // synth.release = 5;

  // synth.harmonicity.value = 1.25;
  synth.triggerAttackRelease(toPlay, '4n');
  synth.triggerAttackRelease('G6', '4n', 4);
  synth.triggerAttackRelease('A6', '4n', 8);

  // drum.triggerAttackRelease("C2", "8n");
}