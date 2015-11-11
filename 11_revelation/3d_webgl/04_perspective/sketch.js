function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
}

function draw(){

  var fov = mouseX/width * PI/2;
  var aspect = width/height;
  if (mouseIsPressed) {
    aspect = aspect / 2.0;
  }
  perspective(fov, aspect, 0.1, 100);

  translate(30, 0, 0);
  rotateX(-PI/6);
  rotateY(PI/3 + mouseY/height * PI);
  box(45);
  translate(0, 0, -50);
  box(30);
}