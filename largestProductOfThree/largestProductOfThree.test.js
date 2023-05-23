const { largestProductOfThree } = require('./largestProductOfThree.js');

describe('largestProductOfThree', () => {
  it('returns the correct product for positive numbers', () => {
    expect(largestProductOfThree([4, 3, 2, 1])).toBe(24);
    expect(largestProductOfThree([1, 2, 3, 4, 5])).toBe(60);
    expect(largestProductOfThree([100, 1, 2, 0])).toBe(200);
  });

  it('returns the correct product with negative numbers', () => {
    expect(largestProductOfThree([1, 2, -2, 4])).toBe(8);
    expect(largestProductOfThree([5, -2, 3, -3])).toBe(30);
    expect(largestProductOfThree([2, 3, -11, 7, 5, -13])).toBe(1001);
    expect(largestProductOfThree([-31, 41, 34, -37, -17, 29])).toBe(47027);
    expect(largestProductOfThree([-1, -2, -3, -4, -5, -6])).toBe(-6);
  });

  it('returns null for arrays with less than three elements', () => {
    expect(largestProductOfThree([1, 2])).toBeNull();
    expect(largestProductOfThree([-1, -2])).toBeNull();
    expect(largestProductOfThree([])).toBeNull();
  });
});
