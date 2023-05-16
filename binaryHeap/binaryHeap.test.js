const BinaryHeap = require('./binaryHeap.js');

describe('binaryHeap', () => {
  let binaryHeap;

  beforeEach(() => {
    binaryHeap = new BinaryHeap();
  });

  describe('compareFn', () => {
    test('should create a min heap by default', () => {
      binaryHeap.insert(5);
      binaryHeap.insert(10);
      binaryHeap.insert(4);
      binaryHeap.insert(8);
      expect(binaryHeap.getRoot()).toBe(4);
    });

    test('should create a max heap if the compareFn is reversed', () => {
      binaryHeap = new BinaryHeap((a, b) => a > b);
      binaryHeap.insert(5);
      binaryHeap.insert(10);
      binaryHeap.insert(4);
      binaryHeap.insert(8);
      expect(binaryHeap.getRoot()).toBe(10);
    });
  });

  describe('insert', () => {
    test('should insert nodes into the heap in the correct order', () => {
      binaryHeap.insert(5);
      binaryHeap.insert(10);
      binaryHeap.insert(4);
      binaryHeap.insert(8);
      expect(binaryHeap.getRoot()).toBe(4);
    });
  });

  describe('removeRoot', () => {
    test('should remove the root node and reorganize the heap', () => {
      binaryHeap.insert(5);
      binaryHeap.insert(10);
      binaryHeap.insert(4);
      binaryHeap.insert(8);
      expect(binaryHeap.removeRoot()).toBe(4);
      expect(binaryHeap.getRoot()).toBe(5);
    });

    test('should return undefined if the heap is empty', () => {
      expect(binaryHeap.removeRoot()).toBeUndefined();
    });
  });

  describe('heapSort', () => {
    test('should sort an array of numbers in ascending order', () => {
      const arr = [5, 10, 4, 8];
      expect(binaryHeap.heapSort(arr)).toEqual([4, 5, 8, 10]);
    });

    test('should sort array of numbers in descending order if the compareFn is reversed', () => {
      const arr = [5, 10, 4, 8];
      expect(binaryHeap.heapSort(arr, (a, b) => a > b)).toEqual([10, 8, 5, 4]);
    });
  })
});
