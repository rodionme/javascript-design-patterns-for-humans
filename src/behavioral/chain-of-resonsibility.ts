abstract class Account {
  successor: Account;
  balance: number;

  setNext(account: Account): void {
    this.successor = account;
  }

  pay(amountToPay: number): void {
    if (this.canPay(amountToPay)) {
      console.log(`Оплачено ${amountToPay} с помощью ${this.name}`);
    } else if (this.successor) {
      console.log(`Нельзя оплатить с помощью ${this.name}. Обрабатываю...`);
      this.successor.pay(amountToPay);
    } else {
      console.log('Ни один из аккаунтов не имеет достаточного баланса');
    }
  }

  canPay(amount: number): boolean {
    return this.balance >= amount;
  }
}

class Bank extends Account {
  constructor(balance: number) {
    super();
    this.name = 'Bank';
    this.balance = balance;
  }
}

class Paypal extends Account {
  constructor(balance: number) {
    super();
    this.name = 'Paypal';
    this.balance = balance;
  }
}

class Bitcoin extends Account {
  constructor(balance: number) {
    super();
    this.name = 'Bitcoin';
    this.balance = balance;
  }
}


// Сделаем такую цепочку
//      bank.paypal.bitcoin
//
// Приоритет у банка
//      Если банк не может оплатить, переходим к Paypal
//      Если Paypal не может, переходим к Bitcoin
const bank = new Bank(100);          // У банка баланс 100
const paypal = new Paypal(200);      // У Paypal баланс 200
const bitcoin = new Bitcoin(300);    // У Bitcoin баланс 300

bank.setNext(paypal);
paypal.setNext(bitcoin);

// Начнём с банка
bank.pay(259);

// Выходной вид
// ==============
// Нельзя оплатить с помощью Bank. Обрабатываю...
// Нельзя оплатить с помощью Paypal. Обрабатываю...
// Оплачено 259 с помощью Bitcoin