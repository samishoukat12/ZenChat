const express = require("express");
const cors = require('cors');
const http = require('http');
const socketIO = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIO(server, {
    cors: {
        origin: "http://localhost:3000"
    }
});

const PORT = 3001;

app.use(cors());

io.on('connection', (socket) => {
    console.log(`⚡: ${socket.id} user just connected!`);
    socket.on('disconnect', () => {
        console.log('🔥: A user disconnected');
    });
});

app.get("/", (req, res) => {
    res.send("server is working");
});

server.listen(PORT, () => {
    console.log(`Server is working on port http://localhost:${PORT}`);
});
