function setup() {
  createCanvas(600, 400);
}


function draw() {
  //background(mouseX, mouseY, 0);
  background(mouseX);
  stroke(255-mouseX);
  strokeWeight(4);
  noFill();
  ellipse(mouseX, 200, 50, 50);
}
