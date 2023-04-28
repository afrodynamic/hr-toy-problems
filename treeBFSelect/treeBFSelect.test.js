const Tree = require('./treeBFSelect.js');

describe('deepEquals', function() {
  test('should return array of values for which the function filter(value, depth) returns true', () => {
    var root1 = new Tree(1);
    var branch2 = root1.addChild(2);
    var branch3 = root1.addChild(3);
    var leaf4 = branch2.addChild(4);
    var leaf5 = branch2.addChild(5);
    var leaf6 = branch3.addChild(6);
    var leaf7 = branch3.addChild(7);

    expect(root1.BFSelect(function(value, depth) {
      return value % 2;
    })).toEqual([1, 3, 5, 7]);

    expect(root1.BFSelect(function(value, depth) {
      return depth === 1;
    })).toEqual([2, 3]);
  });
});
