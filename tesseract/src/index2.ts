import { Device } from './models/models'
import * as SocketIO from 'socket.io'

const io = SocketIO() 

io.on('connection', socket => {
    console.log('Device connected!')
    socket.once('client-info', (device)=> {
        console.log('Device info', device)
    })
    
    socket.on('disconnect', () => {
        console.log('Device Disconnected')
    })
})

io.listen(8000)
console.log('Server started.')