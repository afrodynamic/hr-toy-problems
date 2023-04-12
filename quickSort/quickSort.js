/**
 * quickSort is a sorting algorithm that uses a divide and conquer strategy;
 *
 * It:
 *    Takes in an array.
 *    Picks a value in the array as a pivot.
 *    Partitions all the elements of the array into two arrays, based on
 *      if they are larger or smaller than the pivot.
 *    Recursively sorts the two halves.
 *    Combines the two arrays and the pivot into a sorted array.
 */


var quickSort = function(array) {
  if (array.length <= 1) {
    return array;
  }

  var pivot = array[0];
  var left = [];
  var right = [];

  for (var i = 1; i < array.length; i++) {
    if (array[i] < pivot) {
      left.push(array[i]);
    } else {
      right.push(array[i]);
    }
  }

  return quickSort(left).concat([pivot], quickSort(right));
};


if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  module.exports = quickSort;
} else {
  window.quickSort = quickSort;
}
