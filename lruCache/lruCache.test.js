const { LRUCache } = require('./lruCache.js');

describe('LRUCache', () => {
  test('should return the correct value for get() operation', () => {
    const cache = new LRUCache(3);
    cache.set('item1', 1);
    cache.set('item2', 2);
    cache.set('item3', 3);

    expect(cache.get('item3')).toBe(3);
    expect(cache.get('item2')).toBe(2);
    expect(cache.get('item1')).toBe(1);
  });

  test('should remove the least recently used item on set() when cache is full', () => {
    const cache = new LRUCache(3);
    cache.set('item1', 1);
    cache.set('item2', 2);
    cache.set('item3', 3);
    cache.set('item4', 4);

    expect(cache.get('item1')).toBe(null);
    expect(cache.get('item2')).toBe(2);
    expect(cache.get('item3')).toBe(3);
    expect(cache.get('item4')).toBe(4);
  });

  test('should update the value for an existing key on set()', () => {
    const cache = new LRUCache(3);
    cache.set('item1', 1);
    cache.set('item2', 2);
    cache.set('item3', 3);
    cache.set('item2', 4);

    expect(cache.get('item1')).toBe(1);

    cache.set('item1', 5);

    expect(cache.get('item1')).toBe(5);
  });
});
