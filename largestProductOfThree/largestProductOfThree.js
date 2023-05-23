/* Write a function that finds the largest possible product of any three numbers
 * from an array.
 *
 * Example:
 * largestProductOfThree([2, 1, 3, 7]) === 42
 *
 * Extra credit: Make your function handle negative numbers.
 */

var largestProductOfThree = function(array) {
  if (array.length < 3) {
    return null;
  }

  array.sort((a, b) => a - b);

  const positiveProduct = array[0] * array[1] * array[array.length - 1];
  const negativeProduct = array[array.length - 1] * array[array.length - 2] * array[array.length - 3]

  return Math.max(positiveProduct, negativeProduct)
};

if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  module.exports.largestProductOfThree = largestProductOfThree;
} else {
  window.largestProductOfThree = largestProductOfThree;
}
