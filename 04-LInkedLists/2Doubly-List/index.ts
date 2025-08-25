class Node3<T> {
  value: T;
  next: Node3<T> | null;
  prev: Node3<T> | null;

  constructor(value: T) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList<T> {
  head: Node3<T> | null;
  tail: Node3<T> | null;
  length: number;

  constructor(value: T) {
    const newNode = new Node3(value);
    this.head = newNode;
    this.tail = newNode;
    this.length = 1;
  }

  push(value: T): this {
    const newNode = new Node3(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      if (this.tail) {
        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;
      }
    }

    this.length++;
    return this;
  }

  pop(): Node3<T> | undefined {
    if (this.length === 0 || !this.tail) {
      return undefined;
    }

    let temp = this.tail;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this.tail.prev;
      if (this.tail) this.tail.next = null;
      temp.prev = null;
    }

    this.length--;
    return temp;
  }

  unshift(value: T): this {
    const newNode = new Node3(value);

    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      if (this.head) {
        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;
      }
    }

    this.length++;
    return this;
  }

  shift(): Node3<T> | undefined {
    if (this.length === 0 || !this.head) {
      return undefined;
    }

    let temp = this.head;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
      if (this.head) this.head.prev = null;
      temp.next = null;
    }

    this.length--;
    return temp;
  }
}

// Example usage
let myDoublyLinkedList = new DoublyLinkedList<number>(0);
myDoublyLinkedList.push(1);
// myDoublyLinkedList.pop();
// myDoublyLinkedList.shift();
console.log(myDoublyLinkedList);
