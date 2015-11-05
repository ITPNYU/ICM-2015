var rot = 0;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  ortho(-width, width, height, -height/2, 0.1, 100);
  angleMode(DEGREES);
}

function draw(){
  background(0);
  translate(-100, 0, 0);
  box();
  translate(200, 0, 300);
  box();
}