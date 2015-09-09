function setup() {
  createCanvas(600, 400);
  background(0);
}

function draw() {
  // Draw a circle where the mouse is
  stroke(255);
  strokeWeight(4);
  noFill();
  ellipse(mouseX, mouseY, 50, 50);
}

function mousePressed() {
  background(0, 255, 0);
}