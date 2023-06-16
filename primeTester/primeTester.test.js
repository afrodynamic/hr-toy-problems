const { primeTester, primeSieve } = require('./primeTester.js');

describe('primeTester', () => {
  test('should return false for non-prime numbers', () => {
    expect(primeTester(4)).toBe(false);
    expect(primeTester(9)).toBe(false);
    expect(primeTester(15)).toBe(false);
    expect(primeTester(20)).toBe(false);
  });

  test('should return true for prime numbers', () => {
    expect(primeTester(2)).toBe(true);
    expect(primeTester(3)).toBe(true);
    expect(primeTester(5)).toBe(true);
    expect(primeTester(7)).toBe(true);
  });

  test('should return false for less than 1 and non-integers', () => {
    expect(primeTester(-2)).toBe(false);
    expect(primeTester(0)).toBe(false);
    expect(primeTester(1)).toBe(false);
    expect(primeTester(1.5)).toBe(false);
  });
});

describe('primeSieve', () => {
  test('should return all prime numbers in range', () => {
    expect(primeSieve(0, 10)).toEqual([2, 3, 5, 7]);
    expect(primeSieve(10, 20)).toEqual([11, 13, 17, 19]);
    expect(primeSieve(20, 30)).toEqual([23, 29]);
  });
});
