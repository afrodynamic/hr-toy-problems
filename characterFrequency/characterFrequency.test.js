const characterFrequency = require('./characterFrequency.js');

describe('characterFrequency', () => {
  test('should return correct frequency for mississippi', () => {
    expect(characterFrequency('mississippi')).toEqual([
      ['i', 4],
      ['s', 4],
      ['p', 2],
      ['m', 1]
    ]);
  });

  test('should return correct frequency for miaaiaaippi', () => {
    expect(characterFrequency('miaaiaaippi')).toEqual([
      ['a', 4],
      ['i', 4],
      ['p', 2],
      ['m', 1]
    ]);
  });

  test('should return correct frequency for mmmaaaiiibbb', () => {
    expect(characterFrequency('mmmaaaiiibbb')).toEqual([
      ['a', 3],
      ['b', 3],
      ['i', 3],
      ['m', 3]
    ]);
  });
});
