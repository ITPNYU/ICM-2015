

function setup() {
  createCanvas(600, 400);
  noLoop();
}

function draw() {
  doStuff(300, 100, 0.9);
  doStuff(100, 100, 1.2);
}


function doStuff(x, y, sc) {
  var s = 10;
  for (var i=0; i<100; i+=10) {
    for (var j=0; j<100; j+=10) {
      fill(i+j, i-j);
      ellipse(x+i, x+j, s, s);
    }
    s *= sc;
  }
}
