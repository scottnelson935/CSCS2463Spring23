let port;
let writer;
let slider;

function setup() {
  createCanvas(400, 400);
  
  if ("serial" in navigator) {
    // The web serial API is suppoerted
    let button = createButton("connect");
    button.position(0,0);
    button.mousePressed(connect);

    slider = createSlider(0, 255, 127);
    slider.position(15, 100);
    slider.style('width', '200px');
  }
}

function draw() {
  background(220);

  if (writer) {
    writer.write(new Uint8Array([ slider.value() ]));
  }
}

async function connect() {
  port = await navigator.serial.requestPort();

  await port.open({baudRate: 9600});

  writer = port.writable.getWriter();
}