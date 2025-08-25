class Node5<T> {
  value: T;
  next: Node5<T> | null;

  constructor(value: T) {
    this.value = value;
    this.next = null;
  }
}

class Queue<T> {
  first: Node5<T> | null;
  last: Node5<T> | null;
  length: number;

  constructor(value: T) {
    const newNode = new Node5(value);
    this.first = newNode;
    this.last = newNode;
    this.length = 1;
  }

  enqueue(value: T): this {
    const newNode = new Node5(value);

    if (this.length === 0 || !this.last) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }

    this.length++;
    return this;
  }

  dequeue(): Node5<T> | undefined {
    if (this.length === 0 || !this.first) {
      return undefined;
    }

    const temp = this.first;

    if (this.length === 1) {
      this.first = null;
      this.last = null;
    } else {
      this.first = this.first.next;
    }

    temp.next = null;
    this.length--;
    return temp;
  }
}

// Example usage:
let myQueue = new Queue<number>(0);
myQueue.enqueue(1);
myQueue.enqueue(2);
myQueue.dequeue();
console.log(myQueue);
