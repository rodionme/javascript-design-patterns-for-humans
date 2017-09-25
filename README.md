![Design Patterns For Humans](./cover.png)

🚀 Введение
=================

Шаблоны проектирования — это **способ решения периодически возникающих проблем**. Точнее, это руководства по решению 
конкретных проблем. Это не классы, пакеты или библиотеки, которые вы можете вставить в своё приложение и ожидать 
волшебства.

Как сказано в Википедии:

> В программной инженерии шаблон проектирования приложений — это многократно применяемое решение регулярно возникающей 
проблемы в рамках определённого контекста архитектуры приложения. Шаблон — это не законченное архитектурное решение, 
которое можно напрямую преобразовать в исходный или машинный код. Это описание подхода к решению проблемы, который можно 
применять в разных ситуациях.

⚠️ Будьте осторожны
-----------------
- Шаблоны проектирования — не «серебряная пуля».
- Не пытайтесь внедрять их принудительно, последствия могут быть негативными. Помните, что шаблоны — это способы 
**решения**, а не **поиска** проблем. Так что не перемудрите.
- Если применять их правильно и в нужных местах, они могут оказаться спасением. В противном случае у вас будет ещё больше 
проблем.


## 🐢 Прежде, чем вы начнете

- Все шаблоны проектирования описаны в [ES6](https://github.com/lukehoban/es6features) — новой версии Javascript и 
[TypeScript](https://www.typescriptlang.org).

Виды шаблонов проектирования
-----------------

* [Порождающие (Creational)](#creational-design-patterns)
* [Структурные (Structural)](#structural-design-patterns)
* [Поведенческие (Behavioral)](#behavioral-design-patterns)


Порождающие (Creational) шаблоны проектирования
==========================

Вкратце
> Порождающие шаблоны описывают создание (instantiate) объекта или группы связанных объектов.

Википедия
> В программной инженерии порождающими называют шаблоны, которые используют механизмы создания объектов, чтобы создавать 
объекты подходящим для данной ситуации способом. Базовый способ создания может привести к проблемам в архитектуре или к 
её усложнению. Порождающие шаблоны пытаются решать эти проблемы, управляя способом создания объектов.
 
 * [Простая фабрика (Simple Factory)](#-simple-factory)
 * [Фабричный метод (Factory Method)](#-factory-method)
 * [Абстрактная фабрика (Abstract Factory)](#-abstract-factory)
 * [Строитель (Builder)](#-builder)
 * [Одиночка (Singleton)](#-singleton)
 
🏠 Простая фабрика (Simple Factory)
--------------
Аналогия
> Допустим, вы строите дом и вам нужны двери. Будет бардак, если каждый раз, когда вам требуется дверь, вы станете 
вооружаться инструментами и делать её на стройплощадке. Вместо этого вы закажете двери на фабрике.

Вкратце
> Простая фабрика просто генерирует экземпляр для клиента без предоставления какой-либо логики экземпляра.

Википедия
> В объектно ориентированном программировании фабрикой называется объект, создающий другие объекты. Формально фабрика — 
это функция или метод, возвращающая объекты разных прототипов или классов из вызова какого-то метода, который считается 
новым.

**Пример**

Для начала нам нужен интерфейс двери и его реализация.

```ts
interface Door {
  getWidth(): number;

  getHeight(): number;
}

class WoodenDoor implements Door {
  width: number;
  height: number;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }

  getWidth(): number {
    return this.width;
  }

  getHeight(): number {
    return this.height;
  }
}
```

Теперь соорудим фабрику дверей, которая создаёт и возвращает нам двери.

```ts
const DoorFactory = {
  makeDoor: (width: number, height: number) => new WoodenDoor(width, height)
};
```

Использование:

```ts
const door = DoorFactory.makeDoor(100, 200);

console.log('Width:', door.getWidth());   // => Width: 100
console.log('Height:', door.getHeight());   // => Height: 200
```

**Когда использовать?**

Когда создание объекта подразумевает какую-то логику, а не просто несколько присваиваний, то имеет смысл делегировать 
задачу выделенной фабрике, а не повторять повсюду один и тот же код.

🏭 Фабричный метод (Factory Method)
--------------

Аналогия
> Одна кадровичка не в силах провести собеседования со всеми кандидатами на все должности. В зависимости от вакансии она 
может делегировать разные этапы собеседований разным сотрудникам. 

Вкратце
> Это способ делегирования логики создания объектов (instantiation logic) дочерним классам.

Википедия
> В классо-ориентированном программировании (class-based programming) фабричным методом называют порождающий шаблон 
проектирования, использующий генерирующие методы (factory method) для решения проблемы создания объектов без указания 
для них конкретных классов. Объекты создаются посредством вызова не конструктора, а генерирующего метода, определённого 
в интерфейсе и реализованного дочерними классами либо реализованного в базовом классе и, опционально, переопределённого 
(overridden) производными классами (derived classes).
 
 **Пример**
 
Сначала создадим интерфейс сотрудника, проводящего собеседование, и некоторые реализации для него.

```ts
interface Interviewer {
  askQuestions(): void;
}

class Developer implements Interviewer {
  askQuestions(): void {
    console.log('Спрашивает о шаблонах проектирования.');
  }
}

class CommunityExecutive implements Interviewer {
  askQuestions(): void {
    console.log('Спрашивает о создании сообщества.');
  }
}
```

Теперь создадим кадровичку `HiringManager`

```ts
abstract class HiringManager {
  abstract makeInterviewer(): Interviewer;

  takeInterview(): void {
    const interviewer = this.makeInterviewer();

    interviewer.askQuestions();
  }
}
```

Любой дочерний класс может расширять его и предоставлять нужного собеседующего:

```ts
class DevelopmentManager extends HiringManager {
  makeInterviewer(): Developer {
    return new Developer();
  }
}

class MarketingManager extends HiringManager {
  makeInterviewer(): CommunityExecutive {
    return new CommunityExecutive();
  }
}
```

Использование:

```ts
const devManager = new DevelopmentManager();

devManager.takeInterview(); // => Спрашивает о шаблонах проектирования.


const marketingManager = new MarketingManager();

marketingManager.takeInterview(); // => Спрашивает о создании сообщества.
```

**Когда использовать?**

Этот шаблон полезен для каких-то общих обработок в классе, но требуемые подклассы динамически определяются в ходе 
выполнения (runtime). То есть когда клиент не знает, какой именно подкласс может ему понадобиться.

🔨 Абстрактная фабрика (Abstract Factory)
----------------

Аналогия
> Вернёмся к примеру с дверями из «Простой фабрики». В зависимости от своих потребностей вы можете купить деревянную 
дверь в одном магазине, стальную — в другом, пластиковую — в третьем. Для монтажа вам понадобятся разные специалисты: 
деревянной двери нужен плотник, стальной — сварщик, пластиковой — спец по ПВХ-профилям.

Вкратце
> Это фабрика фабрик. То есть фабрика, группирующая индивидуальные, но взаимосвязанные/взаимозависимые фабрики без 
указания для них конкретных классов. 
  
Википедия
> Шаблон «Абстрактная фабрика» описывает способ инкапсулирования группы индивидуальных фабрик, объединённых некой темой, 
без указания для них конкретных классов.

**Пример**

Создадим интерфейс `Door` и несколько реализаций для него.

```ts
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
```

Теперь нам нужны специалисты по установке каждого вида дверей.

```ts
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
```

Мы получили абстрактную фабрику, которая позволяет создавать семейства объектов или взаимосвязанные объекты. То есть 
фабрика деревянных дверей создаст деревянную дверь и человека для её монтажа, фабрика стальных дверей — стальную дверь 
и соответствующего специалиста и т. д.

```ts
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
```

Использование:

```ts
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
```

Здесь фабрика деревянных дверей инкапсулировала `carpenter` и `wooden door`, фабрика стальных дверей — `iron door` и 
`welder`. То есть можно быть уверенными, что для каждой из созданных дверей мы получим правильного специалиста.  

**Когда использовать?**

Когда у вас есть взаимосвязи с не самой простой логикой создания.

👷 Строитель (Builder)
--------------------------------------------
Аналогия
> Допустим, вы пришли в забегаловку, заказали бургер дня, и вам выдали его *без вопросов*. Это пример «Простой фабрики». 
Но иногда логика создания состоит из большего количества шагов. К примеру, при заказе бургера дня есть несколько 
вариантов хлеба, начинки, соусов, дополнительных ингредиентов. В таких ситуациях помогает шаблон «Строитель».

Вкратце
> Шаблон позволяет создавать разные свойства объекта, избегая загрязнения конструктора (constructor pollution). Это 
полезно, когда у объекта может быть несколько свойств. Или когда создание объекта состоит из большого количества этапов.
 
Википедия
> Шаблон «Строитель» предназначен для поиска решения проблемы антипаттерна Telescoping constructor.

Что такое антипаттерн Telescoping constructor? Каждый из нас когда-либо сталкивался с подобным конструктором:
 
```ts
constructor(size, cheese = true, pepperoni = true, tomato = false, lettuce = true) {
    // ... 
}
```

Как видите, количество параметров может быстро разрастись, и станет трудно разобраться в их структуре. Кроме того, этот 
список параметров будет расти и дальше, если в будущем вы захотите добавить новые опции. Это и есть антипаттерн 
Telescoping constructor.

**Пример**

Разумная альтернатива — шаблон «Строитель». Сначала создадим бургер:

```ts
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
```

А затем добавим «строителя»:

```ts
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
```

Использование:

```ts
const burger = (new BurgerBuilder(14))
  .addPepperoni()
  .addLettuce()
  .addTomato()
  .build();
```

__Javascript-специфичный совет__ : Когда вы обнаружите, что количество аргументов функции или метода слишком велико 
(обычно
более двух аргументов считается слишком большим), используйте один аргумент объекта вместо нескольких аргументов. Это 
позволяет достичь 2 цели:

1. Это делает ваш код менее громоздким, поскольку есть только один аргумент.
2. Вам не нужно беспокоиться о порядке аргументов, поскольку аргументы теперь передаются как именованные свойства 
объекта.

Например:

```ts
const burger = new Burger({
    size: 14,
    pepperoni: true,
    cheeze: false,
    lettuce: true,
    tomato: true
});
```

вместо

```ts
const burger = new Burger(14, true, false, true, true);
```

**Когда использовать?**

Когда у объекта может быть несколько свойств и когда нужно избежать Telescoping constructor. Ключевое отличие от шаблона 
«Простая фабрика»: он используется в одноэтапном создании, а «Строитель» — в многоэтапном.


💍 Одиночка (Singleton)
------------
Аналогия
> У страны может быть только один президент. Он должен действовать, когда того требуют обстоятельства и долг. В данном 
случае президент — одиночка.

Вкратце
> Шаблон позволяет удостовериться, что создаваемый объект — единственный в своём классе.

Википедия
> Шаблон «Одиночка» позволяет ограничивать создание класса единственным объектом. Это удобно, когда для координации 
действий в рамках системы требуется, чтобы объект был единственным в своём классе.

На самом деле шаблон «Одиночка» считается антипаттерном, не следует им слишком увлекаться. Он необязательно плох и 
иногда бывает полезен. Но применяйте его с осторожностью, потому что «Одиночка» вносит в приложение глобальное состояние, 
так что изменение в одном месте может повлиять на все остальные случаи использования, а отлаживать такое — не самое 
простое занятие. Другие недостатки шаблона: он делает ваш код сильно связанным (tightly coupled), а создание прототипа 
(mocking) «Одиночки» может быть затруднено.

**Пример**

В Javascript одиночки могут быть реализованы с использованием шаблона «Модуль». Частные переменные и функции скрыты в
замыкании функции, а публичные методы могут быть доступны выборочно.

```ts
const president = (function () {
  const _presidentsPrivateInformation = 'Super private';
  const _name = 'Turd Sandwich';

  const getName = () => _name;

  return {
    getName
  };
}());
```

Здесь, `presidentsPrivateInformation` и `name` хранятся приватно. В то же время, `name` доступна при помощи публичного 
метода `president.getName`.

```ts
president.getName();    // => 'Turd Sandwich'
president._name;    // => undefined
president._presidentsPrivateInformation;    // => undefined
```

Структурные шаблоны проектирования (Structural Design Patterns)
==========================
Вкратце
> Эти шаблоны в основном посвящены компоновке объектов (object composition). То есть тому, как сущности могут друг друга 
использовать. Ещё одно объяснение: структурные шаблоны помогают ответить на вопрос «Как построить программный компонент?»

Википедия
> Структурными называют шаблоны, которые облегчают проектирование, определяя простой способ реализации взаимоотношений 
между сущностями.
  
 * [Адаптер (Adapter)](#-adapter)
 * [Мост (Bridge)](#-bridge)
 * [Компоновщик (Composite)](#-composite)
 * [Декоратор (Decorator)](#-decorator)
 * [Фасад (Facade)](#-facade)
 * [Приспособленец (Flyweight)](#-flyweight)
 * [Заместитель (Proxy)](#-proxy)

🔌 Адаптер (Adapter)
-------
Аналогия
> Допустим, у вас на карте памяти есть какие-то картинки. Их нужно перенести на компьютер. Нужен адаптер, совместимый с 
входным портом компьютера, в который можно вставить карту памяти. В данном примере адаптер — это картридер.
> Ещё один пример: переходник, позволяющий использовать американский блок питания с российской розеткой.
> Третий пример: переводчик — это адаптер, соединяющий двух людей, говорящих на разных языках.

Вкратце
> Шаблон «Адаптер» позволяет помещать несовместимый объект в обёртку, чтобы он оказался совместимым с другим классом.

Википедия
> Шаблон проектирования «Адаптер» позволяет использовать интерфейс существующего класса как другой интерфейс. Этот шаблон 
часто применяется для обеспечения работы одних классов с другими без изменения их исходного кода.

**Пример**

Представим себе охотника на львов.

Создадим интерфейс `Lion`, который реализует все типы львов.

```ts
interface Lion {
  roar(): void;
}

class AfricanLion implements Lion {
  roar(): void {}
}

class AsianLion implements Lion {
  roar(): void {}
}
```

Охотник должен охотиться на все реализации интерфейса `Lion`.

```ts
class Hunter {
  hunt(lion: Lion): void {
    // ... какой-то код
    lion.roar();
    // ... какой-то код
  }
}
```

Добавим теперь дикую собаку `WildDog`, на которую охотник тоже может охотиться. Но у нас не получится сделать это 
напрямую, потому что у собаки другой интерфейс. Чтобы она стала совместима с охотником, нужно создать подходящий адаптер.
 
```ts
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
```

Теперь `WildDog` может вступить в игру действие благодаря `WildDogAdapter`.

```ts
let wildDog = new WildDog();
let wildDogAdapter = new WildDogAdapter(wildDog);
let hunter = new Hunter();

hunter.hunt(wildDogAdapter);
```

🚡 Bridge
------
Аналогия
> Допустим, у вас есть сайт с несколькими страницами. Вы хотите позволить пользователям менять темы оформления страниц. 
Как бы вы поступили? Создали множественные копии каждой страницы для каждой темы или просто сделали отдельные темы и 
подгружали их в соответствии с настройками пользователей? Шаблон «Мост» позволяет реализовать второй подход.

![С «Мостом» и без него](https://cloud.githubusercontent.com/assets/11269635/23065293/33b7aea0-f515-11e6-983f-98823c9845ee.png)

Вкратце
> Шаблон «Мост» — это предпочтение компоновки наследованию. Подробности реализации передаются из одной иерархии другому 
объекту с отдельной иерархией.

Википедия
> Шаблон «Мост» означает отделение абстракции от реализации, чтобы их обе можно было изменять независимо друг от друга.

**Пример**

Реализуем вышеописанный пример с веб-страницами. Сделаем иерархию `WebPage`:

```ts
interface Webpage {
  getContent(): string;
}

class About implements Webpage {
  theme: Theme;

  constructor(theme: Theme) {
    this.theme = theme;
  }

  getContent(): string {
    return `About page in ${this.theme.getColor()}`;
  }
}

class Careers implements Webpage {
  theme: Theme;

  constructor(theme: Theme) {
    this.theme = theme;
  }

  getContent(): string {
    return `Careers page in ${this.theme.getColor()}`
  }
}
```

Отделим иерархию тем:

```ts
interface Theme {
  getColor(): string;
}

class DarkTheme implements Theme {
  getColor(): string {
    return 'Dark Black';
  }
}

class LightTheme implements Theme {
  getColor(): string {
    return 'Off white';
  }
}

class AquaTheme implements Theme {
  getColor(): string {
    return 'Light blue';
  }
}
```

Обе иерархии:

```ts
const darkTheme = new DarkTheme();

const about = new About(darkTheme);
const careers = new Careers(darkTheme);

console.log(about.getContent());    // => 'About page in Dark Black'
console.log(careers.getContent());    // => 'Careers page in Dark Black'
```

🌿 Компоновщик (Composite)
-----------------

Аналогия
> Каждая компания состоит из сотрудников. У каждого сотрудника есть одни и те же свойства: зарплата, обязанности, 
отчётность перед кем-то, субординация...

Вкратце
> Шаблон «Компоновщик» позволяет клиентам обрабатывать отдельные объекты в едином порядке.

Википедия
> Шаблон «Компоновщик» описывает общий порядок обработки группы объектов, словно это одиночный экземпляр объекта. Суть 
шаблона — компонование объектов в древовидную структуру для представления иерархии от частного к целому. Шаблон позволяет 
клиентам одинаково обращаться к отдельным объектам и к группам объектов.

**Пример**

Вот разные типы сотрудников:

```ts
interface Employee {
  getName(): string;
  setSalary(salary: number): void;
  getSalary(): number;
}

class Developer implements Employee {
  name: string;
  salary: number;

  constructor(name: string, salary: number) {
    this.name = name;
    this.salary = salary;
  }

  getName(): string {
    return this.name;
  }

  setSalary(salary: number): void {
    this.salary = salary;
  }

  getSalary(): number {
    return this.salary;
  }
}

class Designer implements Employee {
  name: string;
  salary: number;

  constructor(name: string, salary: number) {
    this.name = name;
    this.salary = salary;
  }

  getName(): string {
    return this.name;
  }

  setSalary(salary: number): void {
    this.salary = salary;
  }

  getSalary(): number {
    return this.salary;
  }
}
```

А вот компания, которая состоит из сотрудников разных типов:

```ts
class Organization {
  employees: Employee[];

  constructor() {
    this.employees = [];
  }

  addEmployee(employee: Employee) {
    this.employees.push(employee);
  }

  getNetSalaries(): number {
    let netSalary = 0;

    this.employees.forEach(employee => {
      netSalary += employee.getSalary();
    });

    return netSalary;
  }
}
```

Использование:

```ts
// Подготовка сотрудников
const john = new Developer('John Doe', 12000);
const jane = new Designer('Jane Doe', 10000);

// Включение их в штат
const organization = new Organization();

organization.addEmployee(john);
organization.addEmployee(jane);

console.log(`Net salaries: ${organization.getNetSalaries()}`);    // => Net Salaries: 22000
```

☕ Декоратор (Decorator)
-------------

Аналогия

> Допустим, у вас свой автосервис, оказывающий различные услуги. Как выставлять клиентам счёт? Добавлять последовательно 
услуги и их стоимость — и в конце концов получится итоговая сумма к оплате. Здесь каждый тип услуги — это «декоратор».

Вкратце
> Шаблон «Декоратор» позволяет во время выполнения динамически изменять поведение объекта, обёртывая его в объект класса 
«декоратора».

Википедия
> Шаблон «Декоратор» позволяет подключать к объекту дополнительное поведение (статически или динамически), не влияя на 
поведение других объектов того же класса. Шаблон часто используется для соблюдения принципа единственной обязанности 
(Single Responsibility Principle), поскольку позволяет разделить функциональность между классами для решения конкретных 
задач.

**Пример**

Возьмём в качестве примера кофе. Сначала просто реализуем интерфейс:

```ts
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
```

Можно сделать код расширяемым, чтобы при необходимости вносить модификации. Добавим «декораторы»:

```ts
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
```

Теперь приготовим кофе:

```ts
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
```

📦 Фасад (Facade)
----------------

Аналогия
> Как включить компьютер? Вы скажете: «Нажать кнопку включения». Это потому, что вы используете простой интерфейс, 
предоставляемый компьютером наружу. А внутри него происходит очень много процессов. Простой интерфейс для сложной 
подсистемы — это фасад.

Вкратце
> Шаблон «Фасад» предоставляет упрощённый интерфейс для сложной подсистемы.

Википедия
> «Фасад» — это объект, предоставляющий упрощённый интерфейс для более крупного тела кода, например библиотеки классов.

**Пример**

Создадим класс `computer`:

```ts
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
```

Теперь «фасад»:

```ts
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
```

Использование:

```ts
const computer = new ComputerFacade(new Computer());

computer.turnOn();    // => Ой! Бип-бип! Загрузка.. Готов к использованию!
computer.turnOff();    // => Бап-бап-бап-базззз! Хааа! Ззззз
```

🍃 Приспособленец (Flyweight)
---------

Аналогия
> Обычно в заведениях общепита чай заваривают не отдельно для каждого клиента, а сразу в некой крупной ёмкости. Это 
позволяет экономить ресурсы: газ/электричество, время и т. д. Шаблон «Приспособленец» как раз посвящён общему 
использованию (sharing).

Вкратце
> Шаблон применяется для минимизирования использования памяти или вычислительной стоимости за счёт общего использования 
как можно большего количества одинаковых объектов.

Википедия
> «Приспособленец» — это объект, минимизирующий использование памяти за счёт общего с другими, такими же объектами 
использования как можно большего объёма данных. Это способ применения многочисленных объектов, когда простое 
повторяющееся представление приведёт к неприемлемому потреблению памяти.

**Пример**

Сделаем типы чая и чайника.

```ts
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
```

Сделаем забегаловку `TeaShop`, принимающую и обрабатывающую заказы:

```ts
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
```

Использование:

```ts
const teaMaker = new TeaMaker();
const shop = new TeaShop(teaMaker);

shop.takeOrder('меньше сахара', 1);
shop.takeOrder('больше молока', 2);
shop.takeOrder('без сахара', 5);

shop.serve();
// => Сервировка чая на стол №1
// => Сервировка чая на стол №2
// => Сервировка чая на стол №5
```

🎱 Заместитель (Proxy)
-------------------
Аналогия
> Открыть дверь с электронным замком можно с помощью карточки доступа (access card) или кнопки для обхода системы 
безопасности. То есть основная функциональность двери — открыться, а поверх неё может быть ещё какая-то функциональность 
— «заместитель».

Вкратце
> С помощью шаблона «Заместитель» класс представляет функциональность другого класса.

Википедия
> В наиболее общей форме «Заместитель» — это класс, функционирующий как интерфейс к чему-либо. Это оболочка или объект-
агент, вызываемый клиентом для получения доступа к другому, «настоящему» объекту. «Заместитель» может просто 
переадресовывать запросы настоящему объекту, а может предоставлять дополнительную логику: кеширование данных при 
интенсивном выполнении операций или потреблении ресурсов настоящим объектом; проверка предварительных условий 
(preconditions) до вызова выполнения операций настоящим объектом.

**Пример**

Реализуем интерфейс двери и саму дверь:

```ts
interface Door {
  open(): void;
  close(): void;
}

class LabDoor implements Door {
  open(): void {
    console.log('Открытие лабораторной двери');
  }

  close(): void {
    console.log('Закрытие лабораторной двери');
  }
}
```

Сделаем «заместителя», чтобы дверь могла выполнять защитную функцию:

```ts
class Security {
  door: Door;

  constructor(door: Door) {
    this.door = door;
  }

  open(password: string): void {
    if (this.authenticate(password)) {
      this.door.open();
    } else {
      console.log('Это невозможно.');
    }
  }

  authenticate(password: string): boolean {
    return password === '$ecr@t';
  }

  close(): void {
    this.door.close();
  }
}
```

Использование:

```ts
const door = new Security(new LabDoor());

door.open('invalid');    // => Это невозможно.
door.open('$ecr@t');    // => Открытие лабораторной двери
door.close();    // => Закрытие лабораторной двери
```

Поведенческие шаблоны проектирования (Behavioral Design Patterns)
==========================

Вкратце
> Они связаны с присвоением обязанностей (responsibilities) объектам. От структурных шаблонов они отличаются тем, что не 
просто описывают структуру, но и очерчивают шаблоны передачи данных, обеспечения взаимодействия. То есть поведенческие 
шаблоны позволяют ответить на вопрос «Как реализовать поведение в программном компоненте?»

Википедия
> Поведенческие шаблоны проектирования определяют алгоритмы и способы реализации взаимодействия различных объектов и 
классов. Они обеспечивают гибкость взаимодействия между объектами.

* [Цепочка ответственности (Chain of Responsibility)](#-chain-of-responsibility)
* [Команда (Command)](#-command)
* [Итератор (Iterator)](#-iterator)
* [Посредник (Mediator)](#-mediator)
* [Хранитель (Memento)](#-memento)
* [Наблюдатель (Observer)](#-observer)
* [Посетитель (Visitor)](#-visitor)
* [Стратегия (Strategy)](#-strategy)
* [Состояние (State)](#-state)
* [Шаблонный метод (Template Method)](#-template-method)

🔗 Цепочка ответственности (Chain of Responsibility)
-----------------------

Аналогия
> Допустим, для вашего банковского счёта доступны три способа оплаты (`A`, `B` и `C`). Каждый подразумевает разные 
доступные суммы денег: `A` — 100 долларов, `B` — 300, `C` — 1000. Приоритетность способов при оплате: `А`, затем `В`, 
затем `С`. Вы пытаетесь купить что-то за 210 долларов. На основании «цепочки ответственности» система попытается 
оплатить способом `А`. Если денег хватает — то оплата проходит, а цепочка прерывается. Если денег не хватает — то система 
переходит к способу `В`, и т. д.

Вкратце
> Шаблон «Цепочка ответственности» позволяет создавать цепочки объектов. Запрос входит с одного конца цепочки и движется 
от объекта к объекту, пока не будет найден подходящий обработчик.

Википедия
> Шаблон «Цепочка ответственности» содержит исходный управляющий объект и ряд обрабатывающих объектов. Каждый 
обрабатывающий объект содержит логику, определяющую типы командных объектов, которые он может обрабатывать, а остальные 
передаются по цепочке следующему обрабатывающему объекту.

**Пример**

Создадим основной банковский счёт, содержащий логику связывания счетов в цепочки, и сами счета.

```ts
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
```

Теперь с помощью определённых выше линков (Bank, Paypal, Bitcoin) подготовим цепочку:

```ts
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
```

👮 Команда (Command)
-------

Аналогия
> Вы пришли в ресторан. Вы (`Client`) просите официанта (`Invoker`) принести блюда (`Command`). Официант перенаправляет 
запрос шеф-повару (`Receiver`), который знает, что и как готовить.
> Другой пример: вы (`Client`) включаете (`Command`) телевизор (`Receiver`) с помощью пульта (`Invoker`).

Вкратце
> Шаблон «Команда» позволяет инкапсулировать действия в объекты. Ключевая идея — предоставить средства отделения клиента 
от получателя.

Википедия
> В шаблоне «Команда» объект используется для инкапсуляции всей информации, необходимой для выполнения действия либо для 
его инициирования позднее. Информация включает в себя имя метода; объект, владеющий методом; значения параметров метода.

**Пример**

Сначала сделаем получателя, содержащего реализации каждого действия, которое может быть выполнено.

```ts
// Получатель
class Bulb {
  turnOn(): void {
    console.log('Лампочка зажглась!');
  }

  turnOff(): void {
    console.log('Темнота!');
  }
}
```

Теперь сделаем интерфейс, который будет реализовывать каждая команда. Также сделаем набор команд.

```ts
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
```

Теперь сделаем вызывающего `Invoker`, с которым будет взаимодействовать клиент для обработки команд.

```ts
// Вызывающий
class RemoteControl {
  submit(command: Command): void {
    command.execute();
  }
}
```

Посмотрим, как всё это может использовать клиент:

```ts
const bulb = new Bulb();

const turnOn = new TurnOn(bulb);
const turnOff = new TurnOff(bulb);

const remote = new RemoteControl();
remote.submit(turnOn);    // Лампочка зажглась!
remote.submit(turnOff);    // Темнота!
```

Шаблон «Команда» можно использовать и для реализации системы на основе транзакций. То есть системы, в которой вы 
сохраняете историю команд по мере их выполнения. Если последняя команда выполнена успешно, то всё хорошо. В противном 
случае система итерирует по истории и делает `undo` для всех выполненных команд. 

➿ Итератор (Iterator)
--------

Аналогия
> Хороший пример — радиоприёмник. Вы начинаете с какой-то радиостанции, а затем перемещаетесь по станциям вперёд/назад. 
То есть устройство предоставляет интерфейс для итерирования по каналам.

Вкратце
> Шаблон — это способ доступа к элементам объекта без раскрытия базового представления.

Википедия
> В этом шаблоне итератор используется для перемещения по контейнеру и обеспечения доступа к элементам контейнера. Шаблон 
подразумевает отделение алгоритмов от контейнера. В каких-то случаях алгоритмы, специфичные для этого контейнера, не 
могут быть отделены.

**Пример**

Сначала создадим радиостанцию `RadioStation`.

```ts
class RadioStation {
  frequency: number;

  constructor(frequency: number) {
    this.frequency = frequency;
  }

  getFrequency(): number {
    return this.frequency;
  }
}
```

Теперь создадим итератор:

```ts
class StationList {
  stations: RadioStation[];

  constructor() {
    this.stations = [];
  }

  addStation(station: RadioStation) {
    this.stations.push(station);
  }

  removeStation(toRemove: RadioStation) {
    const toRemoveFrequency: number = toRemove.getFrequency();
    this.stations = this.stations.filter(station => {
      return station.getFrequency() !== toRemoveFrequency;
    });
  }
}
```

Использование:

```ts
const stationList: StationList = new StationList();

stationList.addStation(new RadioStation(89));
stationList.addStation(new RadioStation(101));
stationList.addStation(new RadioStation(102));
stationList.addStation(new RadioStation(103.2));

stationList.stations.forEach(station => console.log(station.getFrequency()));    // => 89 101 102 103.2

stationList.removeStation(new RadioStation(89));    // Удалит станцию 89
```

👽 Посредник (Mediator)
========

Аналогия
> Когда вы говорите с кем-то по мобильнику, то между вами и собеседником находится мобильный оператор. То есть сигнал 
передаётся через него, а не напрямую. В данном примере оператор — посредник. 

Вкратце
> Шаблон «Посредник» подразумевает добавление стороннего объекта («посредника») для управления взаимодействием между 
двумя объектами («коллегами»). Шаблон помогает уменьшить связанность (coupling) классов, общающихся друг с другом, ведь 
теперь они не должны знать о реализациях своих собеседников.

Википедия
> Шаблон определяет объект, который инкапсулирует способ взаимодействия набора объектов.

**Пример**

Простейший пример: чат («посредник»), в котором пользователи («коллеги») отправляют друг другу сообщения.

Создадим «посредника»:

```ts
interface ChatRoomMediator {
  showMessage(user: User, message: string);
}

// Посредник
class ChatRoom implements ChatRoomMediator {
  showMessage(user: User, message: string) {
    const time = new Date();
    const sender = user.getName();

    console.log(`${time} [${sender}]: ${message}`);
  }
}
```

Теперь создадим «коллег»:

```ts
class User {
  name: string;
  chatMediator: ChatRoomMediator;

  constructor(name: string, chatMediator: ChatRoomMediator) {
    this.name = name;
    this.chatMediator = chatMediator;
  }

  getName(): string {
    return this.name;
  }

  send(message): void {
    this.chatMediator.showMessage(this, message);
  }
}
```

Использование:

```ts
const mediator = new ChatRoom();

const john = new User('John', mediator);
const jane = new User('Jane', mediator);

john.send('Hi there!');    // => Feb 14, 10:58 [John]: Hi there!
jane.send('Hey!');    // => Feb 14, 10:58 [Jane]: Hey!
```

💾 Хранитель (Memento)
-------
Аналогия
> В качестве примера можно привести калькулятор («создатель»), у которого любая последняя выполненная операция 
сохраняется в памяти («хранитель»), чтобы вы могли снова вызвать её с помощью каких-то кнопок («опекун»).

Вкратце
> Шаблон «Хранитель» фиксирует и хранит текущее состояние объекта, чтобы оно легко восстанавливалось.

Википедия
> Шаблон «Хранитель» позволяет восстанавливать объект в его предыдущем состоянии (отмена через откат — undo via rollback).

Обычно шаблон применяется, когда нужно реализовать функциональность отмены операции.

**Пример**

Текстовый редактор время от времени сохраняет своё состояние, чтобы можно было восстановить текст в каком-то прошлом виде.

Сначала создадим объект «хранитель», в котором можно сохранять состояние редактора.

```ts
class EditorMemento {
  private _content: string;

  constructor(content: string) {
    this._content = content;
  }

  getContent(): string {
    return this._content;
  }
}
```

Теперь сделаем редактор («создатель»), который будет использовать объект «хранитель».

```ts
class Editor {
  private _content: string;

  constructor() {
    this._content = '';
  }

  type(words: string): void {
    this._content = this._content + ' ' + words;
  }

  getContent(): string {
    return this._content;
  }

  save(): EditorMemento {
    return new EditorMemento(this._content);
  }

  restore(memento: EditorMemento): void {
    this._content = memento.getContent();
  }
}
```

Использование: 

```ts
const editor = new Editor();

// Пишем что-нибудь
editor.type('Это первое предложение.');
editor.type('Это второе.');

// Сохранение состояния в: This is the first sentence. This is second.
const saved = editor.save();

// Пишем ещё
editor.type('А это третье.');

// Output: Содержимое до сохранения
console.log(editor.getContent());    // => Это первое предложение. Это второе. А это третье.

// Восстанавливаем последнее сохранённое состояние
editor.restore(saved);

console.log(editor.getContent());    // => Это первое предложение. Это второе.
```

😎 Наблюдатель (Observer)
--------

(Также известен как _"pub-sub"_)

Аналогия
> Хороший пример: люди, ищущие работу, подписываются на публикации на сайтах вакансий и получают уведомления, когда 
появляются вакансии, подходящие по параметрам.

Вкратце
> Шаблон определяет зависимость между объектами, чтобы при изменении состояния одного из них его «подчинённые» узнавали 
об этом.

Википедия
> В шаблоне «Наблюдатель» есть объект («субъект»), ведущий список своих «подчинённых» («наблюдателей») и автоматически 
уведомляющий их о любом изменении своего состояния, обычно с помощью вызова одного из их методов.

**Пример**

Сначала реализуем людей, ищущих работу, которых нужно уведомлять о появлении вакансий.

```ts
class JobPost {
  title: string;

  constructor(title: string) {
    this.title = title;
  }
}

class JobSeeker {
  private _name: string;

  constructor(name: string) {
    this._name = name;
  }

  notify(jobPost: JobPost): void {
    console.log(`${this._name} был уведомлен о новой вакансии: ${jobPost.title}`);
  }
}
```

Теперь реализуем публикации вакансий, на которые люди будут подписываться.

```ts
class JobBoard {
  private _subscribers: JobSeeker[];

  constructor() {
    this._subscribers = [];
  }

  subscribe(jobSeeker: JobSeeker): void {
    this._subscribers.push(jobSeeker);
  }

  addJob(jobPosting: JobPost): void {
    this._subscribers.forEach(subscriber => {
      subscriber.notify(jobPosting);
    });
  }
}
```

Использование:

```ts
// Создаём подписчиков
const jonDoe = new JobSeeker('John Doe');
const janeDoe = new JobSeeker('Jane Doe');
const kaneDoe = new JobSeeker('Kane Doe');

// Создаём публикатора и прикрепляем подписчиков
const jobBoard = new JobBoard();

jobBoard.subscribe(jonDoe);
jobBoard.subscribe(janeDoe);

// Добавляем новую вакансию и смотрим, будут ли уведомлены подписчики
jobBoard.addJob(new JobPost('Software Engineer'));

// => John Doe был уведомлен о новой вакансии: Software Engineer
// => Jane Doe был уведомлен о новой вакансии: Software Engineer
```

🏃 Visitor
-------
Аналогия
> Туристы собрались в Дубай. Сначала им нужен способ попасть туда (виза). После прибытия они будут посещать любую часть 
города, не спрашивая разрешения, ходить где вздумается. Просто скажите им о каком-нибудь месте — и туристы могут там 
побывать. Шаблон «Посетитель» помогает добавлять места для посещения.

Вкратце
> Шаблон «Посетитель» позволяет добавлять будущие операции для объектов без их модифицирования.
    
Википедия
> Шаблон «Посетитель» — это способ отделения алгоритма от структуры объекта, в которой он оперирует. Результат отделения 
— возможность добавлять новые операции в существующие структуры объектов без их модифицирования. Это один из способов 
соблюдения принципа открытости/закрытости (open/closed principle).

**Пример**

Возьмём зоопарк: у нас есть несколько видов животных, и нам нужно послушать издаваемые ими звуки.

Реализуем животных:

```ts
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
```

Реализуем посетителя:

```ts
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
```

Использование:

```ts
const monkey = new Monkey();
const lion = new Lion();
const dolphin = new Dolphin();

const speak = new Speak();

monkey.accept(speak);    // => Ooh oo aa aa!
lion.accept(speak);      // => Roaaar!
dolphin.accept(speak);   // => Tuut tutt tuutt!
```

Это можно было сделать просто с помощью иерархии наследования, но тогда пришлось бы модифицировать животных при каждом 
добавлении к ним новых действий. А здесь менять их не нужно. Например, мы можем добавить животным прыжки, просто создав 
нового посетителя:

```ts
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
```

Использование:

```ts
const jump = new Jump();

monkey.accept(speak);    // => Ooh oo aa aa!
monkey.accept(jump);    // => Подпрыгнул на 6 метровое дерево!
lion.accept(speak);      // => Roaaar!
lion.accept(jump);      // => Спрыгнул на землю с 1,5 метров!
dolphin.accept(speak);   // => Tuut tutt tuutt!
dolphin.accept(jump);   // => "Походил" по воде немного и нырнул
```

💡 Стратегия (Strategy)
--------

Аналогия
> Возьмём пример с пузырьковой сортировкой. Мы её реализовали, но с ростом объёмов данных сортировка стала выполняться 
очень медленно. Тогда мы сделали быструю сортировку (Quick sort). Алгоритм работает быстрее на больших объёмах, но на 
маленьких он очень медленный. Тогда мы реализовали стратегию, при которой для маленьких объёмов данных используется 
пузырьковая сортировка, а для больших — быстрая.

Вкратце
> Шаблон «Стратегия» позволяет переключаться между алгоритмами или стратегиями в зависимости от ситуации.

Википедия
> Шаблон «Стратегия» позволяет при выполнении выбирать поведение алгоритма.
 
**Пример**

Возьмём вышеописанный пример. Сначала сделаем интерфейс стратегии и реализации самих стратегий.

```ts
interface SortStrategy {
  sort(dataset: number[]): number[];
}

class BubbleSortStrategy implements SortStrategy {
  sort(dataset: number[]): number[] {
    console.log('Пузырьковая сортировка');

    // Выполнить сортировку
    return dataset;
  }
}

class QuickSortStrategy implements SortStrategy {
  sort(dataset: number[]): number[] {
    console.log('Быстрая сортировка');

    // Выполнить сортировку
    return dataset;
  }
}
```
 
Теперь реализуем клиента, который будет использовать нашу стратегию.

```ts
class Sorter {
  sorter: SortStrategy;

  constructor(sorter: SortStrategy) {
    this.sorter = sorter;
  }

  sort(dataset: number[]): number[] {
    return this.sorter.sort(dataset);
  }
}
```

Использование:

```ts
const dataSet = [1, 5, 4, 3, 2, 8];

const sorter1 = new Sorter(new BubbleSortStrategy());
sorter1.sort(dataSet);    // => Пузырьковая сортировка

const sorter2 = new Sorter(new QuickSortStrategy());
sorter2.sort(dataSet);    // => Быстрая сортировка
```

💢 Состояние (State)
-----
Аналогия
> Допустим, в графическом редакторе вы выбрали инструмент «Кисть». Она меняет своё поведение в зависимости от настройки 
цвета: т. е. рисует линию выбранного цвета.  

Вкратце
> Шаблон позволяет менять поведение класса при изменении состояния.

Википедия
> Шаблон «Состояние» реализует машину состояний объектно ориентированным способом. Это достигается с помощью:
> - реализации каждого состояния в виде производного класса интерфейса шаблона «Состояние»,
> - реализации переходов состояний (state transitions) посредством вызова методов, определённых вышестоящим классом 
(superclass).
   
> Шаблон «Состояние» — это в некотором плане шаблон «Стратегия», при котором возможно переключение текущей стратегии с 
помощью вызова методов, определённых в интерфейсе шаблона.

**Пример**

Текстовый редактор меняет состояние текста, который вы печатаете, т. е. если выбрано полужирное начертание — то редактор 
печатает полужирным и т. д.

Сначала сделаем интерфейс состояний и сами состояния:

```ts
interface WritingState {
  write(words: string);
}

class UpperCase implements WritingState {
  write(words: string): void {
    console.log(words.toUpperCase());
  }
}

class LowerCase implements WritingState {
  write(words: string): void {
    console.log(words.toLowerCase());
  }
}

class Default implements WritingState {
  write(words: string): void {
    console.log(words);
  }
}
```

Сделаем редактор:

```ts
class TextEditor {
  private _state: WritingState;

  constructor(state: WritingState) {
    this._state = state;
  }

  setState(state: WritingState): void {
    this._state = state;
  }

  type(words: string): void {
    this._state.write(words);
  }
}
```

Использование:

```ts
const editor = new TextEditor(new Default());

editor.type('First line');    // => First line

editor.setState(new UpperCase());

editor.type('Second line');    // => SECOND LINE
editor.type('Third line');    // => THIRD LINE

editor.setState(new LowerCase());

editor.type('Fourth line');    // => fourth line
editor.type('Fifth line');    // => fifth line
```

📒 Шаблонный метод (Template Method)
---------------

Аналогия
> Допустим, вы собрались строить дома. Этапы будут такими:
> - Подготовка фундамента.
> - Возведение стен.
> - Настил крыши.
> - Настил перекрытий.

> Порядок этапов никогда не меняется. Вы не настелите крышу до возведения стен — и т. д. Но каждый этап модифицируется: 
стены, например, можно возвести из дерева, кирпича или газобетона.
  
Вкратце
> «Шаблонный метод» определяет каркас выполнения определённого алгоритма, но реализацию самих этапов делегирует дочерним 
классам.
 
Википедия
> «Шаблонный метод» — это поведенческий шаблон, определяющий основу алгоритма и позволяющий наследникам переопределять 
некоторые шаги алгоритма, не изменяя его структуру в целом.

**Пример**

Допустим, у нас есть программный инструмент, позволяющий тестировать, проводить контроль качества кода (lint), выполнять 
сборку, генерировать отчёты сборки (отчёты о покрытии кода, о качестве кода и т. д.), а также развёртывать приложение на 
тестовом сервере.

Сначала наш базовый класс определяет каркас алгоритма сборки.

```ts
abstract class Builder {
  abstract test();
  abstract lint();
  abstract assemble();
  abstract deploy();

  // Шаблонный метод
  build(): void {
    this.test();
    this.lint();
    this.assemble();
    this.deploy();
  }
}
```

Теперь создаём реализации:

```ts
class AndroidBuilder extends Builder {
  test(): void {
    console.log('Выполнение Android-тестов');
  }

  lint(): void {
    console.log('Линтинг Android-кода');
  }

  assemble(): void {
    console.log('Создание Android-сборки');
  }

  deploy(): void {
    console.log('Развёртывание Android-сборки на сервере');
  }
}

class IosBuilder extends Builder {
  test(): void {
    console.log('Выполнение iOS-тестов');
  }

  lint(): void {
    console.log('Линтинг iOS-кода');
  }

  assemble(): void {
    console.log('Создание iOS-сборки');
  }

  deploy(): void {
    console.log('Развёртывание iOS-сборки на сервере');
  }
}
```

Использование:

```ts
const androidBuilder = new AndroidBuilder();
androidBuilder.build();

// => Выполнение Android-тестов
// => Линтинг Android-кода
// => Создание Android-сборки
// => Развёртывание Android-сборки на сервере

const iosBuilder = new IosBuilder();
iosBuilder.build();

// => Выполнение iOS-тестов
// => Линтинг iOS-кода
// => Создание iOS-сборки
// => Развёртывание iOS-сборки на сервере
```