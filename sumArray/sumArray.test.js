const sumArray = require('./sumArray');

describe('sumArray', function() {
  it('returns the greatest contiguous sum for a positive array', function() {
    expect(sumArray([1, 2, 3])).toBe(6);
    expect(sumArray([1, 2, 3, -4])).toBe(6);
    expect(sumArray([1, 2, 3, -4, 5])).toBe(7);
    expect(sumArray([4, -1, 5])).toBe(8);
    expect(sumArray([10, -11, 11])).toBe(11);
  });

  it('returns the element itself for a single-element array', function() {
    expect(sumArray([5])).toBe(5);
    expect(sumArray([-3])).toBe(-3);
  });

  it('returns 0 for an empty array', function() {
    expect(sumArray([])).toBe(0);
  });

  it('returns the greatest element for an array with all negative numbers', function() {
    expect(sumArray([-4, -7, -2, -5, -1])).toBe(-1);
  });
});
