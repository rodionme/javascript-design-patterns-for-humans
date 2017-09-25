var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Account = (function () {
    function Account() {
    }
    Account.prototype.setNext = function (account) {
        this.successor = account;
    };
    Account.prototype.pay = function (amountToPay) {
        if (this.canPay(amountToPay)) {
            console.log("\u041E\u043F\u043B\u0430\u0447\u0435\u043D\u043E " + amountToPay + " \u0441 \u043F\u043E\u043C\u043E\u0449\u044C\u044E " + this.name);
        }
        else if (this.successor) {
            console.log("\u041D\u0435\u043B\u044C\u0437\u044F \u043E\u043F\u043B\u0430\u0442\u0438\u0442\u044C \u0441 \u043F\u043E\u043C\u043E\u0449\u044C\u044E " + this.name + ". \u041E\u0431\u0440\u0430\u0431\u0430\u0442\u044B\u0432\u0430\u044E...");
            this.successor.pay(amountToPay);
        }
        else {
            console.log('Ни один из аккаунтов не имеет достаточного баланса');
        }
    };
    Account.prototype.canPay = function (amount) {
        return this.balance >= amount;
    };
    return Account;
}());
var Bank = (function (_super) {
    __extends(Bank, _super);
    function Bank(balance) {
        var _this = _super.call(this) || this;
        _this.name = 'Bank';
        _this.balance = balance;
        return _this;
    }
    return Bank;
}(Account));
var Paypal = (function (_super) {
    __extends(Paypal, _super);
    function Paypal(balance) {
        var _this = _super.call(this) || this;
        _this.name = 'Paypal';
        _this.balance = balance;
        return _this;
    }
    return Paypal;
}(Account));
var Bitcoin = (function (_super) {
    __extends(Bitcoin, _super);
    function Bitcoin(balance) {
        var _this = _super.call(this) || this;
        _this.name = 'Bitcoin';
        _this.balance = balance;
        return _this;
    }
    return Bitcoin;
}(Account));
// Сделаем такую цепочку
//      bank.paypal.bitcoin
//
// Приоритет у банка
//      Если банк не может оплатить, переходим к Paypal
//      Если Paypal не может, переходим к Bitcoin
var bank = new Bank(100); // У банка баланс 100
var paypal = new Paypal(200); // У Paypal баланс 200
var bitcoin = new Bitcoin(300); // У Bitcoin баланс 300
bank.setNext(paypal);
paypal.setNext(bitcoin);
// Начнём с банка
bank.pay(259);
// Выходной вид
// ==============
// Нельзя оплатить с помощью Bank. Обрабатываю...
// Нельзя оплатить с помощью Paypal. Обрабатываю...
// Оплачено 259 с помощью Bitcoin 
