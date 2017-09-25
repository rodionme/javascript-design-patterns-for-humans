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


class Sorter {
  sorter: SortStrategy;

  constructor(sorter: SortStrategy) {
    this.sorter = sorter;
  }

  sort(dataset: number[]): number[] {
    return this.sorter.sort(dataset);
  }
}


const dataSet = [1, 5, 4, 3, 2, 8];

const sorter1 = new Sorter(new BubbleSortStrategy());
sorter1.sort(dataSet);    // => Пузырьковая сортировка

const sorter2 = new Sorter(new QuickSortStrategy());
sorter2.sort(dataSet);    // => Быстрая сортировка