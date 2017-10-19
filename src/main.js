import io from 'socket.io';
import 'bootstrap';

const socket = io.connect();
const messageForm = document.getElementById('messageForm');
const message = document.getElementById('message');
const chat = document.getElementById('chat');

messageForm.onsubmit = (event) => {
  event.preventDefault();
  socket.emit('send message', message.value);
  message.value = '';
}

socket.on('new message', (data) => {
  const messageContainer = document.createElement('div');

  messageContainer.classList.add('well');
  messageContainer.innerText = data.message;

  chat.appendChild(messageContainer);
})