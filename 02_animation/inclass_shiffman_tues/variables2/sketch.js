function setup() {
  createCanvas(400, 400);
  background(0);
}

function draw() {
  background(255-mouseX);
  noStroke();
  fill(255, 0, 200);
  ellipse(mouseX+50, mouseY, 25, 25);
  ellipse(mouseX-50, mouseY, 25, 25);
}

function mousePressed() {
  background(0);
}