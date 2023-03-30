/*- VCC  -> 5VDC
 * - TRIG -> Pin 9
 * - ECHO -> Pin 8
 * - GND  -> GND
*/

int trigPin = 9;    // TRIG pin ~
int echoPin = 8;    // ECHO pin
int ledPin = 3;     // LED pin ~

int ledBright = 0;

float duration_us, distance_cm;

void setup() {
  // begin serial port
  Serial.begin (9600);

  // configure the trigger pin to output mode
  pinMode(trigPin, OUTPUT);
  // configure the echo pin to input mode
  pinMode(echoPin, INPUT);
}

void loop() {
  // generate 10-microsecond pulse to TRIG pin
  digitalWrite(trigPin, HIGH);
  delayMicroseconds(10);
  digitalWrite(trigPin, LOW);

  // measure duration of pulse from ECHO pin
  duration_us = pulseIn(echoPin, HIGH);

  // calculate the distance
  distance_cm = 0.017 * duration_us;

  // distance
  ledBright = map(distance_cm, 0, 15, 0, 50);

  analogWrite(ledPin, ledBright);
  
  // print the value to Serial Monitor
  //Serial.print("distance: ");
  Serial.println(duration_us);
  //Serial.println(" cm");

  delay(1000);
}
