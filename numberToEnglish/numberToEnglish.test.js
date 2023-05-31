const Number = require('./numberToEnglish.js');

describe('toEnglish', () => {
  it('returns the correct English representation for single-digit numbers', () => {
    expect((0).toEnglish()).toBe('zero');
    expect((7).toEnglish()).toBe('seven');
  });

  it('returns the correct English representation for two-digit numbers', () => {
    expect((11).toEnglish()).toBe('eleven');
    expect((21).toEnglish()).toBe('twenty-one');
    expect((99).toEnglish()).toBe('ninety-nine');
  });

  it('returns the correct English representation for three-digit numbers', () => {
    expect((100).toEnglish()).toBe('one hundred');
    expect((123).toEnglish()).toBe('one hundred twenty-three');
    expect((575).toEnglish()).toBe('five hundred seventy-five');
    expect((999).toEnglish()).toBe('nine hundred ninety-nine');
  });

  it('returns the correct English representation for large numbers', () => {
    expect((1000).toEnglish()).toBe('one thousand');
    expect((1000000).toEnglish()).toBe('one million');
    expect((123456789).toEnglish()).toBe(
      'one hundred twenty-three million four hundred fifty-six thousand seven hundred eighty-nine'
    );
  });

  it('returns the correct English representation for decimals', () => {
    expect((150043.273).toEnglish()).toBe('one hundred fifty thousand forty-three and two hundred seventy-three thousandths');
    expect((0.5).toEnglish()).toBe('five tenths');
    expect((0.123).toEnglish()).toBe('one hundred twenty-three thousandths');
    expect((0.001).toEnglish()).toBe('one thousandth');
    expect((3.0625).toEnglish()).toBe('three and six hundred twenty-five ten-thousandths');
  });

  it('returns "Invalid number" for non-finite numbers', () => {
    expect((NaN).toEnglish()).toBe('Invalid number');
    expect((Infinity).toEnglish()).toBe('Invalid number');
  });

  it('returns the correct English representation for negative numbers', () => {
    expect((-7).toEnglish()).toBe('Negative seven');
    expect((-0.5).toEnglish()).toBe('Negative five tenths');
    expect((-123.456).toEnglish()).toBe('Negative one hundred twenty-three and four hundred fifty-six thousandths');
  });
});
