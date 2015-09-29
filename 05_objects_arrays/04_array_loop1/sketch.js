var numberlist;

function setup() {
  createCanvas(600, 300);
  numberlist = [50, 20, 100, 25, 5, 75];

}

function draw() {
  background(0);
  fill(255);

  for (var i = 0; i < numberlist.length; i++) {
    noFill();
    stroke(255);
    ellipse(i * 100 + 100, 100, numberlist[i], numberlist[i]);
  }

  // ellipse(100, 100, numberlist[0], numberlist[0]);
  // ellipse(200, 100, numberlist[1], numberlist[1]);
  // ellipse(300, 100, numberlist[2], numberlist[2]);
  // ellipse(400, 100, numberlist[3], numberlist[3]);
  // ellipse(500, 100, numberlist[4], numberlist[4]);

}