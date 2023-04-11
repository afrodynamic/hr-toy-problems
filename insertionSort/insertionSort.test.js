var { insertionSort, testingTransform } = require('./insertionSort');

describe('insertionSort', () => {
  it('should sort an array in ascending order by its value property', () => {
    var input = testingTransform([1, 100, 2, 43, 21]);
    insertionSort(input);
    expect(input).toEqual([
      { value: 1, i: 0 },
      { value: 2, i: 2 },
      { value: 21, i: 4 },
      { value: 43, i: 3 },
      { value: 100, i: 1 },
    ]);

    var input2 = testingTransform([24.3, 24.7, 23, 9]);
    insertionSort(input2);
    expect(input2).toEqual([
      { value: 9, i: 3 },
      { value: 23, i: 2 },
      { value: 24.3, i: 0 },
      { value: 24.7, i: 1 },
    ]);
  });

  it('should handle presorted arrays', () => {
    var array = testingTransform([5, 4, 3]);
    insertionSort(array);
    expect(array).toEqual([
      { value: 3, i: 2 },
      { value: 4, i: 1 },
      { value: 5, i: 0 },
    ]);

    array = testingTransform([1, 2, 3]);
    insertionSort(array);
    expect(array).toEqual([
      { value: 1, i: 0 },
      { value: 2, i: 1 },
      { value: 3, i: 2 },
    ]);
  });

  it('should handle negative numbers', () => {
    var array = testingTransform([0, 1, -1]);
    insertionSort(array);
    expect(array).toEqual([
      { value: -1, i: 2 },
      { value: 0, i: 0 },
      { value: 1, i: 1 },
    ]);
  });

  it('should sort an array as a stable sort', () => {
    var array = testingTransform([1, 5, 1, 5]);
    insertionSort(array);
    expect(array).toEqual([
      { value: 1, i: 0 },
      { value: 1, i: 2 },
      { value: 5, i: 1 },
      { value: 5, i: 3 },
    ]);
  });

  it('should sort according to the passed comparator', () => {
    var array = testingTransform([1, 2, 3, 4, 5]);
    insertionSort(array, function (a, b) {
      return b.i - a.i;
    });
    expect(array).toEqual([
      { value: 5, i: 4 },
      { value: 4, i: 3 },
      { value: 3, i: 2 },
      { value: 2, i: 1 },
      { value: 1, i: 0 },
    ]);

    var array = testingTransform([0, 1, 2, 3, 4, 5]);
    insertionSort(array, function (a, b) {
      var aIsOdd = a.value & 1;
      var bIsOdd = b.value & 1;
      return aIsOdd - bIsOdd;
    });
    expect(array).toEqual([
      { value: 0, i: 0 },
      { value: 2, i: 2 },
      { value: 4, i: 4 },
      { value: 1, i: 1 },
      { value: 3, i: 3 },
      { value: 5, i: 5 },
    ]);
  });

  it('should sort intuitively if no comparator is passed', () => {
    var array = testingTransform([0, 1, 'a', ';', [], {}, undefined, null]);
    insertionSort(array);
    expect(array).toEqual([
      { value: 0, i: 0 },
      { value: [], i: 4 },
      { value: 1, i: 1 },
      { value: ';', i: 3 },
      { value: {}, i: 5 },
      { value: 'a', i: 2 },
      { value: undefined, i: 6 },
      { value: null, i: 7 },
    ]);
  });
});
