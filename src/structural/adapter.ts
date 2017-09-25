interface Lion {
  roar(): void;
}

class AfricanLion implements Lion {
  roar(): void {}
}

class AsianLion implements Lion {
  roar(): void {}
}


class Hunter {
  hunt(lion: Lion): void {
    // ... какой-то код
    lion.roar();
    // ... какой-то код
  }
}


// Это нужно добавить
class WildDog {
  bark(): void {}
}

// Адаптер вокруг собаки сделает её совместимой с охотником
class WildDogAdapter implements Lion {
  dog: WildDog;

  constructor(dog: WildDog) {
    this.dog = dog;
  }

  roar(): void {
    this.dog.bark();
  }
}


let wildDog = new WildDog();
let wildDogAdapter = new WildDogAdapter(wildDog);
let hunter = new Hunter();

hunter.hunt(wildDogAdapter);