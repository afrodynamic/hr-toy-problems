var { insertionSort, testingTransform } = require('./insertionSort');

describe('insertionSort', () => {
  it('should sort an array in ascending order', () => {
    var input = testingTransform([2, 1, 3]);
    var expected = testingTransform([1, 2, 3]);
    expect(insertionSort(input)).toEqual(expected);
  });

  it('should sort an array with duplicate values in ascending order and maintain relative order', () => {
    var input = testingTransform([2, 1, 3, 1]);
    var expected = testingTransform([1, 1, 2, 3]);
    expect(insertionSort(input)).toEqual(expected);
  });

  it('should sort an array using a custom comparator function', () => {
    var input = testingTransform([2, 1, 3]);
    var expected = testingTransform([3, 2, 1]).reverse();
    var comparator = (a, b) => b.value - a.value;
    expect(insertionSort(input, comparator)).toEqual(expected);
  });
});
