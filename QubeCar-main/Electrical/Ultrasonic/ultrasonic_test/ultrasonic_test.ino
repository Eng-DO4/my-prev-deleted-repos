#define trig 10
#define echo 11

float d=0, t=0;

void setup() {
  pinMode(trig,INPUT);
  pinMode(echo,OUTPUT);
  Serial.begin(9600);
}

void loop() {
  digitalWrite(trig,LOW);
  delayMicroseconds(5);
  digitalWrite(trig,HIGH);
  delayMicroseconds(10);
  digitalWrite(trig,LOW);
  t=pulseIn(echo,HIGH);
  d=0.0343*t/2;
  Serial.println(d);
  delay(500);
}
