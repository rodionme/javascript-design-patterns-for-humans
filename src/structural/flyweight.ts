// Приспособленец — то, что будет закешировано.
// Типы чая здесь — приспособленцы.
class KarakTea {}

// Действует как фабрика и экономит чай
class TeaMaker {
  availableTea: object;

  constructor() {
    this.availableTea = {};
  }

  make(preference: string): KarakTea {
    this.availableTea[preference] = this.availableTea[preference] || (new KarakTea());

    return this.availableTea[preference];
  }
}


class TeaShop {
  teaMaker: TeaMaker;
  orders: object[];

  constructor(teaMaker: TeaMaker) {
    this.teaMaker = teaMaker;
    this.orders = [];
  }

  takeOrder(teaType: string, table: number): void {
    this.orders[table] = this.teaMaker.make(teaType);
  }

  serve(): void {
    this.orders.forEach((order, index) => {
      console.log(`Сервировка чая на стол №${index}`);
    });
  }
}


const teaMaker = new TeaMaker();
const shop = new TeaShop(teaMaker);

shop.takeOrder('меньше сахара', 1);
shop.takeOrder('больше молока', 2);
shop.takeOrder('без сахара', 5);

shop.serve();
// => Сервировка чая на стол №1
// => Сервировка чая на стол №2
// => Сервировка чая на стол №5