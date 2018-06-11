import { Device } from './models/models'
import * as SocketIO from 'socket.io'
import { monitorSockets } from './monitor'

const readline = require('readline');
readline.emitKeypressEvents(process.stdin);
process.stdin.setRawMode(true);

const state = {
    devices: [] as Device[]
};

process.stdin.on('keypress', function (chunk, key) {
  process.stdout.write('Get Chunk: ' + chunk + '\n');
  monitorSockets.forEach(socket => {
    socket.emit('monitor-event', state);
  })
  if (key && key.ctrl && key.name == 'c') process.exit();
});
