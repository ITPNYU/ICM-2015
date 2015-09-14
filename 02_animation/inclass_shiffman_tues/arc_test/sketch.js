function setup() {
  createCanvas(400,400);
}

function draw() {
  background(0);
  noFill();
  stroke(255);
  //ellipse(200, 200, 100, 100);
  strokeWeight(4);
  fill(175);
  arc(200, 200, 100, 100, 4.333, 0, PIE);
  
}