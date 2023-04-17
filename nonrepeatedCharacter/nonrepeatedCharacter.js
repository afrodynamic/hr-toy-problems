/**
 * Given an arbitrary input string, return the first nonrepeated character in
 * the string. For example:
 *
 *   firstNonRepeatedCharacter('ABA'); // => 'B'
 *   firstNonRepeatedCharacter('AACBDB'); // => 'C'
 */

var firstNonRepeatedCharacter = function(string) {
  var charCount = {};

  for (var i = 0; i < string.length; i++) {
    var char = string[i];
    if (charCount[char] === undefined) {
      charCount[char] = 1;
    } else {
      charCount[char]++;
    }
  }

  for (var key in charCount) {
    if (charCount[key] === 1) {
      return key;
    }
  }

  return null;
};

if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  module.exports = firstNonRepeatedCharacter;
} else {
  window.firstNonRepeatedCharacter = firstNonRepeatedCharacter;
}
