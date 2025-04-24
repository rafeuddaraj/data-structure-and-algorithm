// class Node {
//   constructor(key, value) {
//     this.key = key;
//     this.value = value;
//     this.next = null;
//   }
// }

// class Linklist {
//   constructor() {
//     this.head = null;
//   }

//   insert(key, value) {
//     const newNode = new Node(key, value);
//     if (!this.head) {
//       this.head = newNode;
//       return;
//     }
//     const existing = this.find(key);
//     if (existing) {
//       existing.value = value;
//       return;
//     }
//     newNode.next = this.head;
//     this.head = newNode;
//     return;
//   }
//   find(key) {
//     if (!this.head) return null;
//     if (key === this.head.key) {
//       return this.head;
//     }
//     let current = this.head;
//     while (current) {
//       if (current.key === key) {
//         return current;
//       }
//       current = current.next;
//     }
//     return current || null;
//   }
//   *entries() {
//     let current = this.head;
//     while (current) {
//       yield [current.key, current.value];
//       current = current.next;
//     }
//   }
// }

// class HashTable {
//   constructor(size = 2) {
//     this.size = size;
//     this.count = 0;
//     this.#table = new Array(size);
//   }
//   #hash(str = "") {
//     let hash = 5381;
//     for (let char of str) {
//       hash = (hash * 33) ^ char.charCodeAt(0);
//     }
//     return Math.abs(hash) % this.size;
//   }
//   set(key, value) {
//     const index = this.#hash(key);
//     if (!this.#table[index]) {
//       this.#table[index] = new Linklist();
//     }
//     const bucket = this.#table[index];
//     const existing = bucket.find(key);

//     if (!existing) {
//       this.count++;
//     }
//     bucket.insert(key, value);
//   }
//   get(key) {
//     const index = this.#hash(key);
//     return this.#table[index];
//   }
// }

// const hashTable = new HashTable();

// hashTable.set("name", "Rafe  Uddaraj");
// hashTable.set("age", 22);
// hashTable.set("country", "Bangladesh");
// hashTable.set("name", "Rafe Uddaraj");

// console.log(JSON.stringify(hashTable.table));

// Hash table Making

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
    return bucket.find(key);
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

const hashTable = new HashTable(53);
hashTable.set("name", "Rafe Uddaraj");
hashTable.set("age", 22);
hashTable.set("country", "Bangladesh");
hashTable.set("wantCountry", "USA");
// console.log(hashTable.keys());
// console.log(hashTable.values());
console.log(hashTable.entries());
