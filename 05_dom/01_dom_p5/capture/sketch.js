var capture;

function setup() {
  createCanvas(480, 120);
  // create a webcam capture object
  capture = createCapture();
  // hide the actual cam input element, we will draw to the canvas instead
  // try commenting out this line to see what happens
  capture.hide();
}

function draw() {
  // draw capture element to canvas
  image(capture, 0, 0, width, width*capture.height/capture.width);
  // filter the canvas for effect
  filter(INVERT);
}