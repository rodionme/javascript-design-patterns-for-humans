var Monkey = (function () {
    function Monkey() {
    }
    Monkey.prototype.shout = function () {
        console.log('Ooh oo aa aa!');
    };
    Monkey.prototype.accept = function (operation) {
        operation.visitMonkey(this);
    };
    return Monkey;
}());
var Lion = (function () {
    function Lion() {
    }
    Lion.prototype.roar = function () {
        console.log('Roaaar!');
    };
    Lion.prototype.accept = function (operation) {
        operation.visitLion(this);
    };
    return Lion;
}());
var Dolphin = (function () {
    function Dolphin() {
    }
    Dolphin.prototype.speak = function () {
        console.log('Tuut tuttu tuutt!');
    };
    Dolphin.prototype.accept = function (operation) {
        operation.visitDolphin(this);
    };
    return Dolphin;
}());
var Speak = (function () {
    function Speak() {
    }
    Speak.prototype.visitMonkey = function (monkey) {
        monkey.shout();
    };
    Speak.prototype.visitLion = function (lion) {
        lion.roar();
    };
    Speak.prototype.visitDolphin = function (dolphin) {
        dolphin.speak();
    };
    return Speak;
}());
var monkey = new Monkey();
var lion = new Lion();
var dolphin = new Dolphin();
var speak = new Speak();
monkey.accept(speak); // => Ooh oo aa aa!
lion.accept(speak); // => Roaaar!
dolphin.accept(speak); // => Tuut tutt tuutt!
var Jump = (function () {
    function Jump() {
    }
    Jump.prototype.visitMonkey = function (monkey) {
        console.log('Подпрыгнул на 6 метровое дерево!');
    };
    Jump.prototype.visitLion = function (lion) {
        console.log('Спрыгнул на землю с 1,5 метров!');
    };
    Jump.prototype.visitDolphin = function (dolphin) {
        console.log('"Походил" по воде немного и нырнул');
    };
    return Jump;
}());
var jump = new Jump();
monkey.accept(speak); // => Ooh oo aa aa!
monkey.accept(jump); // => Подпрыгнул на 6 метровое дерево!
lion.accept(speak); // => Roaaar!
lion.accept(jump); // => Спрыгнул на землю с 1,5 метров!
dolphin.accept(speak); // => Tuut tutt tuutt!
dolphin.accept(jump); // => "Походил" по воде немного и нырнул
