// Analog Sensor

int inPin = A0;  // Sensor connected to analog pin 0

void setup() {
  Serial.begin(9600);     // initialize serial communications
}

void loop() {
  int val = analogRead(inPin); // read the input pin
  Serial.println(val);         // print it out the serial port
}
