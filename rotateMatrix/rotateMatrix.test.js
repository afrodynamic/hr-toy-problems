const rotateMatrix = require('./rotateMatrix.js');

describe('rotateMatrix', () => {
  it('should rotate a 2x2 matrix clockwise', () => {
    const matrix = [
      [1, 2],
      [3, 4],
    ];
    const rotatedMatrix = rotateMatrix(matrix);
    expect(rotatedMatrix).toEqual([
      [3, 1],
      [4, 2],
    ]);
  });

  it('should rotate a 4x4 matrix clockwise', () => {
    const matrix = [
      [1, 2, 3, 4],
      [5, 6, 7, 8],
      [9, 'A', 'B', 'C'],
      ['D', 'E', 'F', 'G'],
    ];
    const rotatedMatrix = rotateMatrix(matrix);
    expect(rotatedMatrix).toEqual([
      ['D', 9, 5, 1],
      ['E', 'A', 6, 2],
      ['F', 'B', 7, 3],
      ['G', 'C', 8, 4],
    ]);
  });

  it('should rotate a rectangular matrix clockwise', () => {
    const matrix = [
      [1, 2, 3],
      [4, 5, 6],
    ];
    const rotatedMatrix = rotateMatrix(matrix);
    expect(rotatedMatrix).toEqual([
      [4, 1],
      [5, 2],
      [6, 3],
    ]);
  });

  it('should rotate a 2x2 matrix counterclockwise', () => {
    const matrix = [
      [1, 2],
      [3, 4],
    ];
    const rotatedMatrix = rotateMatrix(matrix, -1);
    expect(rotatedMatrix).toEqual([
      [2, 4],
      [1, 3],
    ]);
  });

  it('should rotate a 4x4 matrix counterclockwise', () => {
    const matrix = [
      [1, 2, 3, 4],
      [5, 6, 7, 8],
      [9, 'A', 'B', 'C'],
      ['D', 'E', 'F', 'G'],
    ];
    const rotatedMatrix = rotateMatrix(matrix, -1);
    expect(rotatedMatrix).toEqual([
      [4, 8, 'C', 'G'],
      [3, 7, 'B', 'F'],
      [2, 6, 'A', 'E'],
      [1, 5, 9, 'D'],
    ]);
  });

  it('should rotate a rectangular matrix counterclockwise', () => {
    const matrix = [
      [1, 2, 3],
      [4, 5, 6],
    ];
    const rotatedMatrix = rotateMatrix(matrix, -1);
    expect(rotatedMatrix).toEqual([
      [3, 6],
      [2, 5],
      [1, 4],
    ]);
  });
});
