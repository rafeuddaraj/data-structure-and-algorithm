class Node {
    constructor(value) {
        this.next = null
        this.value = value
    }

    gets() {
        let value = this
        while (value) {
            console.log(value.value);
            value = value.next;
        }
    }

}

const node = new Node(10)
node.next = new Node(101)
node.next.next = new Node(201)

node.gets()
