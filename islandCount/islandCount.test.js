const countIslands = require('./islandCount.js');

describe('numberOfIslands', () => {
  it('normal grid has islands', () => {
    const testGrid =
      "..000\n" +
      "..000\n" +
      "00.00\n" +
      "000.."


    expect(countIslands(testGrid)).toEqual(2);

     var inputs = ['.0...\n.00..\n....0', '..000.\n..000.\n..000.\n.0....\n..000.', '..000.\n..0...\n..0.0.\n..0...\n..000.', '0....0\n......\n..00..\n......\n0....0', '00...0\n0...00\n......\n0.0.0.\n0.....', '0...0\n0...0\n00000', '0...0\n..0..\n0...0', '.', '0', '...\n..0\n.00', '.....\n..0..\n.000.\n..0..\n.....', '00..00\n..00..\n00..00\n..00..'];
    var outputs = [2, 3, 2, 5, 5, 1, 5, 0, 1, 1, 1, 6];

    inputs.forEach(function (input, i) {
      expect(countIslands(input)).toEqual(outputs[i]);
    });
  })

  it('should return 0 for no islands', () => {
    const testGrid =
      ".....\n" +
      ".....\n" +
      ".....\n" +
      "....."

    expect(countIslands(testGrid)).toEqual(0);
  })
})
