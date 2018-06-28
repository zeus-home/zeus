#include <Arduino.h>
#include <ESP8266WiFi.h>
#include <PubSubClient.h>

#define SSID "Tesseract"
#define PASSWORD "nointernet"

#define MQTT_SERVER "cravis"
#define MQTT_PORT 1883

#define DEVICE_ID "ESP8266 Client"
#define TOPIC_SUB "hercules/43274"
#define TOPIC_PUB "iris/43274"

int x;

WiFiClient espClient;
PubSubClient client(espClient);    

void mqttCallback(char*, byte*, unsigned int);

void setup() {
    // Output Configuration
    pinMode(LED_BUILTIN, OUTPUT);

    //Serial Mode (for Debugging)
    Serial.begin(9600);

    // Initialize Wifi
    WiFi.mode(WIFI_STA);
    WiFi.begin(SSID, PASSWORD);
    Serial.print("Connecting to ");
    Serial.println(SSID);
    while(!WiFi.isConnected()) {
        delay(1000);
        Serial.print('.');
    }
    Serial.println();
    Serial.println("Connected!");
    Serial.print("IP Address: ");
    Serial.println(WiFi.localIP());

    client.setServer(MQTT_SERVER, MQTT_PORT);
    client.setCallback(mqttCallback);

    Serial.println("Attempting connection to Tesseract...");
    while(!client.connected()) {
        if(client.connect(DEVICE_ID)) {
            Serial.println("\nConnected!");
        } else {
            Serial.print(".");
            delay(1000);
        }
    }

    x = 0;
    client.subscribe(TOPIC_SUB);

}

void loop() {
    client.loop();
}

void mqttCallback(char* topic, byte* payload, unsigned int length) {
    Serial.println("*Payload received*");
    Serial.print(topic);
    Serial.print(": ");
    if(length == 3) {
        digitalWrite(LED_BUILTIN, HIGH);
    } else {
        digitalWrite(LED_BUILTIN, LOW);
    }
    Serial.println("\n---------------");
}