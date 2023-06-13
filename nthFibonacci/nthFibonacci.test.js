const nthFibonacci = require('./nthFibonacci.js');

describe('nthFibonacci', () => {
  it('should return the correct Fibonacci number for n = 0', () => {
    expect(nthFibonacci(0)).toEqual(0);
  });

  it('should return the correct Fibonacci number for n = 1', () => {
    expect(nthFibonacci(1)).toEqual(1);
  });

  it('should return the correct Fibonacci number for n = 2', () => {
    expect(nthFibonacci(2)).toEqual(1);
  });

  it('should return the correct Fibonacci number for n = 3', () => {
    expect(nthFibonacci(3)).toEqual(2);
  });

  it('should return the correct Fibonacci number for n = 4', () => {
    expect(nthFibonacci(4)).toEqual(3);
  });

  it('should return the correct Fibonacci number for n = 5', () => {
    expect(nthFibonacci(5)).toEqual(5);
  });
});
