/**
 * Given a single input string, write a function that produces all possible anagrams
 * of a string and outputs them as an array. At first, don't worry about
 * repeated strings.  What time complexity is your solution?
 *
 * Extra credit: Deduplicate your return array without using uniq().
 */

/**
  * example usage:
  * var anagrams = allAnagrams('abc');
  * console.log(anagrams); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
  */

var allAnagrams = function(string) {
  const result = new Set();

  if (string.length === 1) {
    result.add(string);
    return Array.from(result);
  }

  for (let i = 0; i < string.length; i++) {
    const char = string[i];
    const remaining = string.slice(0, i) + string.slice(i + 1);
    const permutations = allAnagrams(remaining);

    for (let perm of permutations) {
      result.add(char + perm);
    }
  }

  return Array.from(result);
};

if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  module.exports = allAnagrams;
} else {
  window.allAnagrams = allAnagrams;
}
