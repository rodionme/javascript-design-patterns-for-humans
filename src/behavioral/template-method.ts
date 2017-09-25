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