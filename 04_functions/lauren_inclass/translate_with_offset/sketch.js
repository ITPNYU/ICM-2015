function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(255, 0, 100);
  
  var offset = 100;
  translate(offset, 0);
  ellipse(mouseX-offset, mouseY, 50, 50);
  
  
}