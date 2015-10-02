// Analog Sensor

int inPin = A0;   // Sensor connected to analog pin 0
int val = 0;     // variable to store the read value

void setup() {
  Serial.begin(9600);
  pinMode(inPin, INPUT);
}

void loop() {
  val = analogRead(inPin);   // read the input pin
  Serial.println(val);
  delay(33); // 30 frames per second
}