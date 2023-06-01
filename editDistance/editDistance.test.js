const editDistance = require('./editDistance.js');

describe('editDistance', () => {
  it('returns 0 for identical strings', () => {
    expect(editDistance('abc', 'abc')).toBe(0);
    expect(editDistance('', '')).toBe(0);
  });

  it('returns the correct number of operations for different strings', () => {
    expect(editDistance('dog', 'cat')).toBe(3);
    expect(editDistance('monday', 'tuesday')).toBe(4);
    expect(editDistance('hello', 'world')).toBe(4);
  });

  it('handles empty strings', () => {
    expect(editDistance('abc', '')).toBe(3);
    expect(editDistance('', 'abc')).toBe(3);
  });
});
