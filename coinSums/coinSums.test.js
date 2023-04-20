var makeChange = require('./coinSums.js');

describe.only('makeChange', function() {
  it('should return 1 for 1p', () => {
    expect(makeChange(1)).toEqual(1);
  });

  it('should return 2 for 2p', () => {
    expect(makeChange(2)).toEqual(2);
  });

  it('should return correct number of ways to make change', () => {
    expect(makeChange(5)).toEqual(4);
    expect(makeChange(10)).toEqual(11);
    expect(makeChange(20)).toEqual(41);
    expect(makeChange(50)).toEqual(451);
    expect(makeChange(100)).toEqual(4563);
    expect(makeChange(200)).toEqual(73682);
  });
});
