var on = false;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  if (on == true) {
    background(255);
  } else {
    background(0);
  }
}

function mousePressed() {
  if (on == true) {
    on = false;
  } else {
    on = true;
  }
}