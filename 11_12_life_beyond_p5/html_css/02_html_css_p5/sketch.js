function setup() {
  var c = createCanvas(600, 400);
  c.parent('p5-container');
  fill(0);
}

function draw() {
  background(50, 100, 200);
  ellipse(width/2, height/2, 100, 100);
}