const islandCount = require('./islandCount.js');

describe('numberOfIslands', () => {
  it('normal grid has islands', () => {
    const testGrid = [
      [".",".","0","0","0"],
      [".",".","0","0","0"],
      ["0","0",".","0","0"],
      ["0","0","0",".","."]
    ]

    expect(islandCount(testGrid)).toEqual(3);
  })

  it('should return 0 for no islands', () => {
    const testGrid = [
      ["0","0","0","0","0"],
      ["0","0","0","0","0"],
      ["0","0","0","0","0"],
      ["0","0","0","0","0"]
    ]
    expect(islandCount(testGrid)).toEqual(0);
  })
})
