let tonyImg;
let x = 200;
let y = 200;
let r = 0;
let startTime = 15;
let timeRemaining = 15;
let score = 0;
let topScore = 0;
let previousScores = [];
let gameFont;

// Load images in preload, before moving onto setup function
function preload() {
  tonyImg = loadImage('Assets/tony.png');
  gameFont = loadFont('Assets/Finlandica-VariableFont_wght.ttf');
}

function setup() {
  createCanvas(400, 400);
  
  // Change image mode to use center for positional operations
  imageMode(CENTER);

  // Change angle mode to degrees for rotational operations
  angleMode(DEGREES);
}

function draw() {
  background(25, 150, 220);

  textFont(gameFont);
  textStyle(BOLD);
  textSize(18);

  if(r >= 360) {
    r -= 360;
  }


  push();
  translate(x,y);
  rotate(r);
  r += 2;
  scale(1/3);
  image(tonyImg, 0, 0);  
  pop();

  text('Time:' + ceil(timeRemaining), width-75, height-25);
  timeRemaining -= deltaTime/1000;
  if(timeRemaining < 0) {
    timeRemaining = startTime;
    topScore = max(topScore, score);
    previousScores.push(score);
    score = 0;
  }

  let scoreY = 35
  text('Score: ' + score, 20, scoreY);
  text('Top Score: ' + topScore, 20, height-25);

  for (let i = previousScores.length-1; i >= max(0, previousScores.length-3); i--) {
    scoreY += 20;
    text(previousScores[i], 20, scoreY);
  }
}

function keyTyped() {
  if(key === ' ') {
    print('space!');
    if (r > 350 || r < 10) {
      score += 10;
      print('upright!');
    } else {
      score -= 10;
      print('nope!');
    }
  }
}