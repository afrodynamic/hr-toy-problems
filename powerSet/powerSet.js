/*
 * Return an array with the power set of a given string.
 * Definition of power set: The set of all possible subsets including the empty set.
 *
 * Example:
 *
 * powerSet("abc")
 * -> [ '' , 'a', 'b', 'c', 'ab', 'ac', 'bc', 'abc' ]
 *
 * Note:
 *  1. All characters in a subset should be sorted.
 *  2. Sets of the same characters are considered duplicates regardless of order and count only once, e.g. 'ab' and 'ba' are the same.
 *
 * Example 2 :
 *
 * powerSet("jump")
 * -> ["", "j", "ju", "jm", "jp", "jmu", "jmp", "jpu", "jmpu", "u", "m", "p", "mu", "mp", "pu", "mpu"]
 */

var powerSet = function(str) {
  const set = new Set();

  const recurse = (index, subset) => {
    subset = Array.from(new Set(subset.split(''))).join('');
    set.add(subset.split('').sort().join(''));

    for (let i = index; i < str.length; i++) {
      recurse(i + 1, subset + str[i]);
    }
  };

  recurse(0, '');

  return Array.from(set);
};



if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  module.exports = powerSet;
} else {
  window.powerSet = powerSet;
}
