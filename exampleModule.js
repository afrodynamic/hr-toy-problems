const arithmetic = {
  add: function(a,b) {
      return a + b;
  },

  multiply: function(a,b) {
      return a * b;
  }
}

// we need this for this code to run in
// different execution environments (node & browser)
if (module === undefined) {
  var module = {}
}

module.exports = arithmetic;
