const reverseInteger = require('./integerReverse.js');

describe('reverseInteger', () => {
  it('reverses a positive single-digit number', () => {
    expect(reverseInteger(5)).toBe(5);
  });

  it('reverses a positive multi-digit number', () => {
    expect(reverseInteger(12345)).toBe(54321);
  });

  it('reverses a positive number with leading zeros', () => {
    expect(reverseInteger(9100)).toBe(19);
  });

  it('reverses a negative single-digit number', () => {
    expect(reverseInteger(-9)).toBe(-9);
  });

  it('reverses a negative multi-digit number', () => {
    expect(reverseInteger(-12345)).toBe(-54321);
  });

  it('reverses zero', () => {
    expect(reverseInteger(0)).toBe(0);
  });
});
