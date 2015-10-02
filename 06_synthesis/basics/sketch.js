// Declare a "SerialPort" object
var serial;

// First message
var latestData = "waiting for data";

function setup() {
  createCanvas(400, 300);

  // Instantiate our SerialPort object
  serial = new p5.SerialPort();

  // Assuming our Arduino is connected, let's open the connection to it
  // Change this to the name of your arduino's serial port
  serial.open("/dev/cu.usbmodem1411");

  // if you need to see the list
  // serial.onList(gotList);

  serial.onData(gotData);
}

// There is data available to work with from the serial port
function gotData() {
  var currentString = serial.readLine(); // read the incoming string
  latestData = currentString; // save it for the draw method
}

function draw() {
  background(0);
  fill(255);
  textAlign(CENTER);
  textSize(24);
  text(latestData, width/2, height/2);
}


/*
// Got the list of ports
function gotList(thelist) {
  println("List of Serial Ports:");
  // theList is an array of their names
  for (var i = 0; i < thelist.length; i++) {
    // Display in the console
    println(i + " " + thelist[i]);
  }
}*/