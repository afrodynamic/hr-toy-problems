/**
 * Write a function that, given a string, Finds the longest run of identical
 * characters and returns an array containing the start and end indices of
 * that run. If there are two runs of equal length, return the first one.
 * For example:
 *
 *   longestRun("abbbcc") // [1, 3]
 *   longestRun("aabbc")  // [0, 1]
 *   longestRun("abcd")   // [0, 0]
 *   longestRun("")       // null
 *
 * Try your function with long, random strings to make sure it handles large
 * inputs well.
 */

var longestRun = function (string) {
  if (string.length === 0) {
    return null;
  }

  let longestRunStart = 0;
  let longestRunLength = 1;

  let currentRunStart = 0;

  for (let i = 1; i < string.length; i++) {
    if (string[i] !== string[i-1]) {
      let currentRunLength = i - currentRunStart;
      if (currentRunLength > longestRunLength) {
        longestRunStart = currentRunStart;
        longestRunLength = currentRunLength;
      }
      currentRunStart = i;
    }
  }

  let currentRunLength = string.length - currentRunStart;
  if (currentRunLength > longestRunLength) {
    longestRunStart = currentRunStart;
    longestRunLength = currentRunLength;
  }

  return [longestRunStart, longestRunStart + longestRunLength - 1];
};

var randomString = function (len) {
  var text = '';
  var possible = 'abcdefghijklmnopqrstuvwxyz';

  for (var i = 0; i < len; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }

  return text;
};

if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  module.exports.longestRun = longestRun;
  module.exports.randomString = randomString;
} else {
  window.longestRun = longestRun;
  window.randomString = randomString;
}
