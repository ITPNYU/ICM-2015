var circleX = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {

  background(0);
  
  noStroke();
  fill(255, 0, 200);
  ellipse(circleX, 200, 50, 50);

  circleX = circleX + 0.2; 
}

function mousePressed() {
  //circleX = circleX + 5; 
}