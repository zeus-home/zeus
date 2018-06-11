import uuid from 'device-uuid'
import * as io from 'socket.io-client'
import { MonitorClient } from './models/models'

const id = new uuid.DeviceUUID().get()
const clientInfo: MonitorClient = new MonitorClient(id)

const socket = io.connect('//:8000/')
socket.emit('client-info', clientInfo)

export function subscribe(cb: any) {
    socket.on('monitor-event', (payload:any)=> cb(null, payload))
    socket.emit('received', `received`)
}
