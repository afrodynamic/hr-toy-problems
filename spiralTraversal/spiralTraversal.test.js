const spiralTraversal = require('./spiralTraversal');

describe('spiralTraversal', () => {
  it('should return an empty array for an empty matrix', () => {
    expect(spiralTraversal([])).toEqual([]);
  });

  it('should return a flat array for a single-row matrix', () => {
    expect(spiralTraversal([[1, 2, 3, 4]])).toEqual([1, 2, 3, 4]);
  });

  it('should return a flat array for a single-column matrix', () => {
    expect(spiralTraversal([[1], [2], [3], [4]])).toEqual([1, 2, 3, 4]);
  });

  it('should return the elements in a spiral order for a square matrix', () => {
    const matrix = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9]
    ];
    expect(spiralTraversal(matrix)).toEqual([1, 2, 3, 6, 9, 8, 7, 4, 5]);
  });

  it('should return the elements in a spiral order for a rectangular matrix', () => {
    const matrix = [
      [1, 2, 3, 4],
      [5, 6, 7, 8],
      [9, 10, 11, 12]
    ];
    expect(spiralTraversal(matrix)).toEqual([1, 2, 3, 4, 8, 12, 11, 10, 9, 5, 6, 7]);
  });

  it('should handle a matrix with a single element', () => {
    expect(spiralTraversal([[42]])).toEqual([42]);
  });
});
