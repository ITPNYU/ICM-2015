var particleList = [];

function setup() {
  createCanvas(400, 400);

  for (var i = 0; i < 50; i++) {
    var particle = {
      x: random(width),
      y: random(height),
      radius: 12,
      display: function() {
        fill(255, 100);
        ellipse(this.x, this.y, this.radius * 2, this.radius * 2);
      },
      move: function() {
        this.y = this.y + random(-1, 1);
      }
    };
    particleList[i] = particle;
  }
}

function draw() {
  background(0);
  for (var i = 0; i < particleList.length; i++) {
    particleList[i].display();
    particleList[i].move();
  }
}