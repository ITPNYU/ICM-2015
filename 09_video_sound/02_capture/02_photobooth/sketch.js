// Learning Processing
// Daniel Shiffman
// http://www.learningprocessing.com

// Example 16-1: Display video

var video;

function setup() {
  var canvas = createCanvas(320, 240);
  background(0);
  canvas.parent('video');
  video = createCapture(VIDEO);
  video.size(320, 240);
  video.parent('video');

  var button = createButton('snap');
  button.parent('button');
  button.mousePressed(snap);
}

function snap() {
  image(video, 0, 0, width, height);
}

