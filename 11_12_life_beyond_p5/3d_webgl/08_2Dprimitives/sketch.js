function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
}

function draw() {
  background(0);
  for (var i = -5000; i < 5000; i += 100) {
    triangle(
      0, 100, i,
      60, 160, i,
      -60, 160, i);
      
  }
}