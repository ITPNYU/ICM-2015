var x = [];
var y = [];

function setup() {
  createCanvas(600, 400); 
  
  for (var i=0; i<200; i++) {
    x[i] = random(0, width);
    y[i] = random(0, height);
  }
}

function draw() {
  background(255, 0, 0);
  
  for (var i=0; i<x.length; i++) {
    ellipse(x[i], y[i], 30, 30);
    x[i] += random(-3, 3);
    y[i] += random(-3, 3);
  }
}