// Место посещения
interface Animal {
  accept(operation: AnimalOperation);
}

// Посетитель
interface AnimalOperation {
  visitMonkey(monkey: Monkey);
  visitLion(lion: Lion);
  visitDolphin(dolphin: Dolphin);
}

class Monkey implements Animal {
  shout(): void {
    console.log('Ooh oo aa aa!');
  }

  accept(operation: AnimalOperation): void {
    operation.visitMonkey(this);
  }
}

class Lion implements Animal {
  roar(): void {
    console.log('Roaaar!');
  }

  accept(operation: AnimalOperation): void {
    operation.visitLion(this);
  }
}

class Dolphin implements Animal {
  speak(): void {
    console.log('Tuut tuttu tuutt!');
  }

  accept(operation: AnimalOperation): void {
    operation.visitDolphin(this);
  }
}


class Speak implements AnimalOperation {
  visitMonkey(monkey: Monkey) {
    monkey.shout();
  }

  visitLion(lion: Lion) {
    lion.roar();
  }

  visitDolphin(dolphin: Dolphin) {
    dolphin.speak();
  }
}


const monkey = new Monkey();
const lion = new Lion();
const dolphin = new Dolphin();

const speak = new Speak();

monkey.accept(speak);    // => Ooh oo aa aa!
lion.accept(speak);      // => Roaaar!
dolphin.accept(speak);   // => Tuut tutt tuutt!


class Jump implements AnimalOperation {
  visitMonkey(monkey: Monkey) {
    console.log('Подпрыгнул на 6 метровое дерево!');
  }

  visitLion(lion: Lion) {
    console.log('Спрыгнул на землю с 1,5 метров!');
  }

  visitDolphin(dolphin: Dolphin) {
    console.log('"Походил" по воде немного и нырнул');
  }
}


const jump = new Jump();

monkey.accept(speak);    // => Ooh oo aa aa!
monkey.accept(jump);    // => Подпрыгнул на 6 метровое дерево!
lion.accept(speak);      // => Roaaar!
lion.accept(jump);      // => Спрыгнул на землю с 1,5 метров!
dolphin.accept(speak);   // => Tuut tutt tuutt!
dolphin.accept(jump);   // => "Походил" по воде немного и нырнул