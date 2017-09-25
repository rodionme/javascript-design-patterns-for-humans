var WoodenDoor = (function () {
    function WoodenDoor(width, height) {
        this.width = width;
        this.height = height;
    }
    WoodenDoor.prototype.getWidth = function () {
        return this.width;
    };
    WoodenDoor.prototype.getHeight = function () {
        return this.height;
    };
    return WoodenDoor;
}());
var DoorFactory = {
    makeDoor: function (width, height) { return new WoodenDoor(width, height); }
};
var door = DoorFactory.makeDoor(100, 200);
console.log('Width:', door.getWidth()); // => Width: 100
console.log('Height:', door.getHeight()); // => Height: 200
