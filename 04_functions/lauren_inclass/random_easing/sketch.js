var x = 200;
var y = 200;
var targetx = 200;
var targety = 200;
var easing = 0.05;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255);
  
  // add random motion to targetx/y
  targetx += random(-5, 5);
  targety += random(-5, 5);
  
  // ease actual x/y toward targetx/y
  var diffx = targetx - x;
  var diffy = targety - y;
  x += easing*diffx;
  y += easing*diffy;
  
  // draw ellipse
  ellipse(x, y, 30, 30);

}