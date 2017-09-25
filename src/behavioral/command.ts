// Получатель
class Bulb {
  turnOn(): void {
    console.log('Лампочка зажглась!');
  }

  turnOff(): void {
    console.log('Темнота!');
  }
}


interface Command {
  execute(): void;
  undo(): void;
  redo(): void;
}

// Команда
class TurnOn implements Command {
  bulb: Bulb;

  constructor(bulb: Bulb) {
    this.bulb = bulb;
  }

  execute(): void {
    this.bulb.turnOn();
  }

  undo(): void {
    this.bulb.turnOff();
  }

  redo(): void {
    this.execute();
  }
}

class TurnOff implements Command {
  bulb: Bulb;

  constructor(bulb: Bulb) {
    this.bulb = bulb;
  }

  execute(): void {
    this.bulb.turnOff();
  }

  undo(): void {
    this.bulb.turnOn();
  }

  redo(): void {
    this.execute();
  }
}


// Вызывающий
class RemoteControl {
  submit(command: Command): void {
    command.execute();
  }
}


const bulb = new Bulb();

const turnOn = new TurnOn(bulb);
const turnOff = new TurnOff(bulb);

const remote = new RemoteControl();
remote.submit(turnOn);    // Лампочка зажглась!
remote.submit(turnOff);    // Темнота!