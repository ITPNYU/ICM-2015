  var moveX = 0;
  var r = 0;
  var g = 0;
  var b = 0;

  function setup() {
    createCanvas(600, 400);
  }

  function draw() {
    // Draw a circle where the mouse is
    background(r, g, b);
    stroke(255);
    strokeWeight(4);
    fill(b, r, g);
    ellipse(moveX, 200, 50, 50);
    moveX = moveX + 0.25;
    r = r + 0.1;
    g = g + 1;
    b = b + 0.6789;
    // println(r);
  }

  function mousePressed() {
    //moveX = moveX + 5;
  }