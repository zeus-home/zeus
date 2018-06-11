import * as io from 'socket.io-client'
import { Fan } from './models/models'

const device = new Fan()
device.device_uid = process.argv[2]
device.friendly_name = process.argv[3]
device.room_id = process.argv[4]
device.speed = 0

console.log("Client connected")
const socket = io('http://:8000')

socket.on('connect', _ => {
    console.log("Connection established!")
    socket.emit('device-info', device)
})
socket.on('switch', data => {
    console.log(data?'Device On':'Device Off')
    device.state = data
});

socket.on('disconnect', () => {
    console.log('Disconnected from server')
})

socket.on('speed', data => {
    device.speed += data
    console.log(`Speed: ${device.speed}`)
});
