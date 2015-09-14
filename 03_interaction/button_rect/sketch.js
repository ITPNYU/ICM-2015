var x = 250;
var y = 150;
var s = 100;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  if ((mouseX > x) && (mouseX < x + s) && (mouseY > y) && (mouseY < y + s)) {
    background(0);
  } else {
    background(255);
  }
  rect(x, y, s, s);
}