// This example shows how to read an analog
// value from an serial port
// and draw circle with size mapped to that value

// Declare a "SerialPort" object
var serial;

// Variable for size 
var diameter = 0;

function setup() {
  createCanvas(600, 400);

  // Instantiate our SerialPort object
  serial = new p5.SerialPort();

  // Assuming our Arduino is connected, let's open the connection to it
  // Change this to the name of your arduino's serial port
  serial.open("/dev/cu.usbmodem1421");

  // if you need to see the list
  // serial.onList(gotList);

  // This is a new concept!
  // Whenever there is new data, the "gotData" function happens.
  // This is called a *CALLBACK*
  serial.onData(gotData);
}

// This happens when there is data
function gotData() {
  // Read the data as text (a string)!
  var data = serial.readLine();
  // Check to make sure something really came in
  if (data.length > 0); {
    // To use it as a number, the Number() function
    // converts it.  Divide by 10 to make it smaller
    diameter = Number(data) / 10;
  }
}

function draw() {
  background(0);
  

  // Display raw data in canvas
  fill(255);
  textAlign(CENTER);
  textSize(24);
  text(diameter, width / 2, height -12);
  
  // Draw the circle!
  fill(255);
  ellipse(width/2, height/2, diameter, diameter);
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