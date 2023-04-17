const firstNonRepeatedCharacter = require('./nonrepeatedCharacter.js');

describe.only('firstNonRepeatedCharacter', function() {
  test('should return the first nonrepeated character', function() {
    expect(firstNonRepeatedCharacter('ABA')).toBe('B');
    expect(firstNonRepeatedCharacter('AACBDB')).toBe('C');
  });
});
