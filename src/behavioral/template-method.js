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
var Builder = (function () {
    function Builder() {
    }
    // Шаблонный метод
    Builder.prototype.build = function () {
        this.test();
        this.lint();
        this.assemble();
        this.deploy();
    };
    return Builder;
}());
var AndroidBuilder = (function (_super) {
    __extends(AndroidBuilder, _super);
    function AndroidBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AndroidBuilder.prototype.test = function () {
        console.log('Выполнение Android-тестов');
    };
    AndroidBuilder.prototype.lint = function () {
        console.log('Линтинг Android-кода');
    };
    AndroidBuilder.prototype.assemble = function () {
        console.log('Создание Android-сборки');
    };
    AndroidBuilder.prototype.deploy = function () {
        console.log('Развёртывание Android-сборки на сервере');
    };
    return AndroidBuilder;
}(Builder));
var IosBuilder = (function (_super) {
    __extends(IosBuilder, _super);
    function IosBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    IosBuilder.prototype.test = function () {
        console.log('Выполнение iOS-тестов');
    };
    IosBuilder.prototype.lint = function () {
        console.log('Линтинг iOS-кода');
    };
    IosBuilder.prototype.assemble = function () {
        console.log('Создание iOS-сборки');
    };
    IosBuilder.prototype.deploy = function () {
        console.log('Развёртывание iOS-сборки на сервере');
    };
    return IosBuilder;
}(Builder));
var androidBuilder = new AndroidBuilder();
androidBuilder.build();
// => Выполнение Android-тестов
// => Линтинг Android-кода
// => Создание Android-сборки
// => Развёртывание Android-сборки на сервере
var iosBuilder = new IosBuilder();
iosBuilder.build();
// => Выполнение iOS-тестов
// => Линтинг iOS-кода
// => Создание iOS-сборки
// => Развёртывание iOS-сборки на сервере 
