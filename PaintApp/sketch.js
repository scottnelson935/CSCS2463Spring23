let currentColor, black, white, red, orange, yellow, green, blue, purple;

function setup() {
  createCanvas(400, 400);
  background(255);
  currentColor = 0;
  black = new colorBox(0, "black");
  white = new colorBox(50, "white");
  red = new colorBox(100, "red");
  orange = new colorBox(150, "orange");
  yellow = new colorBox(200, "yellow");
  green = new colorBox(250, "green");
  blue = new colorBox(300, "blue");
  purple = new colorBox(350, "purple");
}

function draw() {
  // background(220);
  if(mouseIsPressed) {
    if(mouseX > 51) {
      drawing();
    }
  }

  black.appear();
  black.onMousePressed();
  white.appear();
  red.appear();
  orange.appear();
  yellow.appear();
  green.appear();
  blue.appear();
  purple.appear();

}

class colorBox {
  constructor(y,color) {
    this.x = 0;
    this.y = y;
    this.w = 50;
    this.h = 50;
    this.color = color;
  }

  appear() {
    push();
    
    noStroke();

    fill(this.color);
    rect(this.x, this.y, this.w, this.h);
    pop();
  }

  onMousePressed() {
    if (mouseIsPressed) {
      if (mouseX < 50) {
        if (mouseY > 0 && mouseY < 50) {
          currentColor = "black";
        } else if (mouseY > 50 && mouseY < 100) {
          currentColor = "white";
        } else if (mouseY > 100 && mouseY < 150) {
          currentColor = "red";
        } else if (mouseY > 150 && mouseY < 200) {
          currentColor = "orange";
        } else if (mouseY > 200 && mouseY < 250) {
          currentColor = "yellow";
        } else if (mouseY > 250 && mouseY < 300) {
          currentColor = "green";
        } else if (mouseY > 300 && mouseY < 350) {
          currentColor = "blue";
        } else if (mouseY > 350 && mouseY < 400) {
          currentColor = "purple";
        }
      }
    }
  }
}

function drawing() {
  push();
  stroke(currentColor);
  strokeWeight(3);
  line(pmouseX, pmouseY, mouseX, mouseY);
  pop();
}