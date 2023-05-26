/**
 * Write a function that takes a number as its argument and
 * returns a string that represents that number's simplified fraction.
 *
 * Example: toFraction(0.5) === '1/2'
 *
 * Whole numbers and mixed fractions should be returned as irregular fractions
 *
 * Example: toFraction(3.0) === '3/1'
 *
 * Example: toFraction(2.5) === '5/2'
 *
 */

var toFraction = function(number) {
  if (Number.isInteger(number)) {
    return `${number}/1`;
  }

  const getGCD = (a, b) => {
    if (b === 0) {
      return a;
    }

    return getGCD(b, Math.floor(a % b));
  };

  const denominator = 1e10;
  const numerator = Math.round(number * denominator);
  const gcd = getGCD(numerator, denominator);

  return `${numerator / gcd}/${denominator / gcd}`;
};

if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  module.exports = toFraction;
} else {
  window.toFraction = toFraction;
}
