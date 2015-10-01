var balls = [];

function setup() {
  createCanvas(600, 400);
  
  for (var i=0; i<50; i++) {
    // make an object
    var b = {
      x: random(0, width),
      y: random(0, height),
      s: random(10, 30),
      display: function() {
        var d = dist(mouseX, mouseY, this.x, this.y);
        if (d < 15) {
          fill(100);
        } else {
          fill(255);
        }
        ellipse(this.x, this.y, this.s, this.s);
      },
      move: function() {
        this.x += random(-3, 3);
        this.y += random(-3, 3);
      }
      
    };
    // put the object in the array
    balls[i] = b;
  }
}

function draw() {
  background(0);
  // access the object, call it's methods
  for (var i=0; i<balls.length; i++) {
    balls[i].display();
    balls[i].move();
  }
}

