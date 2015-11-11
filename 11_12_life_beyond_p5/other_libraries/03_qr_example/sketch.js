// ITP ICM F15
// Lauren McCarthy
// https://github.com/ITPNYU/ICM-2015

// Uses this library to read QR codes: https://github.com/dwa012/html5-qrcode
// You can use this link to generate QR codes: http://webqr.com/create.html
// Quickly test by opening a QR code on your phone, or print it out. Hold it up to camera.

function setup() {
  
  var div = createDiv("");
  div.size(320, 240);
  div.position(0, 0);
  div.id('reader');
  
  var c = createCanvas(320, 240);
  c.position(0, 0);
  rectMode(CENTER);
  
  // this part sets up the reader
  // if a tag is found, it passes it on to the doGraphics function that you create
  $('#reader').html5_qrcode(function(tag) {
      // do something when code is read
      doGraphics(tag);
    },
    function(error) { print(error) },
    function(videoError) { print(videoError) }
  );
  
}

function doGraphics(tag) {
  if (tag == 'blah') {
    clear();
    ellipse(width/2, height/2, 150, 150);
  } else if (tag == 'foo') {
    clear();
    rect(width/2, height/2, 150, 150);
  }
}