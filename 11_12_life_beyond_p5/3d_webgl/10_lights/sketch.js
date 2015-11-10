function setup(){
  createCanvas(710, 400, WEBGL);
  angleMode(DEGREES);
}

function draw() {
  // ambientLight(255,0,0); //even red light across our objects
  // rotateX(45);
  // box(100);

  // var dirX = map(mouseX, 0, width, -1, 1);
  // var dirY = map(mouseY, 0, height, -1, 1);
  // directionalLight(250, 250, 250, dirX, -dirY, 0.25);
  // ambientMaterial(250);
  // sphere(50, 64);

  var locX = map(mouseX, 0, width, -1, 1);
  ambientLight(50);
  pointLight(0, 0, 200, locX, 0, 0);
  pointLight(200, 200, 0, -locX, 0, 0);
  specularMaterial(250);
  sphere(100, 100);

}