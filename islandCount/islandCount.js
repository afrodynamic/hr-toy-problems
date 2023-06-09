/**
 * Given a string representation of a 2d map, return the number of islands in the map.
 * Land spaces are denoted by a zero, while water is denoted by a dot. Two land spaces
 * are considered connected if they are adjacent (but not diagonal).
 *
 */

function countIslands(mapStr) {
  const mapArray = mapStr.split('\n').map(row => row.split(''));

  const numRows = mapArray.length;
  const numCols = mapArray[0].length;

  let numberOfIslands = 0;

  const dfs = (row, col) => {
    if (row >= 0 && col >= 0 && row < numRows && col < numCols && mapArray[row][col] === '0') {
      mapArray[row][col] = '.';

      dfs(row - 1, col);
      dfs(row + 1, col);
      dfs(row, col - 1);
      dfs(row, col + 1);
    }
  }

  for (let row = 0; row < numRows; row++) {
    for (let col = 0; col < numCols; col++) {
      if (mapArray[row][col] === '0') {
        dfs(row, col);
        numberOfIslands++;
      }
    }
  }

  return numberOfIslands;
}

if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  module.exports = countIslands;
} else {
  window.countIslands = countIslands;
}
