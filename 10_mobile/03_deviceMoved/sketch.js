var bgColor;

function setup() {
  createCanvas(windowWidth, windowHeight);
  bgColor = color(0,0,0);
}

function draw() {
  background(bgColor);
  console.log(accelerationX);
}

function deviceMoved() {
    bgColor = color(map(accelerationX, -90, 90, 0, 255),
                    map(accelerationY, -90, 90, 0, 255),
                    map(accelerationZ, -90, 90, 0, 255));
}

