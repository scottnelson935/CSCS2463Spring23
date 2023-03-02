let pitch = 600;

// Set up Tone
let osc = new Tone.AMOscillator(pitch, 'sine', 'sine').start()
let gain = new Tone.Gain().toDestination();
let pan = new Tone.Panner().connect(gain);
let ampEnv = new Tone.AmplitudeEnvelope({
  attack: 0.1,
  decay: 0.2,
  sustain: 1.0,
  release: 0.8
}).connect(pan);
osc.connect(ampEnv);

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  // console.log(frameCount);

  if ((frameCount % 60) === 0) {
    pitch = random(300, 1000);
    // console.log(pitch);
  }
}

function mousePressed() {
  console.log('pressed');
  ampEnv.triggerAttackRelease('4n');
  // osc.frequency.linearRampTo(800, '+1');
  osc.frequency.linearRampToValueAtTime(pitch + 200, '+1');
  ampEnv.triggerAttackRelease('4n', '+1');
}