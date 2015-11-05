var rot = 0;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
}

function draw(){
  if (mouseIsPressed) {
    ortho(-width, width, height, -height, 0.1, 100);
  } else {
    perspective(PI/3, width/height, 0.1, 100);
  }

  background(0);

  translate(300, 0, 0);
  box(50);
  translate(-600, 0, 100);
  box(50);
}