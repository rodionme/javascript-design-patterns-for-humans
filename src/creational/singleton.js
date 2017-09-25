var president = (function () {
    var _presidentsPrivateInformation = 'Super private';
    var _name = 'Turd Sandwich';
    var getName = function () { return _name; };
    return {
        getName: getName
    };
}());
president.getName(); // => 'Turd Sandwich'
president._name; // => undefined
president._presidentsPrivateInformation; // => undefined
