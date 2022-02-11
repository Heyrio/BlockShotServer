const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const port = process.env.PORT || 8080;

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
 console.log("A user connected!")
  socket.on('send_msg', msg => {
    const {content} = msg
    console.log(msg, "from server.js")
    io.emit('send_msg', content);
  });

  socket.on('disconnect', () => {
    console.log("A user disconnected!")
		// remove the username from global usernames list
		// delete usernames[socket.username];
		// echo globally that this client has left
		//socket.broadcast.emit('updatechat', 'Chat Bot', `${socket.username} has left chat`);
	});

  socket.on('friend_req', (to_user, from_user, msg) => {
		//emits 'msg_user_handle', this updates the chat body on client-side
		// io.to(usernames[to_user]).emit('msg_user_handle', from_user, msg);
		//write the chat message to a txt file		
		// const wstream = fs.createWriteStream('chat_data.txt');		
		// wstream.write(msg);
		// wstream.write('\r\n');
		// wstream.end();
		
	});

});


http.listen(port, () => {
  console.log(`Socket.IO server running at http://localhost:${port}/`);
});