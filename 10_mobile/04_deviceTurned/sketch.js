// Jiashan Wu
// https://github.com/OhJia/p5MobileWebExamples

var value = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(value);
}

function deviceTurned() {
  value = value + 10;
  if (value > 255) {
    value = 0;
  }
}

