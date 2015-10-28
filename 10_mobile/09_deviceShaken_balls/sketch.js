// Jiashan Wu
// https://github.com/OhJia/p5MobileWebExamples

var balls = [];

function setup() {
  createCanvas(displayWidth, displayHeight);
  for (var i = 0; i < 15; i++) {
    balls.push(new Ball());
  }
  setShakeThreshold(50);
}

function draw() {
  background(0);

  for (var i = 0; i < balls.length; i++) {
    balls[i].move();
    balls[i].turn();
    balls[i].display();
  }

}

// Ball class
function Ball() {
  this.x = random(width);
  this.y = random(height);
  this.diameter = random(20, 30);
  this.xspeed = random(-2, 2);
  this.yspeed = random(-2, 2);
  this.oxspeed = this.xspeed;
  this.oyspeed = this.yspeed;
  this.direction = 0.5;

  this.move = function() {
    this.x += this.xspeed * this.direction;
    this.y += this.yspeed * this.direction;

  };

  this.turn = function() {
    if (this.x < 0) {
      this.x = 0;
      this.direction = -this.direction;
    } else if (this.y < 0) {
      this.y = 0;
      this.direction = -this.direction;
    } else if (this.x > width - 20) {
      this.x = width - 20;
      this.direction = -this.direction;
    } else if (this.y > height - 20) {
      this.y = height - 20;
      this.direction = -this.direction;
    }
  }

  this.shake = function() {
    //   this.xspeed += random(5, accChangeX/3);
    //   this.yspeed += random(5, accChangeX/3);
    this.xspeed += random(5, 15);
    this.yspeed += random(5, 15);
  }

  this.stopShake = function() {
    if (this.xspeed > this.oxspeed) {
      this.xspeed -= 0.6;
    } else {
      this.xspeed = this.oxspeed;
    }
    if (this.yspeed > this.oyspeed) {
      this.yspeed -= 0.6;
    } else {
      this.yspeed = this.oyspeed;
    }
  }

  this.display = function() {
    ellipse(this.x, this.y, this.diameter, this.diameter);
  };
}

function deviceShaken() {
  for (var i = 0; i < balls.length; i++) {
    balls[i].shake();
    balls[i].turn();
  }
  setInterval(function() {
    for (var i = 0; i < balls.length; i++) {
      balls[i].stopShake();
      balls[i].move();
    }
  }, 500);
}