import { Client, MonitorClient, Device, Fan } from './models/models'
import * as SocketIO from 'socket.io'

const io = SocketIO() 

export const monitorSockets: SocketIO.Socket[] = []

io.on('connection', socket => {
    
    console.log('Device connected!')

    socket.once('client-info', (client:Client) => {
        console.log(client)
        if(client.isMonitor) {
            monitorSockets.push(socket)
        }
    });

    socket.on('disconnect', () => {
        console.log('Device Disconnected')
    })
})

io.listen(8000)
