var numberlist = [23, 34, 53, -21, 40, 5];

var num = 5;

function setup() {
  createCanvas(400, 300);

}

function draw() {
  background(0);
  fill(255);
  ellipse(100, 100, numberlist[2], numberlist[2]);
  ellipse(200, 100, num, num);

}