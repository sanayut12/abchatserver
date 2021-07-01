const app = require('express')()
const http = require('http').createServer(app)


app.get('/', (req, res) => {
    res.send("Node Server is running. Yay!!")
})

//Socket Logic
const socketio = require('socket.io')(http)

socketio.on("connection", (userSocket) => {
    userSocket.on("send_message", (data) => {
        console.log(data)
        userSocket.broadcast.emit("receive_message", data)
    })
})
var port = process.env.PORT | 3000
http.listen(port , ()=>{
    console.log(port)
})