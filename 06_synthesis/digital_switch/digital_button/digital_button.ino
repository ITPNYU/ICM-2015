// Digital input (switch or button)

int inPin = 3;   // button connected to digital pin 3
int val = 0;     // variable to store the read value
int oldVal = 0;  // variable to store the previous read value
void setup() {
  Serial.begin(9600);     // initialize serial communication
  pinMode(inPin, INPUT_PULLUP);  // initialise the input pin as an input
}

void loop() {
  val = digitalRead(inPin); // read the input pin
  if (val != oldVal) {      // if the current reading is different from the previous
    Serial.println(val);    // print the value
    oldVal = val;           // save the current reading for next time
  }
}
