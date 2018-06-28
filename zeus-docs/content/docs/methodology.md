+++
title = "Methodology"
description = "Project execution"
date = 2018-06-28T15:01:21+05:30
weight = 60
draft = false
bref = "The need for smart homes in this age and problems with current implementations"
toc = true
+++

<style>
    p:not(.hero-lead) {
        text-align: justify;
    }

    .wp-incharge {
        text-align: right;
        font-style: italic;
    }

    .subsection-head {
        font-size: 22px;
        line-height: 30px;
        margin-top: 44px;
        font-weight: 500;        
    }

    .subsection-head:hover {
        color: #f03c69;
    }

</style>

To ensure that all our objectives are met, we have divided our work packages in 4 work packages, each centred around a single objective. Completion of each of these work packages will complete an objective of our project and prepare a deliverable which will be a part of the complete system.
 
Work Packages and division among team members
<h3 class="section-head" id="wp1"><a href="#wp1">WP1 Sensor aggregator module development</a></h3>
<div class='wp-incharge'>Work Package Incharge: Shubham Gupta</div>

Sensors are collected in a single unit to form an interconnection among the sensors for eﬃcient analysis and evaluation of aggregated data by the controlling unit.
<h4 class="subsection-head">WP1.1 Selection of sensors</h4>

As a first step, we need to figure out all the to identify environment variables relevant to home automation system. This is a vital step in our design phase as this will determine the capabilities and limitations of the system. The identification of these variables depends on the appliances to be automated in the existing home.

These are the conceived energy based equipment which will be optimized.

- Lights
- Fans
- Air conditioners

Now based upon the above identified appliances, the environment variables under observation will be

- **Infrared Radiations** - to detect the presence of human being in or around the target area. It is very important to detect this parameter because most of the appliances are automated based upon this variable. In order to accomplish this task, Passive Infrared (PIR)Sensors would be best suited.

- **Temperature** - using a certain algorithm, the data provided by the temperature sensor will be compared with some reference value and then the associated appliances will be automated to maintain a certain temperature.

- **Illumination** - It is also required to automate some of the appliances such as lights by observing the intensity of light in the home surrounding. The information provided by this sensor will be used by the system to, adjusted the illumination accordingly to desired level deliver an in the target area.

- **Moisture** - 
In order to detect the moisture present in the atmosphere, a humidity sensor (or hygrometer) will be used. It senses, measures and reports the relative humidity and therefore measures both moisture and temperature. The moisture report by the sensor will be compared to some predefined value and in case it is above that value, corresponding appliances will be automated. 
    
Based upon the above identified variables we will find out the optimum sensors for detection of changes in the associated environment variables. For instance, to detect the presence of human, a many number of occupancy sensor is available in the market so to choose the most accurate one we will first define our purpose and then will choose the closely related one to get our purpose done in an efficient manner.

The output of sensor will be observed using some data processing methods to draw inferences regarding each sensor.

<h4 class="subsection-head">WP1.2 Aggregation of sensors</h4>

Based upon the appliances present inside a particular room, specific sensors will be aggregated to form a module of sensors and it will be installed inside every room. This will help in collecting optimum data and reduce complexity in the installation as well.

The module formulated will be a combined unit containing sensors and circuitry for controlling an entire room. All such modules will form a network through the Home Automation Unit. This module will act as a local control placed centrally on the ceiling providing ease of access to every part of the room through a single unit.
So, the module formation will be based on the type of room under consideration. Any home consists of a minimum of one bedroom, a kitchen, washroom etc.

Bedroom typically has lights, fan, air conditioner to be automated and hence the module must contain a PIR sensor, a temperature sensor, and an LDR. The PIR sensor will detect the presence of the human being inside the room by measuring the IR radiations and at the same time, the other two sensors will send the corresponding data regarding temperature and intensity of light inside the room. Based on the data, required appliances will be controlled as per some predefined algorithms. The position of this module will vary from room to room and depends basically upon the structure and design of the room.

Kitchen has lights, stoves, refrigerator and chimney to be automated and hence the sensor module must contain a PIR sensor, a gas sensor each for LPG and smoke detection, and an LDR. The purpose of the gas sensor aggregated in the sensor module would be to detect the presence of any gas in the kitchen area. The sensor module in the kitchen will be installed just above the stove area because this will be the most appropriate place as most of the gases are light and they tend to move upward. However, an additional sensor module specially for LPG detection will be installed just below the stove area as LPG is heavy and it tends to move downward. 

Washrooms are equipped with lights and exhaust fans that need to be automated. So, the washroom sensor module will contain a PIR sensor and a humidity sensor. The purpose of the humidity sensor will be to sense the moisture content present in the atmosphere. This report will be used to automate the exhaust fan as per the predefined algorithms. The position of this module would be anywhere on the roof top but must be close to the entrance to detect the presence of human precisely.

Now, there are some sensors that need to be installed separately and will not be aggregated in any of the above-defined sensor modules. This is because these sensors need to be kept in direct contact with the environment variables. One of the most important in our case is water flow measurement sensor and the other is water level detection sensor.

