var bgColor;

function setup() {
  createCanvas(windowWidth, windowHeight);
  bgColor = color(0,0,0);
}

function draw() {
  background(bgColor);

  var ax = map(accelerationX, -90, 90, 0, windowWidth);
  var ay = map(accelerationY, -90, 90, 0, windowHeight);
  fill(255);
  ellipse(ax, ay, 30, 30);
}

function deviceMoved() {
    bgColor = color(map(accelerationX, -90, 90, 0, 255),
                    map(accelerationY, -90, 90, 0, 255),
                    map(accelerationZ, -90, 90, 0, 255));
}

