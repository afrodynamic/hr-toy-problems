/**
 * Given a string representation of a 2d map, return the number of islands in the map.
 * Land spaces are denoted by a zero, while water is denoted by a dot. Two land spaces
 * are considered connected if they are adjacent (but not diagonal).
 *
 */

function countIslands(mapStr) {
  if (!mapStr || mapStr.length === 0 || mapStr[0].length === 0) {
    return 0;
  }

  const rows = mapStr.length;
  const cols = mapStr[0].length;
  let count = 0;

  const dfs = (x, y) => {
    if (x < 0 || y < 0 || x >= rows || y >= cols || mapStr[x][y] === '0') {
      return;
    }

    mapStr[x][y] = '0';

    dfs(x - 1, y);
    dfs(x + 1, y);
    dfs(x, y - 1);
    dfs(x, y + 1);
  }

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (mapStr[i][j] === '.') {
        count++;
        dfs(i, j);
      }
    }
  }

  return count;
}

if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  module.exports = countIslands;
} else {
  window.countIslands = countIslands;
}
