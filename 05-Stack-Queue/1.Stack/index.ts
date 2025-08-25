class Node4<T> {
  value: T;
  next: Node4<T> | null;

  constructor(value: T) {
    this.value = value;
    this.next = null;
  }
}

class Stack<T> {
  first: Node4<T> | null;
  length: number;

  constructor(value: T) {
    const newNode = new Node4(value);
    this.first = newNode;
    this.length = 1;
  }

  push(value: T): this {
    const newNode = new Node4(value);

    if (this.length === 0) {
      this.first = newNode;
    } else {
      newNode.next = this.first;
      this.first = newNode;
    }

    this.length++;
    return this;
  }

  pop(): Node4<T> | undefined {
    if (this.length === 0 || !this.first) {
      return undefined;
    }

    let temp = this.first;
    this.first = this.first.next;
    temp.next = null;
    this.length--;

    return temp;
  }

  top(): Node4<T> | undefined {
    if (this.length === 0) {
      return undefined;
    }
    return this.first || undefined;
  }
}

// Example usage:
let theStack = new Stack<number>(0);
theStack.push(1);
theStack.push(2);
// theStack.pop();
console.log(theStack);
