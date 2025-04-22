class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class SinglyLinklist {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }
  append(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.size++;
  }
  remove(data) {
    if (this.size < 0) {
      throw Error("Index bound error!");
    }
    if (this.head.value === data) {
      this.head = this.head.next;
      if (this.size === 1) {
        this.tail = null;
      }
      this.size--;
      return;
    } else {
      let current = this.head;
      while (current.next) {
        if (current.next.value === data) {
          current.next = current.next.next || null;
          this.size--;
          return true;
        }
        current = current.next;
      }
    }
  }
  removeAt(position) {
    if (this.size < 0 || this.size <= position) {
      throw Error("Index bound error!");
    }
    if (position === 0) {
      this.head = this.head.next;
      if (this.size === 1) {
        this.tail = null;
      }
      this.size--;
      return;
    }
    let current = this.head;
    let previous = null;
    let index = 0;
    while (position > index) {
      previous = current;
      current = current.next;
      index++;
    }
    previous.next = current.next;
    if (!previous.next) {
      this.tail = previous;
    }
    this.size--;
  }
  toString() {
    return JSON.stringify(this);
  }
}

const singlyLinklist = new SinglyLinklist();
singlyLinklist.append(10);
singlyLinklist.append(20);

singlyLinklist.removeAt(1);
singlyLinklist.removeAt(0);
singlyLinklist.append(101);

// console.log(singlyLinklist.toString());

class doublyLinklist {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }
  append(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      if (this.size === 1) {
        this.tail = newNode;
      }
      this.size++;
      return;
    }
    this.tail.next = newNode
    
  }
}
