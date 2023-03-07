// Set up Tone
let nxDial, nxButton;

let synth = new Tone.PolySynth().toDestination();

let pattern = new Tone.Pattern(function (time, note) {
  synth.triggerAttackRelease(note, 0.25, time);
}, ['C4', 'D4', 'E4', 'G4', 'A4']);

function setup() {
  createCanvas(400, 400);

  nxDial = Nexus.Add.Dial('#nxUI', {
    'size': [100, 100]
  });

  nxButton = Nexus.Add.Button('nxUI');
  nxButton.on('change', () => {
    Tone.start();
    pattern.start(0);
    Tone.Transport.start();
  })

}

function draw() {
  background(220);
}

function mousePressed() {
  console.log('pressed');
}