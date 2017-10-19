const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io').listen(server);

const users = [];
const connections = [];
const messages = [];

server.listen(process.env.PORT || 3000);
console.log('The server is up and running');

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

io.sockets.on('connection', (socket) => {
  connections.push(socket);

  if(messages.length) {
    messages.forEach((message) => {
      socket.emit('new message', {message})
    })
  }

  socket.on('disconnect', () => {
    connections.splice(connections.indexOf(socket), 1);
    console.log(`The amount of connections is ${connections.length}`)
  });

  socket.on('send message', (data) => {
    io.sockets.emit('new message', { message: data });
    messages.push(data);
  });
});



