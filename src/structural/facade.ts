class Computer {
  getElectricShock(): void {
    console.log('Ой!');
  }

  makeSound(): void {
    console.log('Бип-бип!');
  }

  showLoadingScreen(): void {
    console.log('Загрузка..');
  }

  bam(): void {
    console.log('Готов к использованию!');
  }

  closeEverything(): void {
    console.log('Бап-бап-бап-базззз!');
  }

  sooth(): void {
    console.log('Ззззз');
  }

  pullCurrent(): void {
    console.log('Хааа!');
  }
}


class ComputerFacade {
  computer: Computer;

  constructor(computer: Computer) {
    this.computer = computer;
  }

  turnOn(): void {
    this.computer.getElectricShock();
    this.computer.makeSound();
    this.computer.showLoadingScreen();
    this.computer.bam();
  }

  turnOff(): void {
    this.computer.closeEverything();
    this.computer.pullCurrent();
    this.computer.sooth();
  }
}


const computer = new ComputerFacade(new Computer());

computer.turnOn();    // => Ouch! Beep beep! Loading.. Ready to be used!
computer.turnOff();    // => Bup bup buzzz! Haah! Zzzzz