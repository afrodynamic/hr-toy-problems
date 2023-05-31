const toEnglish = require('./numberToEnglish.js');

describe('toEnglish', () => {
  it('returns the correct English representation for single-digit numbers', () => {
    expect(toEnglish(0)).toBe('zero');
    expect(toEnglish(7)).toBe('seven');
  });

  it('returns the correct English representation for two-digit numbers', () => {
    expect(toEnglish(11)).toBe('eleven');
    expect(toEnglish(21)).toBe('twenty-one');
    expect(toEnglish(99)).toBe('ninety-nine');
  });

  it('returns the correct English representation for three-digit numbers', () => {
    expect(toEnglish(100)).toBe('one hundred');
    expect(toEnglish(123)).toBe('one hundred twenty-three');
    expect(toEnglish(575)).toBe('five hundred seventy-five');
    expect(toEnglish(999)).toBe('nine hundred ninety-nine');
  });

  it('returns the correct English representation for large numbers', () => {
    expect(toEnglish(1000)).toBe('one thousand');
    expect(toEnglish(1000000)).toBe('one million');
    expect(toEnglish(123456789)).toBe(
      'one hundred twenty-three million four hundred fifty-six thousand seven hundred eighty-nine'
    );
  });

  it('returns the correct English representation for decimals', () => {
    expect(toEnglish(150043.273)).toBe('one hundred fifty thousand forty-three and two hundred seventy-three thousandths');
    expect(toEnglish(0.5)).toBe('zero and five tenths');
    expect(toEnglish(0.123)).toBe('zero and one hundred twenty-three thousandths');
  });

  it('returns "Invalid number" for non-finite numbers', () => {
    expect(toEnglish(NaN)).toBe('Invalid number');
    expect(toEnglish(Infinity)).toBe('Invalid number');
  });
});
