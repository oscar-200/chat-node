const { Socket } = require("socket.io");


const socketController = (socket = new Socket(), io) => {
    
    socket.on('mandar-mensaje', (message) => {
        console.log(message);
        io.emit('nuevo-mensaje',{msg: message});
    });
}

module.exports = {
    socketController
}