var mergeSort = require('./mergeSort.js');

describe('mergeSort', function () {
  it('should sort an array of integers', () => {
    const unsortedArray = [4, 7, 4, 3, 9, 1, 2];
    const sortedArray = mergeSort(unsortedArray);
    expect(sortedArray).toEqual([1, 2, 3, 4, 4, 7, 9]);
  });

  it('should handle an empty array', () => {
    const unsortedArray = [];
    const sortedArray = mergeSort(unsortedArray);
    expect(sortedArray).toEqual([]);
  });

  it('should handle an array of length 1', () => {
    const unsortedArray = [5];
    const sortedArray = mergeSort(unsortedArray);
    expect(sortedArray).toEqual([5]);
  });

  it('should sort an array of strings', () => {
    const unsortedArray = ['cat', 'bat', 'apple', 'dog'];
    const sortedArray = mergeSort(unsortedArray);
    expect(sortedArray).toEqual(['apple', 'bat', 'cat', 'dog']);
  });
});
