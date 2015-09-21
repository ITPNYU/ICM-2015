var x1 = 0;
var x2 = 0;

function setup() {
  createCanvas(600, 400);
  noStroke();
}

function draw() {
  fill(255);
  rect(0, 0, 600, 250);
  fill(0);
  ellipse(x1, 200, 50, 50);
  ellipse(x2, 300, 50, 50);
  x1 = x1 + 1;
  x2 = x2 + 2;
  filter(BLUR,3);
}