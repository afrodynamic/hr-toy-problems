/*
 * Given a sorted array, find the index of an element
 * using a binary search algorithm.
 *
 * Example usage:
 *
 * var index = binarySearch([1, 2, 3, 4, 5], 4);
 * console.log(index); // 3
 * var index = binarySearch([1, 2, 3, 4, 5], 8);
 * console.log(index); // null
 */

const binarySearch = (array, target) => {
  let left = 0;
  let right = array.length - 1;
  let mid;

  while (left <= right) {
    mid = Math.floor((left + right) / 2);

    if (array[mid] === target) {
      return mid;
    } else if (array[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return null;
};

if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  module.exports = binarySearch;
} else {
  window.binarySearch = binarySearch;
}
