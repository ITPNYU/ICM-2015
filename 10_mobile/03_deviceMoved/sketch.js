// A global variable for background color
var bgColor;

function setup() {
  createCanvas(windowWidth, windowHeight);
  bgColor = color(0,0,0);
}

function draw() {
  // Draw the backgroung
  background(bgColor);

  // Map the accelerameter data to an x and y position
  var x = map(accelerationY, -90, 90, 0, width);
  var y = map(accelerationX, -90, 90, 0, height);
  fill(255);
  ellipse(x, y, 30, 30);
}

// There is also an event triggered whenever the
// device is moved. Here we are picking a background
// color based on accelerometer data
function deviceMoved() {
  var r = map(accelerationX, -90, 90, 0, 255);
  var g = map(accelerationY, -90, 90, 0, 255);
  var b = map(accelerationZ, -90, 90, 0, 255);
  bgColor = color(r, g, b);
}

