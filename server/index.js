const express = require('express')
const app = express()
const cors = require('cors')

const socket = require("socket.io")

const server = app.listen(1000, () => {
    console.log('server is working')
})

const io = socket(server, {
    cors: {
      origin: '*',
    }})

io.on('connection', (socket => {
    console.log("socket listening");
    socket.on('emitNumber', (data) => {
        console.log(data);
        io.emit('recievedNumber', data)
    })

    socket.on('emitRandom', () => {
        console.log("in random");
        io.emit('randomNumber', Math.random())
    })
}))
