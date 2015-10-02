// Switch

int inPin = 3;   // button connected to digital pin 3
int val = 0;     // variable to store the read value

void setup() {
  Serial.begin(9600);
  pinMode(inPin, INPUT);
}

void loop() {
  val = digitalRead(inPin);   // read the input pin
  Serial.println(val);
  delay(33); // 30 frames per second
}