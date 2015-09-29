var x = 200;
var y = 200;
var diameter = 50;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255);
  ellipse(x, y, diameter, diameter);
  
  if (mouseIsPressed) {
    if (dist(x, y, mouseX, mouseY) < diameter/2) {
      x = mouseX;
      y = mouseY;
    }
  }
}