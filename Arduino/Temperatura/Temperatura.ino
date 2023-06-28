#include <WiFi.h>
 #include <FirebaseESP32.h>
 #include <DHT.h>
 #define DHTTYPE DHT11
 #define DHTPIN 18
 DHT dht (DHTPIN, DHTTYPE);

 const char* usuario = "jones";
 const char* senha = "jonin1987";
 bool statusConexao = false;

 const char* host = "https://teste-5c4a2-default-rtdb.firebaseio.com/";
 const char* token = "AIzaSyB0FK6Ks2HduOv__Pu1ByyxgRcuooLCOTU";
 FirebaseData minhaBase;
 void setup(){ 
Serial.begin(115200);
 WiFi.begin(usuario,senha);
 while(WiFi.status()!= WL_CONNECTED){
 delay(1000);
 }

 statusConexao = true;
 Firebase.begin(host,token);
 dht.begin();
 }
 void loop() {

  //delay (2000);

  int temperatura = dht.readTemperature();
  int umidade = dht.readHumidity();
  Firebase.setInt(minhaBase,"temp", temperatura);
  Firebase.setInt(minhaBase,"humid", umidade);
  
 }
