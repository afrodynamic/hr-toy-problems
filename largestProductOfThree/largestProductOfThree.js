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

  array.sort((a, b) => b - a);

  return array[0] * array[1] * array[2];
};

if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  module.exports.largestProductOfThree = largestProductOfThree;
} else {
  window.largestProductOfThree = largestProductOfThree;
}
