// ICM-2015

// Take a look at the HTML file where some things have been
// added for mobile viewing

function setup() {
  // Make the canvas the size of the mobile device screen
  createCanvas(windowWidth, windowHeight);
  background(200);
}


function mouseMoved() {
  drawLine();
}

function touchMoved() {
  drawLine();

  // This prevents dragging screen around
  return false;
}


function drawLine() {
  strokeWeight(10)
  stroke(0);
  // Here touchX and touchY act like mouseX and mouseY
  // line(touchX, touchY, ptouchX, ptouchY);
  var x = mouseX || touchX;
  var y = mouseY || touchY;
  var px = pmouseX || ptouchX;
  var py = pmouseY || ptouchY;
  line(x, y, px, py);
}
