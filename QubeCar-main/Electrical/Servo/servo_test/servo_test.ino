#include <servo.h>

float ang = 30;

void setup() {
  Servo testServo;
}

void loop() {
  testServo.attach(9);
  testServo.write(ang);
  delay(1000);
}
