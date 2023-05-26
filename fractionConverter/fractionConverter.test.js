const toFraction = require('./fractionConverter.js');

describe('toFraction', () => {
  it('returns the correct fraction for a decimal number', () => {
    expect(toFraction(0.25)).toBe('1/4');
    expect(toFraction(0.5)).toBe('1/2');
    expect(toFraction(1.5)).toBe('3/2');
    expect(toFraction(1.75)).toBe('7/4');
  });

  it('returns the fraction representation for a whole number', () => {
    expect(toFraction(3)).toBe('3/1');
    expect(toFraction(-5)).toBe('-5/1');
  });

  it('returns the fraction representation for zero', () => {
    expect(toFraction(0)).toBe('0/1');
  });
});
