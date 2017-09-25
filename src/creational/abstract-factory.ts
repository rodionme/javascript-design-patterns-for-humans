interface Door {
  getDescription(): void;
}

class WoodenDoor implements Door {
  getDescription(): void {
    console.log('Я деревянная дверь');
  }
}

class IronDoor implements Door {
  getDescription(): void {
    console.log('Я железная дверь');
  }
}


interface DoorFittingExpert {
  getDescription(): void;
}

class Welder implements DoorFittingExpert {
  getDescription(): void {
    console.log('Я могу работать только с деревянными дверьми');
  }
}

class Carpenter implements DoorFittingExpert {
  getDescription(): void {
    console.log('Я могу работать только с железными дверьми');
  }
}


interface DoorFactory {
  makeDoor(): Door;
  makeFittingExpert(): DoorFittingExpert;
}

// Фабрика деревянных дверей возвращает деревянную дверь и плотника
class WoodenDoorFactory implements DoorFactory {
  makeDoor(): Door {
    return new WoodenDoor();
  }

  makeFittingExpert(): DoorFittingExpert {
    return new Carpenter();
  }
}

// Фабрика железных дверей возвращает железную дверь и сварщика
class IronDoorFactory implements DoorFactory {
  makeDoor(): Door {
    return new IronDoor();
  }

  makeFittingExpert(): DoorFittingExpert {
    return new Welder();
  }
}


let woodenFactory = new WoodenDoorFactory();

let door = woodenFactory.makeDoor();
let expert = woodenFactory.makeFittingExpert();

door.getDescription();    // => Я деревянная дверь
expert.getDescription();    // => Я могу работать только с деревянными дверьми

// Тоже самое для фабрики железных дверей
let ironFactory = new IronDoorFactory();

door = ironFactory.makeDoor();
expert = ironFactory.makeFittingExpert();

door.getDescription();    // => Я железная дверь
expert.getDescription();    // => Я могу работать только с железными дверьми