# Zeus

An autonomous Home Automation System developed to provide control to a house over the internet and provide increased energy efficiency using advanced modern techniques.

## Project components

The project consists of 5 components

- Tesseract
- Hercules
- Mercury
- Iris
- Poseidon


### Tesseract
The software running on the central processing hub responsible for establishing communication woth all the devices and maintaing the state of the home.

#### Oracle
The deep reinforcement learing model, which will be used to minimise the energy consumptions and increase overall energy efficiency based on user habits. 

### Hercules
Hercules is responsible for actually executing the changes in the state of the devices according to the data collected by mercury and decision taken by the tesseract.

### Mercury
Mercury is responsible for collecting the data about various environment parameters around the house and sending them to the tesseract. Mainly to be used on the sensor aggregator units.

### Iris
Iris is responsible for establishing communication between various aspects of the platform.
It will use 
- **MQTT** - for device to device communication.
- **WebSockets** - for realtime device monitoring over poseidon.

### Poseidon
Poseidon is the user interface developed for monitoring and sending commands to the 
tesseract. It will also send notifications to the user regarding various events around the house relevant to the user. 
Implemented using React.
