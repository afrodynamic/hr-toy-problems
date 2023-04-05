/*
 * Find the first item that occurs an even number of times in an array.
 * Remember to handle multiple even-occurrence items and return the first one.
 * Return null if there are no even-occurrence items.
*/

/*
 * example usage:
 * var onlyEven = evenOccurrence([1, 7, 2, 4, 5, 6, 8, 9, 6, 4]);
 * console.log(onlyEven); //  4
*/

var evenOccurrence = function (arr) {
  var count = {};
  var index = {};

  for (var i = 0; i < arr.length; i++) {
    var item = arr[i];

    count[item] = (count[item] || 0) + 1;

    if (count[item] === 1) {
      index[item] = i;
    }
  }

  for (var key in count) {
    if (
      count.hasOwnProperty(key) &&
      count[key] % 2 === 0 &&
      index[key] !== undefined
    ) {
      return arr[index[key]];
    }
  }

  return null;
};

if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  module.exports = evenOccurrence;
} else {
  window.evenOccurrence = evenOccurrence;
}
