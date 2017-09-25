interface Coffee {
  getCost(): number;
  getDescription(): string;
}

class SimpleCoffee implements Coffee {
  getCost(): number {
    return 10;
  }

  getDescription(): string {
    return 'Simple coffee';
  }
}


class MilkCoffee implements Coffee {
  coffee: Coffee;

  constructor(coffee: Coffee) {
    this.coffee = coffee;
  }

  getCost(): number {
    return this.coffee.getCost() + 2;
  }

  getDescription(): string {
    return `${this.coffee.getDescription()}, milk`;
  }
}

class WhipCoffee implements Coffee {
  coffee: Coffee;

  constructor(coffee: Coffee) {
    this.coffee = coffee;
  }

  getCost(): number {
    return this.coffee.getCost() + 5;
  }

  getDescription(): string {
    return `${this.coffee.getDescription()}, whip`;
  }
}

class VanillaCoffee implements Coffee {
  coffee: Coffee;

  constructor(coffee: Coffee) {
    this.coffee = coffee;
  }

  getCost(): number {
    return this.coffee.getCost() + 3;
  }

  getDescription(): string {
    return `${this.coffee.getDescription()}, vanilla`;
  }
}


let someCoffee;

someCoffee = new SimpleCoffee();
console.log(someCoffee.getCost());    // => 10
console.log(someCoffee.getDescription());    // => Simple Coffee

someCoffee = new MilkCoffee(someCoffee);
console.log(someCoffee.getCost());    // => 12
console.log(someCoffee.getDescription());    // => Simple Coffee, milk

someCoffee = new WhipCoffee(someCoffee);
console.log(someCoffee.getCost());    // => 17
console.log(someCoffee.getDescription());    // => Simple Coffee, milk, whip

someCoffee = new VanillaCoffee(someCoffee);
console.log(someCoffee.getCost());    // => 20
console.log(someCoffee.getDescription());    // => Simple Coffee, milk, whip, vanilla