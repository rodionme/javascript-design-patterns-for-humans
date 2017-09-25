var AfricanLion = (function () {
    function AfricanLion() {
    }
    AfricanLion.prototype.roar = function () { };
    return AfricanLion;
}());
var AsianLion = (function () {
    function AsianLion() {
    }
    AsianLion.prototype.roar = function () { };
    return AsianLion;
}());
var Hunter = (function () {
    function Hunter() {
    }
    Hunter.prototype.hunt = function (lion) {
        // ... какой-то код
        lion.roar();
        // ... какой-то код
    };
    return Hunter;
}());
// Это нужно добавить
var WildDog = (function () {
    function WildDog() {
    }
    WildDog.prototype.bark = function () { };
    return WildDog;
}());
// Адаптер вокруг собаки сделает её совместимой с охотником
var WildDogAdapter = (function () {
    function WildDogAdapter(dog) {
        this.dog = dog;
    }
    WildDogAdapter.prototype.roar = function () {
        this.dog.bark();
    };
    return WildDogAdapter;
}());
var wildDog = new WildDog();
var wildDogAdapter = new WildDogAdapter(wildDog);
var hunter = new Hunter();
hunter.hunt(wildDogAdapter);
