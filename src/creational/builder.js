var Burger = (function () {
    function Burger(builder) {
        this.size = builder.size;
        this.cheeze = builder.cheeze || false;
        this.pepperoni = builder.pepperoni || false;
        this.lettuce = builder.lettuce || false;
        this.tomato = builder.tomato || false;
    }
    return Burger;
}());
var BurgerBuilder = (function () {
    function BurgerBuilder(size) {
        this.size = size;
    }
    BurgerBuilder.prototype.addPepperoni = function () {
        this.pepperoni = true;
        return this;
    };
    BurgerBuilder.prototype.addLettuce = function () {
        this.lettuce = true;
        return this;
    };
    BurgerBuilder.prototype.addCheeze = function () {
        this.cheeze = true;
        return this;
    };
    BurgerBuilder.prototype.addTomato = function () {
        this.tomato = true;
        return this;
    };
    BurgerBuilder.prototype.build = function () {
        return new Burger(this);
    };
    return BurgerBuilder;
}());
var burger = (new BurgerBuilder(14))
    .addPepperoni()
    .addLettuce()
    .addTomato()
    .build();
