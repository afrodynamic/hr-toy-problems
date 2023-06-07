const Tree = require('./commonAncestor.js');

describe('Tree', () => {
  let grandma, mom, me, cousin;

  beforeEach(() => {
    greatGrandma = new Tree();
    grandma = new Tree();
    mom = new Tree();
    me = new Tree();
    cousin = new Tree();
    aunt = new Tree();
    greatGrandma.addChild(grandma);
    grandma.addChild(mom);
    grandma.addChild(aunt);
    mom.addChild(me);
    aunt.addChild(cousin);
  });

  describe('getClosestCommonAncestor', () => {
    it('should return the closest common ancestor of two nodes', () => {
      expect(grandma.getClosestCommonAncestor(me, cousin)).toBe(grandma);
      expect(grandma.getClosestCommonAncestor(me, mom)).toBe(mom);
      expect(grandma.getClosestCommonAncestor(me, cousin)).toBe(grandma);
    });

    it('should return null if one of the nodes is not a descendant', () => {
      const anotherNode = new Tree();
      expect(grandma.getClosestCommonAncestor(me, anotherNode)).toBeNull();
    });
  });

  describe('getAncestorPath', () => {
    it('should return the ancestor path of a node', () => {
      expect(greatGrandma.getAncestorPath(me)).toEqual([greatGrandma, grandma, mom, me]);
      expect(grandma.getAncestorPath(me)).toEqual([grandma, mom, me]);
      expect(mom.getAncestorPath(me)).toEqual([mom, me]);
      expect(me.getAncestorPath(me)).toEqual([me]);
    });

    it('should return null if the node is not a descendant', () => {
      const anotherNode = new Tree();
      expect(grandma.getAncestorPath(anotherNode)).toBeNull();
    });
  });

  describe('addChild', () => {
    it('should add a child node', () => {
      const child = new Tree();
      mom.addChild(child);
      expect(mom.children).toContain(child);
    });

    it('should throw an error if the child is already a child of the tree', () => {
      expect(() => mom.addChild(me)).toThrowError('That child is already a child of this tree');
    });
  });

  describe('isDescendant', () => {
    it('should return true if the node is a descendant', () => {
      expect(grandma.isDescendant(me)).toBe(true);
    });

    it('should return false if the node is not a descendant', () => {
      const anotherNode = new Tree();
      expect(grandma.isDescendant(anotherNode)).toBe(false);
    });
  });

  describe('removeChild', () => {
    it('should remove an immediate child node', () => {
      mom.removeChild(me);
      expect(mom.children).not.toContain(me);
    });

    it('should throw an error if the node is not an immediate child of the tree', () => {
      const child = new Tree();
      expect(() => mom.removeChild(child)).toThrowError('That node is not an immediate child of this tree');
    });
  });
});
