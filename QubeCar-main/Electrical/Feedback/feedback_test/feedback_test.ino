char value;

void setup() {
 Serial.begin(9600); 
}

void loop() {
  value = Serial.read();
  if(Serial.available()!=0){
    Serial.println(value);
    delay(500);
  }
}
