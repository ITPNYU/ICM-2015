var s = 0;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  //background(200);
  ellipse(300, 200, s, s);
  s++;
}

function mousePressed() {
  clear();
  s = 0;
}