const commonCharacters = require('./commonCharacters.js');

describe('commonCharacters', function() {
  it('should return the common characters of two strings in order', function() {
    expect(commonCharacters('acexivou', 'aegihobu')).toBe('aeiou');
    expect(commonCharacters('abcd', 'efgh', 'ijkl')).toBe('');
  });

  it('should ignore spaces in the input strings', function() {
    expect(commonCharacters('test the spaces', 'testthe spaces')).toBe('teshpac');
  });

  it('should handle edge cases', function() {
    expect(commonCharacters('', 'abcd')).toBe('');
    expect(commonCharacters('abcd', '')).toBe('');
    expect(commonCharacters('', '')).toBe('');
  });
});
