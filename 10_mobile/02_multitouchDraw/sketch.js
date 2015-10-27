var colors;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(200);
  colors = [color(255,0,0), color(0,255,0), color(0,0,255), color(255, 255,0), color(0,255,255)];
}

function draw() {

  fill(0);
  //console.log(touches.length);
  for (var i = 0; i < touches.length; i++) {
    fill(colors[i]);
    ellipse(touches[i].x, touches[i].y, 16, 16);

  }
}
