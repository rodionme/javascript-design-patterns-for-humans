var WoodenDoor = (function () {
    function WoodenDoor() {
    }
    WoodenDoor.prototype.getDescription = function () {
        console.log('Я деревянная дверь');
    };
    return WoodenDoor;
}());
var IronDoor = (function () {
    function IronDoor() {
    }
    IronDoor.prototype.getDescription = function () {
        console.log('Я железная дверь');
    };
    return IronDoor;
}());
var Welder = (function () {
    function Welder() {
    }
    Welder.prototype.getDescription = function () {
        console.log('Я могу работать только с деревянными дверьми');
    };
    return Welder;
}());
var Carpenter = (function () {
    function Carpenter() {
    }
    Carpenter.prototype.getDescription = function () {
        console.log('Я могу работать только с железными дверьми');
    };
    return Carpenter;
}());
// Фабрика деревянных дверей возвращает деревянную дверь и плотника
var WoodenDoorFactory = (function () {
    function WoodenDoorFactory() {
    }
    WoodenDoorFactory.prototype.makeDoor = function () {
        return new WoodenDoor();
    };
    WoodenDoorFactory.prototype.makeFittingExpert = function () {
        return new Carpenter();
    };
    return WoodenDoorFactory;
}());
// Фабрика железных дверей возвращает железную дверь и сварщика
var IronDoorFactory = (function () {
    function IronDoorFactory() {
    }
    IronDoorFactory.prototype.makeDoor = function () {
        return new IronDoor();
    };
    IronDoorFactory.prototype.makeFittingExpert = function () {
        return new Welder();
    };
    return IronDoorFactory;
}());
var woodenFactory = new WoodenDoorFactory();
var door = woodenFactory.makeDoor();
var expert = woodenFactory.makeFittingExpert();
door.getDescription(); // => Я деревянная дверь
expert.getDescription(); // => Я могу работать только с деревянными дверьми
// Тоже самое для фабрики железных дверей
var ironFactory = new IronDoorFactory();
door = ironFactory.makeDoor();
expert = ironFactory.makeFittingExpert();
door.getDescription(); // => Я железная дверь
expert.getDescription(); // => Я могу работать только с железными дверьми
