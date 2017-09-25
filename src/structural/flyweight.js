// Приспособленец — то, что будет закешировано.
// Типы чая здесь — приспособленцы.
var KarakTea = (function () {
    function KarakTea() {
    }
    return KarakTea;
}());
// Действует как фабрика и экономит чай
var TeaMaker = (function () {
    function TeaMaker() {
        this.availableTea = {};
    }
    TeaMaker.prototype.make = function (preference) {
        this.availableTea[preference] = this.availableTea[preference] || (new KarakTea());
        return this.availableTea[preference];
    };
    return TeaMaker;
}());
var TeaShop = (function () {
    function TeaShop(teaMaker) {
        this.teaMaker = teaMaker;
        this.orders = [];
    }
    TeaShop.prototype.takeOrder = function (teaType, table) {
        this.orders[table] = this.teaMaker.make(teaType);
    };
    TeaShop.prototype.serve = function () {
        this.orders.forEach(function (order, index) {
            console.log("\u0421\u0435\u0440\u0432\u0438\u0440\u043E\u0432\u043A\u0430 \u0447\u0430\u044F \u043D\u0430 \u0441\u0442\u043E\u043B \u2116" + index);
        });
    };
    return TeaShop;
}());
var teaMaker = new TeaMaker();
var shop = new TeaShop(teaMaker);
shop.takeOrder('меньше сахара', 1);
shop.takeOrder('больше молока', 2);
shop.takeOrder('без сахара', 5);
shop.serve();
// => Сервировка чая на стол №1
// => Сервировка чая на стол №2
// => Сервировка чая на стол №5 
