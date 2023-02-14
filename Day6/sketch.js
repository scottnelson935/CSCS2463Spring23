let spriteSheet;
let walkingAnim;
let walkingAnim2;

function preload() {
  spriteSheet = loadImage("assets/SpelunkyGuy.png");
}

function setup() {
  createCanvas(500, 500);
  imageMode(CENTER);
  walkingAnim = new WalkingAnim(spriteSheet, 80, 80, 250, 250, 9);
  walkingAnim2 = new WalkingAnim(spriteSheet, 80, 80, 100, 400, 9);
}

function draw() {
  background(220);
  walkingAnim.draw();
  walkingAnim2.draw();
}

function keyPressed() {
  walkingAnim.keyPressed(RIGHT_ARROW, LEFT_ARROW);
  walkingAnim2.keyPressed(LEFT_ARROW, RIGHT_ARROW);
}

function keyReleased() {
  walkingAnim.keyReleased(RIGHT_ARROW, LEFT_ARROW);
  walkingAnim2.keyReleased(LEFT_ARROW, RIGHT_ARROW);
}

class WalkingAnim {
  constructor(spritesheet, sw, sh, dx, dy, animLength) {
    this.spritesheet = spritesheet;
    this.sx = sw;
    this.sh = sh;
    this.dx = dx;
    this.dy = dy;
    this.u = 0; 
    this.v = 0;
    this.animLength = animLength;
    this.currentFrame = 0;
    this.moving = 0;
    this.xDir = 1;
  }

  draw() {

    if (this.moving != 0) {
      this.u = this.currentFrame % this.animLength;
    } else {
      this.u = 0;
    }

    // this.u = (this.moving != 0) ? this.currentFrame % this.animLength : 0;
    push();
    translate(this.dx, this.dy);
    scale(this.xDir, 1);

    image(this.spritesheet, 0, 0, this.sw, this.sh, this.u*this.sw, this.v*this.sh, this.sw, this.sh);
    pop();

    if(frameCount % 6 == 0) {
      this.currentFrame++;
    }
    this.dx += this.moving;
  }

  keyPressed(right, left) {
    if (keyCode === right) {
      this.moving = 1;
      this.xDir = 1;
      this.currentFrame = 1;
    } else if (keyCode === left) {
      this.moving = -1;
      this.xDir = -1;
      this.currentFrame = 1;
    }
  }

  keyReleased(right, left) {
    if (keyCode === right || keyCode === left) {
      this.moving = 0;
    }
  }
}
