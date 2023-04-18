let button;
let port;
let writer;
let sliderLED;
let sliderBlue;
let red, green, blue;

const encoder = new TextEncoder();

function setup() {
  createCanvas(400, 400);

  if ("serial" in navigator) {
    // The Web Serial API is supported
    button = createButton("connect");
    button.position(10, 10);
    button.mousePressed(connect);

    sliderLED = createSlider(0, 255, 127);
    sliderLED.position(10, 50);
    sliderLED.style("width", "200px");
   
    sliderBlue = createSlider(0, 255, 127);
    sliderBlue.position(10, 100);
    sliderBlue.style("width", "200px");
  }
}

function mouseMoved() {
  red = round(map(mouseX, 0, width, 0, 255));
  green = round(map(mouseY, 0, height, 0, 255));
  blue = sliderBlue.value();
}

function draw() {
  background(220);

  if (writer) {
    writer.write(encoder.encode(red + "," + green + "," + blue + "\n"))
    writer.write(new Uint8Array([ sliderLED.value() ]));
  }
}

async function connect() {
  port = await navigator.serial.requestPort();

  await port.open({ baudRate: 9600 });

  writer = port.writable.getWriter();
}
