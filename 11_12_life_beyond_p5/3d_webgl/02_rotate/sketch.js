var rot = 0;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  angleMode(DEGREES);
}

function draw(){
  background(0);
  
  // rotate around x/y axis
  // rotate(rot, [1, 1, 0]);
  
  // barrel roll around x axis
  rotateX(rot);
  box();
  rot+=0.05;
  
}