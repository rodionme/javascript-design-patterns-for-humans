var BubbleSortStrategy = (function () {
    function BubbleSortStrategy() {
    }
    BubbleSortStrategy.prototype.sort = function (dataset) {
        console.log('Пузырьковая сортировка');
        // Выполнить сортировку
        return dataset;
    };
    return BubbleSortStrategy;
}());
var QuickSortStrategy = (function () {
    function QuickSortStrategy() {
    }
    QuickSortStrategy.prototype.sort = function (dataset) {
        console.log('Быстрая сортировка');
        // Выполнить сортировку
        return dataset;
    };
    return QuickSortStrategy;
}());
var Sorter = (function () {
    function Sorter(sorter) {
        this.sorter = sorter;
    }
    Sorter.prototype.sort = function (dataset) {
        return this.sorter.sort(dataset);
    };
    return Sorter;
}());
var dataSet = [1, 5, 4, 3, 2, 8];
var sorter1 = new Sorter(new BubbleSortStrategy());
sorter1.sort(dataSet); // => Пузырьковая сортировка
var sorter2 = new Sorter(new QuickSortStrategy());
sorter2.sort(dataSet); // => Быстрая сортировка
