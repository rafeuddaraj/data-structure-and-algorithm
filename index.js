class SimpleHashTable {
  constructor() {
    this.size = 15;
    this.table = new Array(this.size);
  }
  #hash(str = "") {
    let hash = 999;
    for (let char of str) {
      hash += char.charCodeAt(0);
    }
    console.log("hash", hash, hash % this.size);
    return hash % this.size;
  }
  set(key, value) {
    const index = this.#hash(key);
    this.table[index] = value;
  }
  get(key) {
    const index = this.#hash(key);
    return this.table[index];
  }
}

const simpleHashTable = new SimpleHashTable();

simpleHashTable.set("name", "Rafe Uddaraj");
simpleHashTable.set("age", 22);
simpleHashTable.set("city", "Dhaka");
console.log(simpleHashTable.table);
