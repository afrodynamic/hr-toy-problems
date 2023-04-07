/**
 * Create a hash table with `insert()`, `retrieve()`, and `remove()` methods.
 * Be sure to handle hashing collisions correctly.
 * Set your hash table up to double the storage limit as
 * soon as the total number of items stored is greater than
 * 3/4th of the number of slots in the storage array.
 * Resize by half whenever utilization drops below 1/4.
 */

// This is a "hashing function". You don't need to worry about it, just use it
// to turn any string into an integer that is well-distributed between
// 0 and max - 1
var getIndexBelowMaxForKey = function(str, max) {
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = (hash << 5) + hash + str.charCodeAt(i);
    hash = hash & hash; // Convert to 32bit integer
    hash = Math.abs(hash);
  }
  return hash % max;
};

var makeHashTable = function() {
  var hashTable = {};

  hashTable.storage = [];
  hashTable.storageLimit = 4;
  hashTable.size = 0;
  hashTable.isResizing = false;

  for (var i = 0; i < hashTable.storageLimit; i++) {
    hashTable.storage.push([]);
  }

  var insertIntoBucket = function(hashTable, bucket, k, v, isResizing) {
    var found = false;

    for (var i = 0; i < bucket.length; i++) {
      var tuple = bucket[i];

      if (tuple[0] === k) {
        tuple[1] = v;
        found = true;

      }
    }

    if (!found) {
      bucket.push([k, v]);

      if (!hashTable.isResizing) {
        hashTable.size++;
      }
    }
  };

  hashTable.insert = function(k, v) {
    var index = getIndexBelowMaxForKey(k, this.storageLimit);
    var bucket = this.storage[index];

    if (bucket === undefined) {
      bucket = [];
      this.storage[index] = bucket;
    }

    insertIntoBucket(this, bucket, k, v);

    if (hashTable.needsResize()) {
      hashTable.resize();
    }
  };

  hashTable.retrieve = function(k) {
    var index = getIndexBelowMaxForKey(k, this.storageLimit);
    var bucket = this.storage[index];

    if (bucket === undefined) {
      return undefined;
    }

    for (var i = 0; i < bucket.length; i++) {
      var tuple = bucket[i];

      if (tuple[0] === k) {
        return tuple[1];
      }
    }

    return undefined;
  };

  hashTable.remove = function(k) {
    var index = getIndexBelowMaxForKey(k, this.storageLimit);
    var bucket = this.storage[index];

    if (bucket === undefined) {
      return undefined;
    }

    for (var i = 0; i < bucket.length; i++) {
      var tuple = bucket[i];

      if (tuple[0] === k) {
        bucket.splice(i, 1);

        this.size--;

        if (hashTable.needsResize()) {
          hashTable.resize();
        }

        return tuple[1];
      }
    }

    return undefined;
  };

  hashTable.resize = function() {
    hashTable.isResizing = true;
    var newLimit = this.storageLimit;

    if (this.size / this.storageLimit <= 0.25) {
      newLimit = Math.floor(this.storageLimit / 2);
    } else if (this.size / this.storageLimit >= 0.75) {
      newLimit = this.storageLimit * 2;
    }

    if (newLimit === this.storageLimit) {
      return;
    }

    var oldStorage = this.storage;
    this.storageLimit = newLimit;
    this.storage = [];

    var self = this;

    var oldSize = this.size;

    oldStorage.forEach(function(bucket) {
      if (bucket !== undefined) {
        for (var i = 0; i < bucket.length; i++) {
          var tuple = bucket[i];
          self.insert(tuple[0], tuple[1]);
        }
      }
    });

    this.size = oldSize;
    this.storageLimit = newLimit;
    hashTable.isResizing = false;
  };

  hashTable.needsResize = function() {
    if (this.size <= 1) {
      return false;
    }

    return (
      this.size / this.storageLimit >= 0.75 ||
      this.size / this.storageLimit <= 0.25
    );
  };

  return hashTable;
};

if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  module.exports = makeHashTable;
} else {
  window.makeHashTable = makeHashTable;
}
