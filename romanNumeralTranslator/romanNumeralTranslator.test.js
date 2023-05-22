const { translateRomanNumeral } = require('./romanNumeralTranslator.js');

describe('translateRomanNumeral', () => {
  it('should convert a valid Roman numeral to a number', () => {
    expect(translateRomanNumeral('I')).toBe(1);
    expect(translateRomanNumeral('IV')).toBe(4);
    expect(translateRomanNumeral('V')).toBe(5);
    expect(translateRomanNumeral('VI')).toBe(6);
    expect(translateRomanNumeral('IX')).toBe(9);
    expect(translateRomanNumeral('X')).toBe(10);
    expect(translateRomanNumeral('XI')).toBe(11);
    expect(translateRomanNumeral('XL')).toBe(40);
    expect(translateRomanNumeral('L')).toBe(50);
    expect(translateRomanNumeral('XC')).toBe(90);
    expect(translateRomanNumeral('C')).toBe(100);
    expect(translateRomanNumeral('CD')).toBe(400);
    expect(translateRomanNumeral('D')).toBe(500);
    expect(translateRomanNumeral('CM')).toBe(900);
    expect(translateRomanNumeral('M')).toBe(1000);
    expect(translateRomanNumeral('MMXXIII')).toBe(2023);
  });

  it('should return null for non-string input', () => {
    expect(translateRomanNumeral(123)).toBeNull();
    expect(translateRomanNumeral(true)).toBeNull();
    expect(translateRomanNumeral(null)).toBeNull();
    expect(translateRomanNumeral(undefined)).toBeNull();
    expect(translateRomanNumeral([])).toBeNull();
    expect(translateRomanNumeral({})).toBeNull();
  });
});