The first one is installed at the inlet and outlet of the water pipe and whenever there will be the difference in the flow rate, it will send the report to block the corresponding pipeline to prevent the leakage. However, the other one will be installed in the water tank to detect the level of water. As soon as the tank gets full, it will send the signal to switch off the water pump to prevent any wastage of water.

Now, a driver will be packaged in the firmware which will be installed in the HAS during the initial configuration. It will provide a software interface to the sensor units, enabling the home automation system to access hardware functions. The driver will communicate with the sensors and decode the generated signal to make it comprehensible for the home automation system.

Based upon the type of the sensors required for each room, and the position of installation of that unit, the hardware will be designed. The designed module of each appliance will be fabricated in-house or outsourced as per requirement to yield a sensor aggregator module.

<h3 class="section-head" id="wp2"><a href="#wp2">WP2 Plug and Play actuator development</a></h3>
<div class='wp-incharge'>Work Package Incharge: Satyam Kumar</div>

To introduce software based control, microcontroller based actuators modules are to be attached either in the power supply lines of the devices (fan and lighting system control) or must be directly attached to the device itself (Air Conditioner control).

<h4 class="subsection-head">WP2.1 Study of control methodology</h4>
The development of the actuator modules designed for each device to be automated in the smart home will be using plug and play methods so as to convert existing devices into smart ones. The actuators will operate and automate the appliances based on the commands received from the HAS.

<h4 class="subsection-head">WP2.2 Actuator circuit design</h4>

- Air Conditioner - The plug and play module of the air conditioner will be equipped with IR blasters. It will then receive the signal and relay this to the receiving end to automate the air conditioner accordingly.

- LED Lights - The use of pulse width modulated signals that drives a control switch (say MOSFET) to switch the LEDs accordingly thereby altering the intensity.

- Fans - Speed regulation of fans will be done using the combination of Diac and Triac to reduce the energy losses that were occurring by the use of conventional voltage controller.

Now the designed circuit of actuator modules is designed in such a way that there would be no need to interfere with the existing circuitry of the appliances with a number of iteration done, we will achieve the most desired place of installation of the actuator modules.

<h3 class="section-head" id="wp3"><a href="#wp3">WP3 Energy optimization algorithm formulation</a></h3>
<div class='wp-incharge'>Work Package Incharge: Swanav</div>

<h4 class="subsection-head">WP3.1 Study of decision inﬂuencing parameters</h4>

Household energy consumption data will be monitored using various energy meters around the house and used to prepare a dataset. This dataset will be used to study the parameters which are vital to energy usage and user comfort. These parameters can include factors like time of the day, outdoor temperature, day of the week etc. These factors will act as the input layer to the artificial neural network to be designed.

<h4 class="subsection-head">WP3.2 Design of a deep learning model</h4>

Based on the factors determined from the previous study, a deep reinforcement learning based neural network will be designed, and various output forms will be generated. These outputs will be such that they can send commands to the Home Automation Software which can execute them. The neural network will take its previous outputs as an input to reinforce learning, implying that the network will be self-evolving and provide greater efficiency over time.

<h3 class="section-head" id="wp4"><a href="#wp4">WP4 Home Automation Unit design</a></h3>
<div class='wp-incharge'>Work Package Incharge: Swanav</div>

<h4 class="subsection-head">WP4.1 Design of the software for the Home Automation System</h4>

All the sensor aggregator modules and the retroﬁt modules need a central hub for their communication and management. The HAS will receive the inputs from the sensors and give an optimized output to the modules after processing it using the aforementioned algorithms. The HAS will run atop it providing functionalities like adding new devices, removing devices, deﬁning rooms, adding sensor aggregator units and plug and play smart device conversion modules.
<h4 class="subsection-head">WP4.2 Development of a user interface to enable user interaction with the system</h4>

The developed home automation system will be largely autonomous, providing complete and optimal automation to major units around the household. But this system needs to interact with the inhabitants from time to time. The user may issue direct commands which contradict and override the optimized output of the HAS, or the system may need to relay alerts to the user. The developed interface needs to provide the users with an overview of the operations being carried out by the home automation system, display the energy usage of the users, provide the data collected by the sensors as well as give him an ability to control the appliances in any way that he chooses.

The users presently manage their house’s electrical system using switchboards which are very conveniently positioned in every room of the household. This experience is integral to the users and they should not have to re-learn everything from scratch when adopting a smarter lifestyle. To be able to manage the HAS inside the house, a touchscreen based software switchboard will be very convenient. The system will also be available to the users over the cloud enabling them to manage their homes from around the world.

As the two methods of accessing the devices are software based an internal API will first be developed, exposing all the relevant functionalities for the HAS for multiplatform applications to be developed upon. This will allow faster development and upgradation of applications as the core functionalities will not have to be coded again and again. After this, specific applications can be developed according to the device they will be hosted on.

The user experience (UX) needs to be consistent across all the platforms from wherever the user chooses to control the device so as to provide him a unified experience. The user interface also needs to be intuitive so that the user does not need a lot of time to get acquainted with it.
