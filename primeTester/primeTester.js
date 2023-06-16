/**
 * A prime number is a whole number that has no other divisors other than
 * itself and 1. Write a function that accepts a number and returns true if it's
 * a prime number, false if it's not.
 */

var primeTester = function(n) {
  if (n === 2) {
    return true;
  }

  if (typeof n !== 'number' || n < 1 || n % 1 !== 0 || n <= 1 || n % 2 === 0) {
    return false;
  }

  let sqrt = Math.sqrt(n);

  for (let i = 3; i <= sqrt; i += 2) {
    if (n % i === 0) return false;
  }

  return true;
};

/* Extra credit: Write a function that generates a list of all prime numbers
 * in a user-specified range (inclusive). If you're not quite sure where to start,
 * check out the Sieve of Eratosthenes on Wikipedia. (And if you're feeling
 * saucy, check out the Sieve of Atkin.)
 */

var primeSieve = function (start, end) {
  let primes = Array(end + 1).fill(true);
  primes[0] = primes[1] = false;

  for (let i = 2; i * i <= end; i++) {
    if (primes[i]) {
      for (let j = i * i; j <= end; j += i) {
        primes[j] = false;
      }
    }
  }

  let result = [];

  for (let i = start; i <= end; i++) {
    if (primes[i]) result.push(i);
  }

  return result;
};

if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  module.exports.primeTester = primeTester;
  module.exports.primeSieve = primeSieve;
} else {
  window.primeTester = primeTester;
  window.primeSieve = primeSieve;
}
