/*
 * Write a function that accepts a 2-dimensional array (that is, an array containing many same-length arrays),
 * and prints out every value found, but in a spiral from the upper left in to the center
 * Please write some form of specs, tests, or assertions for your code, and check as many edge cases as you can think of
 *
 * example:

    spiralTraversal([
      [1,2,3],
      [4,5,6],
      [7,8,9]
    ]);

    returns [1, 2, 3, 6, 9, 8, 7, 4, 5]
 */

var spiralTraversal = function(matrix) {
  var result = [];

  if (matrix.length === 0) {
    return result;
  }

  var topRow = 0;
  var bottomRow = matrix.length - 1;
  var leftCol = 0;
  var rightCol = matrix[0].length - 1;

  while (topRow <= bottomRow && leftCol <= rightCol) {
    for (var col = leftCol; col <= rightCol; col++) {
      result.push(matrix[topRow][col]);
    }

    topRow++;

    for (var row = topRow; row <= bottomRow; row++) {
      result.push(matrix[row][rightCol]);
    }

    rightCol--;

    if (topRow <= bottomRow) {
      for (var col = rightCol; col >= leftCol; col--) {
        result.push(matrix[bottomRow][col]);
      }

      bottomRow--;
    }

    if (leftCol <= rightCol) {
      for (var row = bottomRow; row >= topRow; row--) {
        result.push(matrix[row][leftCol]);
      }

      leftCol++;
    }
  }

  return result;
};

if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  module.exports = spiralTraversal;
} else {
  window.spiralTraversal = spiralTraversal;
}
