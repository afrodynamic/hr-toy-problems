/**
 * Write a function `f(a, b)` which takes two strings as arguments and returns a
 * string containing the characters found in both strings (without duplication), in the
 * order that they appeared in `a`. Remember to skip spaces and characters you
 * have already encountered!
 *
 * Example: commonCharacters('acexivou', 'aegihobu')
 * Returns: 'aeiou'
 *
 * Extra credit: Extend your function to handle more than two input strings.
 */



var commonCharacters = function() {
  var args = Array.prototype.slice.call(arguments);
  var result = '';
  var usedChars = {};
  var firstString = args[0];

  for (var i = 0; i < firstString.length; i++) {
    var char = firstString[i];

    if (char === ' ' || usedChars[char]) {
      continue;
    }

    if (args.every(function (str) {
      return str.indexOf(char) !== -1;
    })) {
      result += char;
      usedChars[char] = true;
    }
  }

  return result;
};


if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  module.exports = commonCharacters;
} else {
  window.commonCharacters = commonCharacters;
}
