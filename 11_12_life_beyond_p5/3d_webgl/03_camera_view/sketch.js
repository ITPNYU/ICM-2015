function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
}

function draw(){
  var camX = map(mouseX, 0, width, -width, width);
  var camY = map(mouseY, 0, height, -height, height);
  var camZ = 0;
  if (mouseIsPressed) {
    camZ = 1000;
  }
  camera(camX, camY, camZ);

  background(0);

  translate(30, 0, 0);
  rotateX(PI/6);
  rotateY(PI/3);
  box(45);
  translate(0, 0, -50);
  box(30);
}