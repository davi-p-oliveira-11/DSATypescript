class HashTable<K extends string, V> {
  private keyMap: [K, V][][];

  constructor(size: number = 6) {
    this.keyMap = new Array(size);
  }

  private _hashFunction(key: K): number {
    let sum = 0;
    const PRIME_NUMBER = 31;

    for (let i = 0; i < Math.min(key.length, 100); i++) {
      const charCode = key.charCodeAt(i) - 96; // fixed: should use i instead of 0
      sum = (sum * PRIME_NUMBER + charCode) % this.keyMap.length;
    }

    return sum;
  }

  set(key: K, value: V): this {
    const index = this._hashFunction(key);
    if (!this.keyMap[index]) this.keyMap[index] = [];
    this.keyMap[index].push([key, value]);
    return this;
  }

  get(key: K): V | undefined {
    const index = this._hashFunction(key);
    if (this.keyMap[index]) {
      for (let i = 0; i < this.keyMap[index].length; i++) {
        if (this.keyMap[index][i][0] === key) {
          return this.keyMap[index][i][1];
        }
      }
    }
    return undefined;
  }

  getAllKeys(): K[] {
    const keys: K[] = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          keys.push(this.keyMap[i][j][0]);
        }
      }
    }
    return keys;
  }

  getAllValues(): V[] {
    const values: V[] = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          values.push(this.keyMap[i][j][1]);
        }
      }
    }
    return values;
  }
}

// Example usage
const phoneBook = new HashTable<string, string>();
phoneBook.set("john", "555-333-444");
phoneBook.set("jordan", "222-444-666");
phoneBook.set("michel", "111-666-222");

console.log(phoneBook.get("jordan"));      // 222-444-666
console.log(phoneBook.getAllValues());     // ["555-333-444", "222-444-666", "111-666-222"]
console.log(phoneBook.getAllKeys());       // ["john", "jordan", "michel"]
