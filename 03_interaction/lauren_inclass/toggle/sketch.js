var on = false;

function setup() {
  createCanvas(600, 400);
}

function draw() {

}

function mousePressed() {
  // if (on == true) {
  //   on = false;
  // } else {
  //   on = true;
  // } // same as below
  on = !on;
  if (on == true) {
    background(255);
  } else {
    background(0);
  }
}