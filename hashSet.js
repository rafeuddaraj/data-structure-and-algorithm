class Node {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
  }
}

class Linklist {
  constructor() {
    this.head = null;
  }
  insert(key, value) {
    const newNode = new Node(key, value);
    if (!this.head) {
      this.head = newNode;
    }
    const existing = this.#findNode(key);
    if (existing) {
      existing.value = value;
      return;
    }
    newNode.next = this.head;
    this.head = newNode;
    return;
  }
  #findNode(key) {
    if (!this.head) return null;
    if (this.head.key === key) return this.head;
    let current = this.head;
    while (current) {
      if (current?.key === key) return current;
      current = current.next;
    }
  }
  find(key) {
    const node = this.#findNode(key);
    return node?.value || null;
  }
  *entries() {
    let current = this.head;
    while (current) {
      yield [current.key, current.value];
      current = current.next;
    }
  }
}

class HashTable {
  #keys;
  #table;
  constructor(size = 53) {
    this.size = size;
    this.#table = new Array(size);
    this.count = 0;
    this.#keys = new Set();
  }

  #hash(str = "") {
    let hash = 5381;
    for (let char of str) {
      hash = (hash * 33) ^ char.charCodeAt(0);
    }
    return Math.abs(hash) % this.size;
  }

  set(key, value) {
    if (this.count / this.size > 0.75) {
      this.#resize(this.size * 2);
    }
    const index = this.#hash(key);
    if (!this.#table[index]) {
      this.#table[index] = new Linklist();
    }
    const bucket = this.#table[index];
    const existing = bucket.find(key);

    if (!existing) {
      this.count++;
      this.#keys.add(key);
    }
    bucket.insert(key, value);
    return;
  }
  get(key) {
    const index = this.#hash(key);
    const bucket = this.#table[index];
    return bucket?.find(key) || null;
  }
  #resize(newSize) {
    const oldData = this.#table;
    this.size = newSize;
    this.#table = new Array(newSize);
    this.count = 0;
    for (let bucket of oldData) {
      if (bucket) {
        for (let [key, value] of bucket.entries()) {
          this.set(key, value);
        }
      }
    }
  }
  values() {
    const values = [];
    for (let bucket of this.#table) {
      if (bucket) {
        for (let [_, value] of bucket.entries()) {
          values.push(value);
        }
      }
    }
    return values;
  }
  keys() {
    return Array.from(this.#keys);
  }

  entries() {
    const all = [];
    for (let bucket of this.#table) {
      if (bucket) {
        for (let entry of bucket?.entries()) {
          all.push(entry);
        }
      }
    }
    return all;
  }
}

class HashSet {
  constructor() {
    this.data = new HashTable();
    this.count = 0;
  }
  add(value) {
    const existing = this.data.get(String(value));
    if (!existing) {
      this.count++;
    }
    this.data.set(String(value), true);
  }
  get(value) {
    return this.data.get(String(value));
  }
  has(value) {
    return !!this.data.get(String(value));
  }
  values() {
    return this.data?.keys();
  }
  union(setB) {
    let result = new HashSet();
    for (let value of this.values()) {
      result.add(value);
    }
    for (let value of setB) {
      result.add(value);
    }

    return result.values();
  }
  interaction(setB) {
    let result = [];
    for (let value of setB) {
      if (!this.has(value)) {
        result.push(value);
      }
    }
    return result;
  }

  deference(setB) {
    let result = [];
    for (let value of this.values()) {
      if (!setB.has(value)) result.push(value);
    }
    return result;
  }
}

const hashSet = new HashSet();
const hashSet2 = new HashSet();

hashSet.add(1);
hashSet.add(2);
hashSet.add(3);
hashSet.add(4);
hashSet.add(1);
hashSet.add(2);

hashSet2.add(4);
hashSet2.add(5);
hashSet2.add(6);

// console.log(hashSet.values());
let unionRes = hashSet.union(hashSet2.values());

console.log(unionRes);
let interactionRes = hashSet.interaction(hashSet2.values());
console.log("Interaction:", interactionRes);
console.log("Deference:", hashSet.deference(hashSet2));
