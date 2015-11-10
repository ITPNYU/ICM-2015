function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
}

function draw() {
  orbitControl();
  background(0);
  //draws a box of width: 10, height: 20, and depth: 30
  box(30, 50, 50);
  //draws a cone with radius: 40, height: 100, and a detail of 100
  cone(100, 100, 10);

  translate(200, 0, 0);
  sphere(50, 50, 50);
  translate(0, 100, 0);
  cylinder(30, 30);
  translate(0, 100, 0);
  torus(100, 60);
}