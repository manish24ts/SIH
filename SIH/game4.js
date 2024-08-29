
const courtroomChatLog = document.getElementById("courtroom-chat-log");
const chatInput = document.getElementById("chat-input");
const sendButton = document.getElementById("send-button");
const courtroomUsersOnline = document.getElementById("courtroom-users-online");

// initialize socket.io
const socket = io();

// handle sending a message
sendButton.addEventListener("click", () => {
  const message = chatInput.value.trim();
  if (message !== "") {
    socket.emit("sendMessage", message);
    chatInput.value = "";
  }
});

// handle receiving a message
socket.on("receiveMessage", (message) => {
  const messageElement = document.createElement("div");
  messageElement.innerHTML = `<p><strong>${message.username}</strong>: ${message.text}</p>`;
  courtroomChatLog.appendChild(messageElement);
  courtroomChatLog.scrollTop = courtroomChatLog.scrollHeight;
});

// handle updating online users
socket.on("updateOnlineUsers", (users) => {
  courtroomUsersOnline.innerHTML = "";
  users.forEach((user) => {
    const userElement = document.createElement("div");
    userElement.className = "online-user";
    userElement.innerHTML = `<p>${user.username}</p>`;
    courtroomUsersOnline.appendChild(userElement);
  });
});

// handle connecting to the server
socket.on("connect", () => {
  console.log("Connected to the server!");
});

// handle disconnecting from the server
socket.on("disconnect", () => {
  console.log("Disconnected from the server!");
});
const express = require("express");
const app = express();
const server = require("http").createServer(app);
const io = require("socket.io")(server);

app.use(express.static("public"));

let onlineUsers = [];

io.on("connection", (socket) => {
  console.log("New connection!");

  // handle sending a message
  socket.on("sendMessage", (message) => {
    socket.broadcast.emit("receiveMessage", {
      username: socket.username,
      text: message,
    });
  });

  // handle updating online users
  socket.on("updateOnlineUsers", () => {
    onlineUsers.push({ username: socket.username });
    io.emit("updateOnlineUsers", onlineUsers);
  });

  // handle disconnecting from the server
  socket.on("disconnect", () =>   {
    onlineUsers = onlineUsers.filter((user) => user.username !== socket.username);
    io.emit("updateOnlineUsers", onlineUsers);
  });

  // handle setting the username
  socket.on("setUsername", (username) => {
    socket.username = username;
    onlineUsers.push({ username });
    io.emit("updateOnlineUsers", onlineUsers);
  });
});

server.listen(3000, () => {
  console.log("Server started on port 3000!");
});