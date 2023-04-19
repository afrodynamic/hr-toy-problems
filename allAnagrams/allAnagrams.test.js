const allAnagrams = require('./allAnagrams.js');

describe('allAnagrams', function() {
  test('should return all anagrams of a given string', function() {
    var result = allAnagrams('abc');
    var expected = [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ];
    expect(result).toEqual(expect.arrayContaining(expected));
  });
});
