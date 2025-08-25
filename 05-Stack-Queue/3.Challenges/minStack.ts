class Node6<T> {
  value: T;
  next: Node6<T> | null;

  constructor(value: T) {
    this.value = value;
    this.next = null;
  }
}

class Stack2<T> {
  first: Node6<T> | null;
  length: number;

  constructor(value?: T) {
    if (value !== undefined) {
      const newNode = new Node6(value);
      this.first = newNode;
      this.length = 1;
    } else {
      this.first = null;
      this.length = 0;
    }
  }

  push(value: T): this {
    const newNode = new Node6(value);

    if (this.length === 0 || !this.first) {
      this.first = newNode;
    } else {
      newNode.next = this.first;
      this.first = newNode;
    }

    this.length++;
    return this;
  }

  pop(): Node6<T> | undefined {
    if (this.length === 0 || !this.first) {
      return undefined;
    }

    const temp = this.first;
    this.first = this.first.next;
    temp.next = null;
    this.length--;
    return temp;
  }

  top(): Node6<T> | undefined {
    return this.first || undefined;
  }

  min(): T | undefined {
    if (this.length === 0 || !this.first) {
      return undefined;
    }

    let current: Node6<T> | null = this.first;
    let minValue = current.value;

    while (current.next) {
      current = current.next;
      // @ts-ignore: assumes T supports < comparison
      if (current.value < minValue) {
        minValue = current.value;
      }
    }

    return minValue;
  }
}

// Example usage:
let theStack2 = new Stack2<number>();
theStack2.push(1);
theStack2.push(2);
theStack2.push(3);
console.log(theStack2.min()); // Output: 1
