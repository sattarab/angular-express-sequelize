module.exports = function (socket){
    /* can add more socket functionality here */
    socket.emit('init', {
        app: 'seeding app'
    });
}