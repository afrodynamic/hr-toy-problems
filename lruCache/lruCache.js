/*
 * Design and implement an LRU, or Least Recently Used, cache.
 *
 * An LRU cache gives O(1) get(key) and set(key, val) operations,
 * much like a hashtable, but once it reaches its limit for stored
 * number of items, removes the least recently used (i.e. the oldest
 * by get-date) item from the cache in O(1) time.
 *
 * For instance:
 *
 * var cache = new LRUCache(3); // limit of 3 items
 * cache.set("item1", 1);
 * cache.set("item2", 2);
 * cache.set("item3", 3);
 * cache.set("item4", 4);
 *
 * cache.get("item3") //=> 3
 * cache.get("item2") //=> 2
 * // item1 was removed because it was the oldest item by insertion/usage
 * cache.get("item1") //=> null
 *
 * // item4 is removed to make room, because it is the oldest by usage,
 * // which takes priority.
 * cache.set("item5", 5);
 *
 * // item3 is also removed, because it was retrieved before item2 was
 * // last retrieved.
 * cache.set("item6", 6);
 *
 * You will need a doubly-linked list (provided).
 */

var LRUCache = function (limit) {
  this.limit = limit;
  this.size = 0;
  this.cache = {};
  this.list = new List();
};

var LRUCacheItem = function (val, key) {
  this.val = val;
  this.key = key;
};

LRUCache.prototype.getSize = function () {
  return this.size;
};

LRUCache.prototype.get = function (key) {
  if (this.cache[key]) {
    var item = this.cache[key];
    this.list.moveToFront(item);
    return item.val;
  }

  return null;
};

LRUCache.prototype.set = function (key, val) {
  if (this.cache[key]) {
    var item = this.cache[key];
    item.val = val;
    this.list.moveToFront(item);
  } else {
    var newItem = new LRUCacheItem(val, key);
    this.cache[key] = newItem;
    this.list.unshift(newItem);
    this.size++;

    if (this.getSize() > this.limit) {
      var lastItem = this.list.pop();
      delete this.cache[lastItem.key];
      this.size--;
    }
  }
};

var List = function () {
  this.head = null;
  this.tail = null;
};

var ListNode = function (prev, val, next) {
  this.prev = prev || null;
  this.val = val;
  this.next = next || null;
};

// Insert at the head of the list.
List.prototype.unshift = function (val) {
  const node = new ListNode(null, val, this.head);

  if (!this.head) {
    this.tail = node;
  } else {
    this.head.prev = node;
  }

  this.head = node

  return this.head;
};

// Delete at the head of the list.
List.prototype.shift = function () {
  if (!this.head) {
    return null;
  }

  const node = this.head;
  this.head = this.head.next;

  if (!head) {
    this.tail = null;
  } else {
    this.head.prev = null;
  }

  return node.val;
};

// Insert at the end of the list.
List.prototype.push = function (val) {
  const node = new ListNode(this.tail, val, null);

  if (!tail) {
    this.head = node;
  } else {
    this.tail.next = node;
  }

  this.tail = node;

  return this.tail;
};

// Delete at the end of the list.
List.prototype.pop = function () {
  if (!this.tail) {
    return null;
  }

  const node = this.tail;
  this.tail = this.tail.prev;

  if (!this.tail) {
    this.head = null;
  } else {
    this.tail.next = null;
  }

  return node.val;

}

// Move a node to the front of the List
List.prototype.moveToFront = function (node) {
  if (node === this.tail) {
    this.pop();
  } else if (node !== this.head) {
    if (node.prev) {
      node.prev.next = node.next;
    }

    if (node.next) {
      node.next.prev = node.prev;
    }
  } else {
    return;
  }

  node.prev = null;
  node.next = this.head;

  if (this.head) {
    this.head.prev = node;
  }

  this.head = node;
};

// Move a node to the end of the List
List.prototype.moveToEnd = function (node) {
  if (node === this.head) {
    this.shift();
  } else if (node === this.tail) {
    return;
  } else {
    if (node.prev) {
      node.prev.next = node.next;
    }

    if (node.next) {
      node.next.prev = node.prev;
    }

    this.push(node.val)
  }

  // Don't delegate to push, since we want to keep the same
  // object.

};

if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  module.exports.LRUCache = LRUCache;
} else {
  window.LRUCache = LRUCache;
}
