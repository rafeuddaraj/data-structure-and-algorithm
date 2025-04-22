const DEFAULT_CAPACITY = 10;

class CustomArray {
  #capacity = DEFAULT_CAPACITY;
  constructor(capacity = DEFAULT_CAPACITY) {
    this.#capacity = capacity;
    this.array = new Array(this.#capacity);
    this.length = 0;
  }
  #isCapacity() {
    // O(1)
    return this.length > this.#capacity;
  }
  #resize() {
    // O(1)
    this.#capacity = 2 * this.#capacity;
  }
  insert(index, value) {
    if (index < 0 || index > this.length || this.length > this.#capacity) {
      throw new Error("Index out of bounds");
    }
    if (index === this.length) {
      if (!this.array[index] || !this.array[index] === 0) {
        this.length++;
      }
      this.array[index] = value;
      // Best Case O(1)
      return;
    }
    for (let i = this.length; i > index; i--) {
      this.array[i] = this.array[i - 1];
    }
    if (!this.array[index] || !this.array[index] === 0) {
      this.length++;
    }
    this.array[index] = value;
    // Worse Case O(n)
    return;
  }
  remove(index) {
    if (index < 0 || index > this.length) {
      throw new Error("Index out of bounds");
    }
    if (index === this.length - 1) {
      this.array[index] = undefined;
      this.length--;
      // Best Case O(1)
      return;
    }
    for (let i = index; i < this.length; i++) {
      this.array[i] = this.array[i + 1];
    }
    this.length--;
    // Worse Case O(n)
    return;
  }
  get [Symbol.toStringTag]() {
    let result = "";
    for (let i = 0; i < this.length; i++) {
      const arrow = this.length - 1 === i ? " " : "-> ";
      result += this.array[i] + arrow;
    }
    return result;
  }
  push(value) {
    if (this.#isCapacity()) {
      this.#resize();
    }
    this.array[this.length] = value;
    this.length++;
    // Worse Case O(1)
    return;
  }
  pop() {
    console.log(this.length);

    if (!this.length) {
      throw Error("No Index");
    }
    for (let i = 0; i < this.length; i++) {
      this.array[i] = this.array[i + 1];
    }
    this.array[this.length] = undefined;
    this.length--;

    // Worse case O(1)
    return;
  }
  get(index) {
    return this.array[index] || null; // Worse case O(1)
  }
  clear() {
    this.#capacity = DEFAULT_CAPACITY;
    this.array = new Array(this.#capacity);
    this.length = 0;
    return; // O(1)
  }
  search(value) {
    let lb = 0;
    let ub = this.length - 1;
    while (lb < ub) {
      let mid = Math.floor(lb + ub) / 2;
      if (this.array[mid] === value) return mid; // Worse case O(Log 2)
      else if (this.array[mid] < value) {
        lb = mid - 1;
      } else {
        ub = mid + 1;
      }
    }
  }
}

const customArray = new CustomArray(10);
customArray.insert(0, 1); // 0
customArray.insert(1, 2); // 1
customArray.insert(2, 3); // 2
customArray.insert(3, 4); // 3
customArray.insert(4, 5); // 4
customArray.insert(1, 6); // 5
customArray.remove(5);
customArray.push(10);
customArray.push(10);
customArray.push(10);
customArray.push(10);
customArray.push(10);
customArray.push(10);
customArray.push(10);
customArray.push(10);
console.log(customArray.search(10));

console.log(customArray);
