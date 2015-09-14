function setup() {
  createCanvas(400, 400);
  background(0);
}

function draw() {
  background(mouseX, mouseX, mouseY);
  noStroke();
  fill(255, 0, 200);
  ellipse(mouseX, mouseY, 25, 25);
}

function mousePressed() {
  background(0);
}