var particle;

function setup() {
  createCanvas(400, 400);
  particle = {
    x: 100,
    y: 100,
    radius: 12,
    col: color(0, 255, 0),
    display: function() {
      fill(this.col);
      ellipse(this.x, this.y, this.radius * 2, this.radius * 2);
    },
    move: function() {
      this.y = this.y + 1;
      if (this.y > 200) {
        this.col = color(0, 0, 255);
      }
    }
  };
}

function draw() {
  background(0);
  particle.display();
  particle.move();
}