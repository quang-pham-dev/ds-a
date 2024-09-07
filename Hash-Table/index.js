// Hash Table is a data structure that stores key-value pairs.
// It uses a hash function to compute an index into an array of buckets or slots, from which the correct value can be found.
// The hash function takes the key and returns an index in the array.
// The key-value pairs are stored in the array at the computed index.
// The hash function should be deterministic, meaning it should always return the same index for a given key.
// The hash function should be fast to compute.
// The hash function should be uniform, meaning it should distribute keys evenly across the array.

/**
 * Hash Table implementation
 *
 * A Hash Table is a data structure that stores key-value pairs.
 * It uses a hash function to compute an index into an array of buckets or slots,
 * from which the correct value can be found.
 */
class HashTable {
  /**
   * Creates a new HashTable instance
   * @param {number} initialSize - The initial size of the hash table (default: 16)
   */
  constructor(initialSize = 16) {
    this.size = initialSize;
    this.count = 0;
    this.table = new Array(this.size).fill(null).map(() => []);
  }

  /**
   * Hashes the given key to produce an index
   * @param {string} key - The key to hash
   * @returns {number} The computed index
   */
  hash(key) {
    let total = 0;
    for (let i = 0; i < key.length; i++) {
      total += key.charCodeAt(i);
    }
    return total % this.size;
  }

  /**
   * Sets a key-value pair in the hash table
   * @param {string} key - The key to set
   * @param {*} value - The value to associate with the key
   */
  set(key, value) {
    const index = this.hash(key);
    const bucket = this.table[index];
    const item = bucket.find((item) => item[0] === key);
    if (item) {
      item[1] = value;
    } else {
      bucket.push([key, value]);
      this.count++;
    }
    if (this.count > this.size * 0.75) {
      this.resize();
    }
  }

  /**
   * Retrieves the value associated with the given key
   * @param {string} key - The key to look up
   * @returns {*} The value associated with the key, or undefined if not found
   */
  get(key) {
    const index = this.hash(key);
    const item = this.table[index].find((item) => item[0] === key);
    return item ? item[1] : undefined;
  }

  /**
   * Removes a key-value pair from the hash table
   * @param {string} key - The key to remove
   * @returns {boolean} True if the key was found and removed, false otherwise
   */
  remove(key) {
    const index = this.hash(key);
    const bucket = this.table[index];
    const itemIndex = bucket.findIndex((item) => item[0] === key);
    if (itemIndex !== -1) {
      bucket.splice(itemIndex, 1);
      this.count--;
      return true;
    }
    return false;
  }

  /**
   * Resizes the hash table when it becomes too full
   */
  resize() {
    const newSize = this.size * 2;
    const newTable = new Array(newSize).fill(null).map(() => []);
    this.table.forEach((bucket) => {
      bucket.forEach(([key, value]) => {
        const newIndex = this.hash(key) % newSize;
        newTable[newIndex].push([key, value]);
      });
    });
    this.size = newSize;
    this.table = newTable;
  }

  /**
   * Returns an array of all keys in the hash table
   * @returns {Array} An array containing all keys
   */
  getAllKeys() {
    return this.table.flatMap((bucket) => bucket.map((item) => item[0]));
  }

  /**
   * Returns an array of all values in the hash table
   * @returns {Array} An array containing all values
   */
  getAllValues() {
    return this.table.flatMap((bucket) => bucket.map((item) => item[1]));
  }
}

// Example usage
const hashTable = new HashTable();
hashTable.set("name", "John");
hashTable.set("age", 30);
hashTable.set("city", "New York");
console.log(hashTable.get("name")); // John
console.log(hashTable.get("age")); // 30
console.log(hashTable.getAllKeys()); // ["name", "age", "city"]
console.log(hashTable.getAllValues()); // ["John", 30, "New York"]
hashTable.remove("age");
console.log(hashTable.get("age")); // undefined
