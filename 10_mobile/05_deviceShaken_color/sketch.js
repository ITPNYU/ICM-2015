// ICM-2015

// Take a look at the HTML file where some things have been
// added for mobile viewing

function setup() {
  createCanvas(windowWidth, windowWidth);
  setShakeThreshold(50);
  colorMode(HSB);
  background(0);
}


function deviceShaken() {
  var h = random(255);
  background(h, 255, 255);
}