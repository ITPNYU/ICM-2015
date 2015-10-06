var balls = [];

function setup() {
  createCanvas(600, 400);

  for (var i = 0; i < 100; i++) {
    var b = {
      x: random(width),
      y: random(height),
      targetx: 0,
      targety: 0,
      burgerturtle: function() {
        ellipse(this.x, this.y, 30, 30);
      },
      diaperturtle: function() {
        this.x += random(-3, 3);
        this.y += random(-3, 3);
      }
    };
    balls[i] = b;
  }
}

function draw() {
  background(255);
  for (var i = 0; i < balls.length; i++) {
    balls[i].burgerturtle();
    balls[i].diaperturtle();
  }
}