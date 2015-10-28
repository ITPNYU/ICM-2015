// ICM-2015

// Take a look at the HTML file where some things have been
// added for mobile viewing

var colors;

function setup() {
  // Make the canvas the size of the mobile device screen
  createCanvas(windowWidth, windowHeight);
  background(200);

  // An array of five colors, one for each finger
  colors = [color(255,0,0), color(0,255,0), color(0,0,255), color(255, 255,0), color(0,255,255)];
}

function draw() {

  // The touches array holds an object for each and every touch
  // The array length is dynamic and tied to the number of fingers 
  // currently touching
  for (var i = 0; i < touches.length; i++) {
    noStroke();
    // One color per finger
    fill(colors[i]);
    // Draw a circle at each finger
    ellipse(touches[i].x, touches[i].y, 24, 24);
  }
}

// this prevents dragging screen around
function touchMoved() {
  return false;
}
