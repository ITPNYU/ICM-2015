var playing = false;
var fingers;
var button;

var time;


function setup() {
  createCanvas(100, 100);
  background(0);

  time = createP('0');

  // specify multiple formats for different browsers
  fingers = createVideo('fingers.mov');
  fingers.play();

  fingers.addCue(2, changeBackground);

  fingers.addCue(4, showText, "hello at 4 seconds");
  fingers.addCue(6.5, showText, "hello again at 6.5 seconds");

}

function draw() {
  time.html(fingers.time());
}

function changeBackground() {
  background(255, 0, 175);
}

function showText(txt) {
  createP(txt);
}

