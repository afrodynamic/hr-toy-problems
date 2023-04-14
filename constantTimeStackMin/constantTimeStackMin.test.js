var Stack = require('./constantTimeStackMin.js');

describe.only('constantTimeStackMin', function() {
  beforeEach(function() {
    stack = new Stack();
  });

  test('Should handle push method correctly', function() {
    stack.push(4);
    stack.push(3);
    expect(stack.size()).toEqual(2);
  });

  test('Should handle pop method correctly', function() {
    stack.push(4);
    stack.push(3);
    expect(stack.pop()).toEqual(3);
    expect(stack.size()).toEqual(1);
  });

  test('Should handle size method correctly', function() {
    stack.push(4);
    stack.push(3);
    expect(stack.size()).toEqual(2);
  });

  test('Should handle min method correctly', function() {
    stack.push(200);
    expect(stack.min()).toBe(200);

    stack.push(100);
    expect(stack.min()).toBe(100);

    stack.pop();
    expect(stack.min()).toBe(200);

    stack.push(50);
    stack.push(50);
    expect(stack.min()).toBe(50);

    stack.pop();
    expect(stack.min()).toBe(50);
  });
});
