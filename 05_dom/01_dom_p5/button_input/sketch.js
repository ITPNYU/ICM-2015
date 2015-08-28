var button;
var input;

function setup() {
  createCanvas(480, 120);

  // create an input element and position on the page
  input = createInput();
  input.position(20, 30);

  // create a button element and position on the page
  button = createButton('submit');
  button.position(160, 30);
  // specify a function to be called when the button is pressed (callback)
  button.mousePressed(drawName);
  
  background(100);
  noStroke();
  text('Enter your name.', 20, 20);
}

// this function is called when the button is pressed
function drawName() {
  background(100);
  textSize(30);
  // grab the contents of the input box to draw to the screen
  var name = input.value();
  for (var i=0; i<30; i++) {
    fill(random(255));
    text(name, random(width), random(height));
  }
}
