var presses = 0;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  if (presses == 0) {
    background(255, 0, 0);
  } else if (presses == 1) {
    background(255, 0, 255);
  } else if (presses == 2) {
    background(255, 100, 50);
  }
}

function mousePressed() {
  presses = presses + 1;
}


