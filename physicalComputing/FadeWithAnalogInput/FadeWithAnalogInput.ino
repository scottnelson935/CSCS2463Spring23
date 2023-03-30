/*
  Fade

  This example shows how to fade an LED on pin 9 using the analogWrite()
  function.

  The analogWrite() function uses PWM, so if you want to change the pin you're
  using, be sure to use another PWM capable pin. On most Arduino, the PWM pins
  are identified with a "~" sign, like ~3, ~5, ~6, ~9, ~10 and ~11.

  This example code is in the public domain.

  https://www.arduino.cc/en/Tutorial/BuiltInExamples/Fade
*/

int analogOutLED = 3; // LED pin with PWM ~
int analogIn = A0; // analog input from variable resistor

int sensorValue = 0;
int outputValue = 0;
int ledBrightness = 0;

// the setup routine runs once when you press reset:
void setup() {
  // declare pin 9 to be an output:
  Serial.begin(9600);
}

// the loop routine runs over and over again forever:
void loop() {
  // read our analog input and store that value
  sensorValue = analogRead(analogIn);

  //map the analog input to the proper range for our analog output
  outputValue = map(sensorValue, 0, 1023, 0, 255);
  ledBrightness = map(sensorValue, 0, 1023, 0, 100);
  
  // update analog out value:
  analogWrite(analogOutLED, outputValue);

//  Serial.print("sensor = ");
//  Serial.print(sensorValue);
//  Serial.print("\t Brightness % = ");
//  Serial.print(ledBrightness);
//  Serial.print("\t output = ");
//  Serial.println(outputValue);

  delay(20);

  analogWrite(analogOutLED, ledBrightness);
}
