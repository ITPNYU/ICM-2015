var x = 50;
var speed = 10;
var dir = 1;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(255, 0, 0);
  drawEllipse();
  move();
  bounce();
}

function drawEllipse() {
  fill(0);
  ellipse(x, 200, 50, 50);
}

function move() {
  x = x + speed * dir;
}

function bounce() {
  if (x > width - 25 || x < 25) {
    dir = -1*dir;
  }
}