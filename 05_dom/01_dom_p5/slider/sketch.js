var slider;

function setup() {
  createCanvas(480, 120);
  // create a slider element and position it on the page
  slider = createSlider(0, 255, 100);
  slider.position(20, 20);
}

function draw() {
  // grab the value of the slider to set as the background color
  var gray = slider.value();
  background(gray);
}