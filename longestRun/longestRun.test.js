const { longestRun, randomString } = require('./longestRun.js');

describe('longestRun', () => {
  test('returns correct result for "abbbcc"', () => {
    expect(longestRun('abbbcc')).toEqual([1, 3]);
  });

  test('returns correct result for "aabbc"', () => {
    expect(longestRun('aabbc')).toEqual([0, 1]);
  });

  test('returns correct result for "abcd"', () => {
    expect(longestRun('abcd')).toEqual([0, 0]);
  });

  test('returns correct result for "aabbccdd"', () => {
    expect(longestRun('aabbccdd')).toEqual([0, 1]);
  });

  test('returns correct result for string of all identical characters', () => {
    expect(longestRun('aaaaa')).toEqual([0, 4]);
  });

  test('returns null for empty string', () => {
    expect(longestRun('')).toBeNull();
  });

  test('handles long, random strings well', () => {
    const input = randomString(1000);
    const result = longestRun(input);

    expect(Array.isArray(result)).toBe(true);
    expect(result.length).toBe(2);
    expect(result[0]).toBeGreaterThanOrEqual(0);
    expect(result[1]).toBeLessThanOrEqual(input.length - 1);
  });
});
