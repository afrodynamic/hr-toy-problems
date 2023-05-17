const Range = require('./rangeClass.js');

describe('Range', () => {
  describe('size()', () => {
    test('should return the number of items in the range', () => {
      var range1 = new Range(1, 5);
      expect(range1.size()).toBe(5);

      var range2 = new Range(10);
      expect(range2.size()).toBe(1);

      var range3 = new Range(5, 1, -1);
      expect(range3.size()).toBe(5);
    });
  });

  describe('each()', () => {
    test('should iterate over the range and invoke the callback', () => {
      var range = new Range(2, 8, 2);
      var callback = jest.fn();

      range.each(callback);

      expect(callback).toHaveBeenCalledTimes(4);
      expect(callback).toHaveBeenNthCalledWith(1, 2);
      expect(callback).toHaveBeenNthCalledWith(2, 4);
      expect(callback).toHaveBeenNthCalledWith(3, 6);
      expect(callback).toHaveBeenNthCalledWith(4, 8);
    });
  });

  describe('includes()', () => {
    test('should return true if the range includes the value', () => {
      var range1 = new Range(0, 10, 2);
      expect(range1.includes(2)).toBe(true);
      expect(range1.includes(3)).toBe(false);
      expect(range1.includes(10)).toBe(true);

      var range2 = new Range(5, 1, -1);
      expect(range2.includes(5)).toBe(true);
      expect(range2.includes(0)).toBe(false);
      expect(range2.includes(1)).toBe(true);
    });
  });
});
