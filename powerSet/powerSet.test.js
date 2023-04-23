const powerSet = require('./powerSet.js');

describe('powerSet', function() {
  it('should return an array containing the power set of the input string', () => {
    expect(powerSet('abc')).toEqual(expect.arrayContaining(['', 'a', 'ab', 'abc', 'ac', 'b', 'bc', 'c']));
    expect(powerSet('jump')).toEqual(expect.arrayContaining(['', 'j', 'ju', 'jm', 'jp', 'jmu', 'jmp', 'jpu', 'jmpu', 'u', 'm', 'p', 'mu', 'mp', 'pu', 'mpu']));
  });

  it('should return an array with a single empty string for an empty input string', () => {
    expect(powerSet('')).toEqual(['']);
  });

  it('should remove duplicate sets from the output array', () => {
    expect(powerSet('aba')).toEqual(expect.arrayContaining(['', 'a', 'b', 'ab']));
    expect(powerSet('bbbaaa')).toEqual(expect.arrayContaining(['', 'a', 'b', 'ab']));
  });
});
