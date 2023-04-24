const Tree = require('./treeDFSelect.js');

describe('treeDFSelect', function() {
  test('should return an array containing the values of all nodes with a matching filter', () => {
    const root1 = new Tree(1);
    const branch2 = root1.addChild(2);
    const branch3 = root1.addChild(3);
    const leaf4 = branch2.addChild(4);
    const leaf5 = branch2.addChild(5);
    const leaf6 = branch3.addChild(6);
    const leaf7 = branch3.addChild(7);

    expect(root1.DFSelect((value, depth) => value % 2)).toEqual([1, 5, 3, 7]);

    expect(root1.DFSelect((value, depth) => depth === 1)).toEqual([2, 3]);
  });
});
