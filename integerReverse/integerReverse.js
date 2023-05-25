/*
*
* Integer Reverse
*
* Given a positive integer, return its digits reversed.
*
* - DO NOT CONVERT THE INPUT INTO A STRING OR ARRAY.
* - Only use integers and math in your solution.
*
*/

function reverseInteger(number) {
  let isNegative = number < 0;
  number = Math.abs(number);
  let result = 0;

  while (number !== 0) {
    result = (result * 10) + (number % 10);
    number = Math.floor(number / 10);
  }

  return isNegative ? -result : result;
}

if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  module.exports = reverseInteger;
} else {
  window.reverseInteger = reverseInteger;
}
