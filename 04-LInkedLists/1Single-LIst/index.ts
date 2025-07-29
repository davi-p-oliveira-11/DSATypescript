class Node2<T> {
  value: T;
  next: Node2<T> | null;

  constructor(value: T) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList<T> {
  head: Node2<T> | null;
  tail: Node2<T> | null;
  length: number;

  constructor(value: T) {
    const newNode = new Node2(value);
    this.head = newNode;
    this.tail = newNode;
    this.length = 1;
  }

  push(value: T): void {
    const newNode = new Node2(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      if (this.tail) this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;
  }

  pop(): Node2<T> | undefined {
    if (!this.head) return undefined;

    let temp = this.head;
    let prev = this.head;

    while (temp.next) {
      prev = temp;
      temp = temp.next;
    }

    this.tail = prev;
    this.tail.next = null;
    this.length--;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    return temp;
  }

  unshift(value: T): this {
    const newNode = new Node2(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;
    return this;
  }

  shift(): Node2<T> | undefined {
    if (!this.head) return undefined;

    const temp = this.head;
    this.head = this.head.next;
    temp.next = null;
    this.length--;

    if (this.length === 0) {
      this.tail = null;
    }

    return temp;
  }

  getFirst(): Node2<T> | null {
    return this.head;
  }

  getLast(): Node2<T> | null {
    return this.tail;
  }

  get(index: number): Node2<T> | null {
    if (index < 0 || index >= this.length) return null;

    let counter = 0;
    let temp = this.head;

    while (temp) {
      if (counter === index) return temp;
      counter++;
      temp = temp.next;
    }

    return null;
  }

  set(index: number, value: T): boolean {
    const temp = this.get(index);
    if (temp) {
      temp.value = value;
      return true;
    }
    return false;
  }

  insert(index: number, value: T): boolean | this {

    if (index < 0 || index > this.length) {
      return false;
    } 

    if (index === 0) {
      return this.unshift(value);
    }  

    if (index === this.length) {
      this.push(value);
      return true;
    }

    const newNode = new Node2(value);

    const prev = this.get(index - 1);

    if (prev) {
      newNode.next = prev.next;
      prev.next = newNode;
      this.length++;
      return true;
    }

    return false;
  }

  size(): number {
    let counter: number = 0;
    let temp: Node2<T> | null = this.head;

    while(temp !== null) {
      counter++;
      temp = temp.next;
    }

    return counter;
    // return this.length;
  }

  clear(): void {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
}


const myList = new LinkedList<number>(1);
myList.push(1);
myList.push(2);
myList.push(3);
// myList.unshift(0);
// myList.pop();
// console.log(myList.insert(2, 39))
//console.log(myList.get(2));

console.log(myList.size())




// console.log(myList.getFirst()?.value); // 1
// console.log(myList.getLast()?.value);  // 3
