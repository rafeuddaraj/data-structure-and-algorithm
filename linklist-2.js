// class Node {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }

// class Linklist {
//   constructor() {
//     this.head = null;
//     this.tail = null;
//     this.length = 0;
//   }
//   append(data) {
//     const newNode = new Node(data);
//     if (!this.head) {
//       this.head = newNode;
//       this.tail = newNode;
//     } else {
//       this.tail.next = newNode;
//       this.tail = newNode;
//     }
//     this.length++;
//   }

//   remove(data) {
//     if (this.length < 0) {
//       throw Error("Range Error");
//     }
//     if (this.head.value === data) {
//       this.head = this.head.next;
//       if (this.length === 1) {
//         this.tail = null;
//       }
//       this.length--;
//       return;
//     } else {
//       let current = this.head;
//       while (current.next) {
//         if (current.next.value === data) {
//           current.next = current.next.next;
//           this.length--;
//           if (!current.next) {
//             this.tail = current;
//           }
//           return;
//         }
//         current = current.next;
//       }
//     }
//   }
//   toString() {
//     let result = "";
//     let current = this.head;
//     while (current) {
//       let arrow = current.next ? " -> " : " ";
//       result += current.value + arrow;
//       current = current.next;
//     }
//     return result;
//   }
// }

// const linklist = new Linklist();

// linklist.append(10);
// linklist.append(10);
// linklist.append(10);

// linklist.remove(10);

// console.log(linklist.toString());
// console.log(linklist.length);
// console.log(linklist.head);
// console.log(linklist.tail);

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}

class Linklist {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  append(data) {
    const newNode = new Node(data);
    if (this.length < 0 || !this.head) {
      this.head = newNode;
      this.length++;
      this.tail = newNode;
      newNode.next = newNode;
      return;
    }
    newNode.prev = this.tail;
    newNode.next = this.head;
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return;
  }
  toString() {
    let result = "";
    let current = this.head;
    while (current) {
      let arrow = current.next ? " -> " : " ";
      result += current.data + arrow;
      current = current.next;
    }
    return result;
  }
}

const linklist = new Linklist();

linklist.append(10);
linklist.append(20);
linklist.append(30);
linklist.append(40);
linklist.append(50);

console.log(linklist.head.next.next.next.next.next.data);
