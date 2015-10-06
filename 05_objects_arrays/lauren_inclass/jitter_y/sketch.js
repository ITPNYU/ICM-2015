// declare the array
var x = [];
var y = [];

function setup() {
  createCanvas(600, 400);
  // load random values into array
  for (var i=0; i<50; i++) {
    x[i] = random(width);
    y[i] = random(height);
  }
}

function draw() {
  background(255);
  for (var i=0; i<x.length; i++) {
    ellipse(x[i], y[i], 30, 30);
    y[i] = y[i] + random(-3, 3);
  }
}