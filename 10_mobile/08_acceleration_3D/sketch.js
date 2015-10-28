// Jiashan Wu
// https://github.com/OhJia/p5MobileWebExamples


function setup(){
  createCanvas(windowWidth, windowHeight, 'webgl');
}

function draw(){
  background(255, 255, 255, 255);

  translate(-width/2, 0, -600);
  
  normalMaterial();
  rotateX(accelerationX * 0.05);
  rotateY(accelerationY * 0.05);
  box(80, 80, 180);

}