
var offset = 0;
var sliders = [];

function setup() {
  noCanvas();
  for (var i = 0; i < 200; i++) {
    var slider = createSlider(0, 100, 50);
    sliders.push(slider);
  }
}


function draw() {
  for (var i = 0; i < sliders.length; i++) {
    var n = map(sin(offset + i / 46), -1, 1, 0, 100);
    sliders[i].value(n);
  }
  offset += 0.1;
}



