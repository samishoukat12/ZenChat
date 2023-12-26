// Import necessary modules
import React, { useEffect } from 'react';
import io from 'socket.io-client';

// Create a socket connection to the server
const socket = io("http://localhost:3001");

// React component
function Message() {
    useEffect(() => {
        // Event listener for connection
        socket.on('connect', () => {
            console.log('Connected to server');
        });

        // Event listener for disconnection
        socket.on('disconnect', () => {
            console.log('Disconnected from server');
        });
 
        // Cleanup the socket connection when the component unmounts
        return () => {
            socket.disconnect();
        };
    }, []);

    return (
        <div>
            <h1>React App</h1>
        </div>
    );
}

export default Message;
