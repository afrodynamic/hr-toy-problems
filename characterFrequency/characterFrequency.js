/*
 *  Write a function that takes as its input a string and returns an array of
 *  arrays as shown below sorted in descending order by frequency and then by
 *  ascending order by character.
 *
 *       :: Example ::
 *
 *  characterFrequency('mississippi') ===
 *  [
 *    ['i', 4],
 *    ['s', 4],
 *    ['p', 2],
 *    ['m', 1]
 *  ]
 *
 *       :: Example2 ::
 *
 *  characterFrequency('miaaiaaippi') ===
 *  [
 *    ['a', 4],
 *    ['i', 4],
 *    ['p', 2],
 *    ['m', 1]
 *  ]
 *
 *       :: Example3 ::
 *
 *  characterFrequency('mmmaaaiiibbb') ===
 *  [
 *    ['a', 3],
 *    ['b', 3],
 *    ['i', 3],
 *    ['m', 3]
 *  ]
 *
 */

var characterFrequency = function(string) {
  let frequency = {};

  for(let i = 0; i < string.length; i++) {
    let char = string[i];
    frequency[char] = (frequency[char] || 0) + 1;
  }

  let result = Object.keys(frequency).map(char => [char, frequency[char]]);

  result.sort((a, b) => {
    if(a[1] === b[1]) {
      return a[0].localeCompare(b[0]);
    } else {
      return b[1] - a[1];
    }
  });

  return result;
};

if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  module.exports = characterFrequency;
} else {
  window.characterFrequency = characterFrequency;
}
