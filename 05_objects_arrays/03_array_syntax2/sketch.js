var languages = ["c++", "java", "javascript", "python"];


function setup() {
  createCanvas(400, 300);
}

function mousePressed() {
  background(0);
  var index = floor(random(0, languages.length));
  fill(255);
  textSize(64);
  text(languages[index], 50, 50);
}

function draw() {

}