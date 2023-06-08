const robotPaths = require('./robotPaths.js');

describe('robotPaths', () => {
  test('it should return the correct number of paths for a 1x1 grid', () => {
    expect(robotPaths(1)).toBe(1);
  });

  test('it should return the correct number of paths for a 2x2 grid', () => {
    expect(robotPaths(2)).toBe(2);
  });

  test('it should return the correct number of paths for a 3x3 grid', () => {
    expect(robotPaths(3)).toBe(12);
  });

  test('it should return the correct number of paths for a 4x4 grid', () => {
    expect(robotPaths(4)).toBe(184);
  });

  test('it should return the correct number of paths for a 5x5 grid', () => {
    expect(robotPaths(5)).toBe(8512);
  });
});
