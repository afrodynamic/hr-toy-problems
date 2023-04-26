const Tree = require('./treeCountLeaves.js');

describe('treeCountLeaves', function() {
  test('should count the leaves on the tree', () => {
    const root = new Tree();

    expect(root.countLeaves()).toEqual(1);

    root.addChild(new Tree());
    expect(root.countLeaves()).toEqual(1);

    root.addChild(new Tree());
    root.children[0].addChild(new Tree());
    root.children[0].addChild(new Tree());
    root.children[0].children[0].addChild(new Tree());
    expect(root.countLeaves()).toEqual(3);
  });
});
