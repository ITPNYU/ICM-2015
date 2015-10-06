var words = ["burger", "milkshake", "turtle", "diaper"];

function setup() {
  createCanvas(600, 400);
  textSize(20);
  frameRate(1);
}

function draw() {
  background(255);
  var n1 = int(random(0, words.length));
  var n2 = int(random(0, words.length));
  text(words[n1]+words[n2], 50, 50);
}