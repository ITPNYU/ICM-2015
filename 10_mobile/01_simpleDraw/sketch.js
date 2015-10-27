function setup() {
  createCanvas(windowWidth, windowHeight);
  background(200);
}

function touchMoved() {
  strokeWeight(10)
  stroke(0);
  line(touchX, touchY, ptouchX, ptouchY);
}
