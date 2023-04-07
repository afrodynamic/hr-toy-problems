/**
 * Write a stack using your preferred instantiation pattern. Implement a min function
 * that returns the minimum value of all the elements in the stack in constant time.stack.

 * All of the functions in the Stack should run in constant time!
 *
 * var example = new Stack()
 *  example.push(4)
 *  example.push(3)
 *  example.min() === 3
 *  example.push(3)
 *  example.push(2)
 *  example.push(2)
 *  example.min() === 2
 */

/**
  * Stack Class
  */
  var Stack = function() {
    var stack = [];
    var minValue = null;

    // add an item to the top of the stack
    this.push = function(value) {
      if (!minValue || value < minValue) {
        minValue = value;
      }

      stack.push(value);
    };

    // remove an item from the top of the stack
    this.pop = function() {
      if (stack[stack.length - 1] === minValue) {
        minValue = undefined;
      }
      return stack.pop();
    };

    // return the number of items in the stack
    this.size = function() {
      return stack.length;
    };

    // return the minimum value in the stack
    this.min = function() {
      return minValue;
    };
  };

if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  module.exports = Stack;
} else {
  window.Stack = Stack;
}
