const { bind, bindPrototype } = require('./functionBind.js');

describe('functionBind', () => {
  describe('bind()', () => {
    test('should bind a function to a context when passed as an argument', () => {
      const alice = {
        name: 'alice',
        shout: function () {
          return this.name;
        }
      };

      const boundShout = bind(alice.shout, alice);
      expect(boundShout()).toBe('alice');

      const boundShout2 = bind(alice.shout, { name: 'bob' });
      expect(boundShout2()).toBe('bob');
    });

    test('should bind a function to a context when called as a method', () => {
      const func = function (a, b) { return a + b; };
      const boundFunc = bind(func, null, 'foo');
      const result = boundFunc('bar');
      expect(result).toBe('foobar');
    });
  });

  describe('Function.prototype.bind', () => {
    test('should bind a function to a context when called as a method', () => {
      const alice = {
        name: 'alice',
        shout: function () {
          return this.name;
        }
      };

      const boundShout = alice.shout.bind(alice);
      expect(boundShout()).toBe('alice');

      const boundShout2 = alice.shout.bind({ name: 'bob' });
      expect(boundShout2()).toBe('bob');
    });

    test('should bind a function to a context with arguments when called as a method', () => {
      const func = function (a, b) { return a + b; };
      const boundFunc = func.bind(null, 'foo');
      const result = boundFunc('bar');
      expect(result).toBe('foobar');
    });
  });
});
