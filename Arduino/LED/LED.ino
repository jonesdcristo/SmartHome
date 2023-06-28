#include <WiFi.h>
#include <FirebaseESP32.h>


const char* usuario = "jones";
const char* senha = "jonin1987";
bool statusConexao = false;

const char* host = "https://teste-5c4a2-default-rtdb.firebaseio.com/";
const char* token = "AIzaSyB0FK6Ks2HduOv__Pu1ByyxgRcuooLCOTU";

FirebaseData minhaBase;


void setup(){ 
Serial.begin(115200);
pinMode(25,OUTPUT);

WiFi.begin(usuario,senha);


while(WiFi.status()!= WL_CONNECTED){
  delay(1000);
}
statusConexao = true;
Firebase.begin(host,token);
}

void loop() {

Firebase.get(minhaBase, "Led/Status");
int led = minhaBase.intData();

switch(led){
  case 0:
    digitalWrite(25,LOW);
    break;
  case 1:
    digitalWrite(25,HIGH);
    break;
  }
}
