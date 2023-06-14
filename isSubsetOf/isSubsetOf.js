/*
 * Make an array method that can return whether or not a context array is a
 * subset of an input array.  To simplify the problem, you can assume that neither
 * array will contain objects or arrays as elements within them.
 *
 *
 * var a = ['commit','push']
 * a.isSubsetOf(['commit','rebase','push','blame']) // true
 *
 * NOTE: You should disregard duplicates in the set.
 *
 * var b = ['merge','reset','reset']
 *
 * b.isSubsetOf(['reset','merge','add','commit']) // true
 *
 * See http://en.wikipedia.org/wiki/Subset for more on the definition of a
 * subset.
*/

/*
 * Extra credit: Make the method work for arrays that contain objects and/or arrays as elements.
*/

const deepEqual = (a, b) => {
  if (a === b) {
    return true;
  }

  if (typeof a !== 'object' || typeof b !== 'object' || a === null || b === null) {
    return false;
  }

  const keysA = Object.keys(a);
  const keysB = Object.keys(b);

  if (keysA.length !== keysB.length) {
    return false;
  }

  for (let key of keysA) {
    if (!keysB.includes(key) || !deepEqual(a[key], b[key])) {
      return false;
    }
  }

  return true;
}

Array.prototype.isSubsetOf = function (arr) {
  const set = new Set(arr);
  const uniqueContext = Array.from(new Set(this));

  return uniqueContext.every((item) => {
    if (Array.isArray(item) || typeof item === 'object') {
      return Array.from(set).some((element) => deepEqual(element, item));
    }
    return set.has(item);
  });
};

if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  module.exports = Array.prototype.isSubsetOf;
} else {
  window.Array.prototype.isSubsetOf = Array.prototype.isSubsetOf;
}
