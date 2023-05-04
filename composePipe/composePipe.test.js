const { compose, pipe } = require('./composePipe.js');

describe('composePipe', () => {
  describe('compose()', () => {
    test('should compose a list of functions from right to left', () => {
      const greet = function (name) {
        return 'hi: ' + name;
      };

      const exclaim = function (statement) {
        return statement.toUpperCase() + '!';
      };

      const welcome = compose(greet, exclaim);
      expect(welcome('phillip')).toBe('hi: PHILLIP!');
    });

    test('should work with any number of functions', () => {
      const add5 = function (number) {
        return number + 5;
      };

      const multiplyBy3 = function (number) {
        return number * 3;
      };

      const square = function (number) {
        return number * number;
      };

      const combine = compose(add5, multiplyBy3, square);
      expect(combine(2)).toBe(17);
    });
  });

  describe('pipe()', () => {
    test('should compose a series of functions from left to right', () => {
      const add2 = function (number) {
        return number + 2;
      };

      const multiplyBy3 = function (number) {
        return number * 3;
      };

      const result1 = pipe(add2, multiplyBy3)(5);
      expect(result1).toBe(21);

      const result2 = pipe(add2, multiplyBy3, multiplyBy3)(5);
      expect(result2).toBe(63);
    });

    test('should work with any number of functions', () => {
      const add5 = function (number) {
        return number + 5;
      };

      const multiplyBy3 = function (number) {
        return number * 3;
      };

      const square = function (number) {
        return number * number;
      };

      const combine = pipe(add5, multiplyBy3, square);
      expect(combine(2)).toBe(441);
    });
  });
});
