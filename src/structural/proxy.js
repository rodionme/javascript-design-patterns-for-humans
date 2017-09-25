var LabDoor = (function () {
    function LabDoor() {
    }
    LabDoor.prototype.open = function () {
        console.log('Открытие лабораторной двери');
    };
    LabDoor.prototype.close = function () {
        console.log('Закрытие лабораторной двери');
    };
    return LabDoor;
}());
var Security = (function () {
    function Security(door) {
        this.door = door;
    }
    Security.prototype.open = function (password) {
        if (this.authenticate(password)) {
            this.door.open();
        }
        else {
            console.log('Это невозможно.');
        }
    };
    Security.prototype.authenticate = function (password) {
        return password === '$ecr@t';
    };
    Security.prototype.close = function () {
        this.door.close();
    };
    return Security;
}());
var door = new Security(new LabDoor());
door.open('invalid'); // => Это невозможно.
door.open('$ecr@t'); // => Открытие лабораторной двери
door.close(); // => Закрытие лабораторной двери
