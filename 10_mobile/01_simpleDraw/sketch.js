// ICM-2015

// Take a look at the HTML file where some things have been
// added for mobile viewing

function setup() {
  // Make the canvas the size of the mobile device screen
  createCanvas(windowWidth, windowHeight);
  background(200);
}

function touchMoved() {
  strokeWeight(10)
  stroke(0);
  // Here touchX and touchY act like mouseX and mouseY
  line(touchX, touchY, ptouchX, ptouchY);
  // line(mouseX, mouseY, pmouseX, pmouseY);

  // This prevents dragging screen around
  return false;
}
