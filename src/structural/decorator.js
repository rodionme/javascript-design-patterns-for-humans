var SimpleCoffee = (function () {
    function SimpleCoffee() {
    }
    SimpleCoffee.prototype.getCost = function () {
        return 10;
    };
    SimpleCoffee.prototype.getDescription = function () {
        return 'Simple coffee';
    };
    return SimpleCoffee;
}());
var MilkCoffee = (function () {
    function MilkCoffee(coffee) {
        this.coffee = coffee;
    }
    MilkCoffee.prototype.getCost = function () {
        return this.coffee.getCost() + 2;
    };
    MilkCoffee.prototype.getDescription = function () {
        return this.coffee.getDescription() + ", milk";
    };
    return MilkCoffee;
}());
var WhipCoffee = (function () {
    function WhipCoffee(coffee) {
        this.coffee = coffee;
    }
    WhipCoffee.prototype.getCost = function () {
        return this.coffee.getCost() + 5;
    };
    WhipCoffee.prototype.getDescription = function () {
        return this.coffee.getDescription() + ", whip";
    };
    return WhipCoffee;
}());
var VanillaCoffee = (function () {
    function VanillaCoffee(coffee) {
        this.coffee = coffee;
    }
    VanillaCoffee.prototype.getCost = function () {
        return this.coffee.getCost() + 3;
    };
    VanillaCoffee.prototype.getDescription = function () {
        return this.coffee.getDescription() + ", vanilla";
    };
    return VanillaCoffee;
}());
var someCoffee;
someCoffee = new SimpleCoffee();
console.log(someCoffee.getCost()); // => 10
console.log(someCoffee.getDescription()); // => Simple Coffee
someCoffee = new MilkCoffee(someCoffee);
console.log(someCoffee.getCost()); // => 12
console.log(someCoffee.getDescription()); // => Simple Coffee, milk
someCoffee = new WhipCoffee(someCoffee);
console.log(someCoffee.getCost()); // => 17
console.log(someCoffee.getDescription()); // => Simple Coffee, milk, whip
someCoffee = new VanillaCoffee(someCoffee);
console.log(someCoffee.getCost()); // => 20
console.log(someCoffee.getDescription()); // => Simple Coffee, milk, whip, vanilla
