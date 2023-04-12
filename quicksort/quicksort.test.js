var quicksort = require('./quickSort.js');

describe('quicksort', () => {
  it('should sort an array in ascending order', () => {
    const input = [1, 100, 2, 43, 21];
    const output = quicksort(input);
    expect(output).toEqual([1, 2, 21, 43, 100]);

    const input2 = [24.3, 24.7, 23, 9];
    const output2 = quicksort(input2);
    expect(output2).toEqual([9, 23, 24.3, 24.7]);
  });

  it('should handle presorted arrays', () => {
    const array1 = [3, 4, 5];
    const sortedArray1 = quicksort(array1);
    expect(sortedArray1).toEqual([3, 4, 5]);

    const array2 = [1, 2, 3];
    const sortedArray2 = quicksort(array2);
    expect(sortedArray2).toEqual([1, 2, 3]);
  });

  it('should handle arrays with repeated elements', () => {
    const array = [1, 5, 1, 5];
    const sortedArray = quicksort(array);
    expect(sortedArray).toEqual([1, 1, 5, 5]);
  });

  it('should handle arrays with negative numbers', () => {
    const array = [0, 1, -1];
    const sortedArray = quicksort(array);
    expect(sortedArray).toEqual([-1, 0, 1]);
  });
});
