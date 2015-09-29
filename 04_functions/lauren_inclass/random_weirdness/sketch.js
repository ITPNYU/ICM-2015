function setup() {
  createCanvas(600, 400);
}

function draw() {
  doStuff(100, 100, 0.9);
  doStuff(300, 50, 1.2);
}

function doStuff(x, y, scalar) {
  var s = 10;
  for (var i=0; i<100; i+=10) {
    for (var j=0; j<100; j+=10) {
      fill(i*2);
      stroke(j*2);
      ellipse(x+i, y+j, s, s);
    }
    s = s * scalar;
  }
}


