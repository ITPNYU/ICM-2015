function setup() {
  createCanvas(400,400);
}

function draw() {
  background(0);
  noFill();
  stroke(127);
  strokeWeight(1);
  ellipse(200, 200, 100, 100);
  
  fill(127);
  stroke(255);
  strokeWeight(4);
  arc(200, 200, 100, 100,-PI/2, 0);

  
}