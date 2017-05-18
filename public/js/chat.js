/**
 * Created by Shawn on 2017/5/17.
 */
var Chat = function (socket) {
    this.socket = socket;
};
Chat.prototype.sendMessage = function (room, text) {
    var message = {
        room: room,
        text: text
    }
    this.socket.emit('message', message);
};
Chat.prototype.processCommand = function (room) {
    this.socket.emit('join', {
        newRoom: room
    });
};


