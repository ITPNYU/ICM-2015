// Getting Started with p5.js
// Lauren McCarthy, Casey Reas, Ben Fry

var weatherData;

function preload() {
  weatherData = loadJSON("cincinnati.json");
}

function setup() {
  var temp = getTemp(weatherData);
  print(temp);
}

function getTemp(data) {
  var list = data.list;
  var item = list[0];
  var main = item.main;
  var temp = main.temp;
  return temp;
}