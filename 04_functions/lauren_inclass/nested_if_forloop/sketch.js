function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(255);

  if (mouseX < width / 2) {
    for (var i = 0; i < width; i = i + 5) {
      line(i, 0, i, height);
    }
  }
}