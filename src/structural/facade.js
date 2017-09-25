var Computer = (function () {
    function Computer() {
    }
    Computer.prototype.getElectricShock = function () {
        console.log('Ой!');
    };
    Computer.prototype.makeSound = function () {
        console.log('Бип-бип!');
    };
    Computer.prototype.showLoadingScreen = function () {
        console.log('Загрузка..');
    };
    Computer.prototype.bam = function () {
        console.log('Готов к использованию!');
    };
    Computer.prototype.closeEverything = function () {
        console.log('Бап-бап-бап-базззз!');
    };
    Computer.prototype.sooth = function () {
        console.log('Ззззз');
    };
    Computer.prototype.pullCurrent = function () {
        console.log('Хааа!');
    };
    return Computer;
}());
var ComputerFacade = (function () {
    function ComputerFacade(computer) {
        this.computer = computer;
    }
    ComputerFacade.prototype.turnOn = function () {
        this.computer.getElectricShock();
        this.computer.makeSound();
        this.computer.showLoadingScreen();
        this.computer.bam();
    };
    ComputerFacade.prototype.turnOff = function () {
        this.computer.closeEverything();
        this.computer.pullCurrent();
        this.computer.sooth();
    };
    return ComputerFacade;
}());
var computer = new ComputerFacade(new Computer());
computer.turnOn(); // => Ouch! Beep beep! Loading.. Ready to be used!
computer.turnOff(); // => Bup bup buzzz! Haah! Zzzzz
