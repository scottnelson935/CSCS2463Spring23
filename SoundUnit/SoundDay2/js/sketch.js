let sounds = new Tone.Players({

  "balloon": "sounds/balloon.wav",
  "guitar1": "sounds/guitar1.wav",
  "TShort1": "sounds/TShort1.mp3",
  "TShort2": "sounds/TShort2.mp3",

});

let soundNames = ["balloon", "guitar1", "TShort1", "TShort2"];
let buttons = [];

// let soundsInOrder = ["balloon", "guitar1", "TShort1", "TShort2"];

const delay = new Tone.FeedbackDelay("8n", 0.5);
let delaySlider;
let feedbackSlider;

let purpleButton;

let nxSlider;
let nxDial;
let nxButtons;

// function preload() {
//   nxSlider = new Nexus.Slider('#slider');

//   nxDial = Nexus.Add.Dial('#dial', {
//     'size': [5,5]
//   })

//   soundsInOrder.forEach((sound, index) => {
//     nxButtons[index] = Nexus.Add.TextButton('#instrument', {
//       'size': [10, 5],
//       'state': false,
//       'text': sound
//     })
//   })
// }



function setup() {
  createCanvas(400, 400);
  sounds.connect(delay);
  delay.toDestination();

  soundNames.forEach((word, index) => {
    buttons[index] = createButton(word);
    buttons[index].position(index, index*50+150);
    buttons[index].mousePressed( () => playSound(word));
  })

  delaySlider = createSlider(0., 1., 0.5, 0.05);
  delaySlider.mouseReleased( () => {
    delay.delayTime.value = delaySlider.value();
  });

  feedbackSlider = createSlider(0., 1., 0.5, 0.05);
  feedbackSlider.mouseReleased( () => {
    delay.feedback.value = feedbackSlider.value();
  });

  // nxSlider.on('change', function (v) {
  //   delay.delayTime.value = v;
  // })

  // nxDial.on('change', (v) => {
  //   console.log(v)
  //   gain.gain.value = v;
  // })

  // soundsInOrder.forEach((sound, index) => {
  //   nxButtons[index].on('change', function (v) {
  //     console.log(v);
  //     sounds.player(soundsInOrder[index]).start();
  //   })
  // })

  purpleButton = document.getElementById("buttonDiv");
  // purpleButton.onclick = () => playSound('guitar1');
  purpleButton.addEventListener('click',() => playSound('guitar1'));
}

function draw() {
  background(200, 125, 225);
  text("Press these buttons to hear sounds!", 3, 200);
}

function playSound(whichSound) {
  sounds.player(whichSound).start();
}