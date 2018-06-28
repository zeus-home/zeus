import { connect } from 'mqtt'

const client = connect('mqtt://localhost:61616');

// client.on('connect', () => {
//     console.log('Connected')
//     client.subscribe('foo.bar')
//     console.log('Subscribed')
// })

// client.on('message', (topic, message) => {
//     console.log(`Received: `, topic, message)
// })
