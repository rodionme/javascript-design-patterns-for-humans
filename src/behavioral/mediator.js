// Посредник
var ChatRoom = (function () {
    function ChatRoom() {
    }
    ChatRoom.prototype.showMessage = function (user, message) {
        var time = new Date();
        var sender = user.getName();
        console.log(time + " [" + sender + "]: " + message);
    };
    return ChatRoom;
}());
var User = (function () {
    function User(name, chatMediator) {
        this.name = name;
        this.chatMediator = chatMediator;
    }
    User.prototype.getName = function () {
        return this.name;
    };
    User.prototype.send = function (message) {
        this.chatMediator.showMessage(this, message);
    };
    return User;
}());
var mediator = new ChatRoom();
var john = new User('John', mediator);
var jane = new User('Jane', mediator);
john.send('Hi there!'); // => Feb 14, 10:58 [John]: Hi there!
jane.send('Hey!'); // => Feb 14, 10:58 [Jane]: Hey!
