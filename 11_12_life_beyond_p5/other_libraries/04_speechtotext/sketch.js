// ITP ICM F15
// Lauren McCarthy
// https://github.com/ITPNYU/ICM-2015

// Detect speech and translate to text.
// Note: This only works in chrome, webkitSpeechRecognition is built-in chrome functionality.
// More information: https://developers.google.com/web/updates/2013/01/Voice-Driven-Web-Apps-Introduction-to-the-Web-Speech-API?hl=en
// More information: http://shapeshed.com/html5-speech-recognition-api/

var i = 0;
var recognition;

function setup() {
  recognition = new webkitSpeechRecognition();
  recognition.continuous = true;
  recognition.onresult = handleSpeech;
}

function draw() {

}

function handleSpeech(event) {
  print(event.results);
  var res = event.results[i][0].transcript;
  print(res);
  // logic here to search for keywords and responds
  i++;
}

function mousePressed() {
  print("starting recognition");
  recognition.start();
}