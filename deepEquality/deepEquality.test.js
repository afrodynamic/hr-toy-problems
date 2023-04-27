const deepEquals = require('./deepEquality.js');

describe('deepEquals', function() {
  test('should return true if the objects are deeply equal', () => {
    const apple = { a: 1, b: { c: 3 } };
    const orange = { a: 1, b: { c: 3 } };
    expect(deepEquals(apple, orange)).toEqual(true);
  });

  test('should return false if the objects are not deeply equal', () => {
    const apple = { a: 1, b: { c: 5 } };
    const orange = { a: 1, b: { c: 6 } };
    expect(deepEquals(apple, orange)).toEqual(false);
  });
});
