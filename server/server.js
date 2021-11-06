const { Socket } = require('socket.io')

const app = require('express')()
const server = require('http').createServer(app)
const io = require('socket.io')(server,{
    cors:{
        origin:"*",
    }
})

io.on('connection', socket =>{
    console.log("connection successfully");
    socket.on('message',payload => {
        console.log("message resived on server: ",payload);
        io.emit('message',payload)
    })
})

server.listen(7000,()=>{
    console.log("server Started port : 7000");
})
