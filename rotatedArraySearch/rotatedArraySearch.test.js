const rotatedArraySearch = require('./rotatedArraySearch.js');

describe('rotatedArraySearch', () => {
  it('should return the index of the target element in a rotated array', () => {
    expect(rotatedArraySearch([4, 5, 6, 0, 1, 2, 3], 2)).toBe(5);
    expect(rotatedArraySearch([7, 8, 9, 0, 1, 2, 3, 4, 5, 6], 9)).toBe(2);
    expect(rotatedArraySearch([3, 4, 5, 6, 7, 8, 9, 0, 1, 2], 8)).toBe(5);
    expect(rotatedArraySearch([4, 5, 6, 7, 8, 9, 0, 1, 2, 3], 3)).toBe(9);
  });

  it('should return null if the target element is not found in the array', () => {
    expect(rotatedArraySearch([4, 5, 6, 0, 1, 2, 3], 100)).toBeNull();
    expect(rotatedArraySearch([2, 4, 6, 8, 10], 7)).toBeNull();
    expect(rotatedArraySearch([1, 3, 5, 7, 9], 2)).toBeNull();
    expect(rotatedArraySearch([], 5)).toBeNull();
  });
});
