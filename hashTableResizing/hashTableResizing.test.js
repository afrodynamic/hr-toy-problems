var makeHashTable = require('./hashTableResizing.js');

describe.only('makeHashTable', function () {
  test('should insert and retrieve values correctly', () => {
    var hashTable = makeHashTable();
    hashTable.insert('a', 1);
    hashTable.insert('b', 2);
    hashTable.insert('c', 3);
    expect(hashTable.retrieve('a')).toBe(1);
    expect(hashTable.retrieve('b')).toBe(2);
    expect(hashTable.retrieve('c')).toBe(3);
  });

  test('should overwrite existing values with the same key', () => {
    var hashTable = makeHashTable();
    hashTable.insert('a', 1);
    hashTable.insert('a', 2);
    expect(hashTable.retrieve('a')).toBe(2);
  });

  test('should remove values correctly', () => {
    var hashTable = makeHashTable();
    hashTable.insert('a', 1);
    hashTable.insert('b', 2);
    hashTable.remove('a');
    expect(hashTable.retrieve('a')).toBeUndefined();
    expect(hashTable.retrieve('b')).toBe(2);
  });

  test('should resize the hash table correctly', () => {
    var hashTable = makeHashTable();
    expect(hashTable.storageLimit).toBe(4);
    hashTable.insert('a', 1);
    hashTable.insert('b', 2);
    hashTable.insert('c', 3);
    hashTable.insert('d', 4);
    hashTable.insert('e', 5);
    expect(hashTable.storageLimit).toBe(8);
    expect(hashTable.retrieve('a')).toBe(1);
    expect(hashTable.retrieve('b')).toBe(2);
    expect(hashTable.retrieve('c')).toBe(3);
    expect(hashTable.retrieve('d')).toBe(4);
    expect(hashTable.retrieve('e')).toBe(5);
    hashTable.remove('a');
    hashTable.remove('b');
    hashTable.remove('c');
    expect(hashTable.storageLimit).toBe(4);
    expect(hashTable.retrieve('a')).toBeUndefined();
    expect(hashTable.retrieve('b')).toBeUndefined();
    expect(hashTable.retrieve('c')).toBeUndefined();
    expect(hashTable.retrieve('d')).toBe(4);
    expect(hashTable.retrieve('e')).toBe(5);
  });
});
