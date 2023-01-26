let x = 200;
let y = 200;
let hue = 0;
let sat = 100;

function setup() {
  createCanvas(400, 400);
  colorMode(HSB);
  angleMode(DEGREES);
}

function draw() {
  background(0, 0, 0);

  if (mouseIsPressed) {
    if (mouseButton === LEFT) {
      x = mouseX;
      y = mouseY;
    } else if (mouseButton === RIGHT) {
      y = mouseX;
      x = mouseY;
    }
  } else {
    x = 200;
    y = 200;
  }

  let halfX = width/2;
  let halfY = height/2;

  let a = atan2(mouseY - halfY, mouseX - halfX);
  let d = dist(mouseX, mouseY, halfX, halfY);

  sat = d / sqrt(halfX*halfY) * 100;

  //draw face
  hue = a + 180;//mouseX / width * 360;
  // sat = mouseY / height * 100;
  drawFace(x,y);
  drawFace(x + 50,y + 70);
}

function drawFace(x,y) {
  fill(hue, sat, 100);
  ellipse(x, y, 50);
  fill('black');
  rect(x, y-10, 5);
  rect(x+10, y-10, 5);
  rect(x+5, y+5, 5);

}