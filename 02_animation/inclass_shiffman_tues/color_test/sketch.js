function setup() {
  createCanvas(400, 400);
  colorMode(RGB, 255, 255, 255, 100);
}

function draw() {
  background(0);
  stroke(255);
  fill(255, 0, 0);
  rect(100, 100, 100, 100);
  fill(255, 0, 200, 50);
  ellipse(200, 200, 100, 100);

}