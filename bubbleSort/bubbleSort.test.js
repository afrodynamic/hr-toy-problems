var bubbleSort = require('./bubbleSort.js');

describe.only('bubbleSort', function() {
  test('Should sort an array', function() {
    expect(bubbleSort([2, 1, 3])).toEqual([1, 2, 3]);
  });

  test('Should sort an array of negative numbers', function() {
    expect(bubbleSort([-2, -1, -3])).toEqual([-3, -2, -1]);
  });

  test('Should sort an array of mixed positive/negative numbers', function() {
    expect(bubbleSort([-2, 1, -3])).toEqual([-3, -2, 1]);
  });
});
