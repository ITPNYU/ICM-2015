var grays = [];

function setup() {
  createCanvas(600, 400);
  for (var i=0; i<width; i++) {
    grays[i] = i/3;
  }
}

function draw() {
  background(255);
  for (var i=0; i<grays.length; i++) {
    stroke(grays[i]);
    line(i, 0, i, height);
  }
}