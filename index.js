const express=require('express');
const app=express();
const http=require('http');
const server=http.createServer(app);
const {Server}=require('socket.io');
const cors=require('cors');
app.use(cors());
const io=new Server(server,{
    cors:{
        origin:"http://localhost:3000",
        methods:["GET","POST"]
    }
})



    io.on("connection", (socket) => {
       socket.on('send_message',(message)=>{
        socket.broadcast.emit('receive_message',message);
    })

    });

server.listen(3001,()=>{
    console.log("server is running");
})