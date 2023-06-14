const isSubsetOf = require('./isSubsetOf.js');

describe('isSubsetOf', () => {
  it('should return true if context array is a subset of the input array', () => {
    expect(['commit', 'push'].isSubsetOf(['commit', 'rebase', 'push', 'blame'])).toBe(true);
    expect(['merge', 'reset', 'reset'].isSubsetOf(['reset', 'merge', 'add', 'commit'])).toBe(true);
  });

  it('should return true if context array with object/array elements is a subset of the input array', () => {
    const contextArray = ['commit', { name: 'push' }, ['item']];
    const inputArray = ['commit', { name: 'push' }, ['item'], 'rebase', 'blame'];

    expect(contextArray.isSubsetOf(inputArray)).toBe(true);
  });

  it('should return false if context array is not a subset of the input array', () => {
    expect(['commit', 'push'].isSubsetOf(['commit', 'rebase', 'blame'])).toBe(false);
    expect(['push', 'reset', 'reset'].isSubsetOf(['reset', 'merge', 'add', 'commit'])).toBe(false);
  });

  it('should return false if context array with object/array elements is not a subset of the input array', () => {
    const contextArray = ['commit', { name: 'push' }, ['item']];
    const inputArray = ['commit', { name: 'push' }, 'rebase', 'blame'];

    expect(contextArray.isSubsetOf(inputArray)).toBe(false);
  });
});
