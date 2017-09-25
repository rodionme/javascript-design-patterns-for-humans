class Burger {
  size: number;
  cheeze: boolean;
  pepperoni: boolean;
  lettuce: boolean;
  tomato: boolean;

  constructor(builder) {
    this.size = builder.size;
    this.cheeze = builder.cheeze || false;
    this.pepperoni = builder.pepperoni || false;
    this.lettuce = builder.lettuce || false;
    this.tomato = builder.tomato || false;
  }
}


class BurgerBuilder {
  size: number;
  cheeze: boolean;
  pepperoni: boolean;
  lettuce: boolean;
  tomato: boolean;

  constructor(size) {
    this.size = size;
  }

  addPepperoni(): BurgerBuilder {
    this.pepperoni = true;

    return this;
  }

  addLettuce(): BurgerBuilder {
    this.lettuce = true;

    return this;
  }

  addCheeze(): BurgerBuilder {
    this.cheeze = true;

    return this;
  }

  addTomato(): BurgerBuilder {
    this.tomato = true;

    return this;
  }

  build(): Burger {
    return new Burger(this);
  }
}


const burger = (new BurgerBuilder(14))
  .addPepperoni()
  .addLettuce()
  .addTomato()
  .build();