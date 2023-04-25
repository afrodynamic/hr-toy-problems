const binarySearch = require('./binarySearchArray.js');

describe('binarySearch', function() {
  test('should find the index of a target in a sorted array', () => {
    expect(binarySearch([1, 2, 3, 4, 5], 4)).toEqual(3);
  });

  test('should return null for a target not in the array', () => {
    expect(binarySearch([1, 2, 3, 4, 5], 8)).toEqual(null);
  });
});
