class Node6{
  value: number;
  left: Node6 | null;
  right: Node6 | null;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
  root: Node6 | null;

  constructor() {
    this.root = null;
  }

  insert(value: number): BST | undefined {
    const newNode = new Node6(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    }

    let temp: Node6 | null = this.root;
    while (true) {
      if (newNode.value === temp.value) return undefined;
      if (newNode.value < temp.value) {
        if (temp.left === null) {
          temp.left = newNode;
          return this;
        } else {
          temp = temp.left;
        }
      } else {
        if (temp.right === null) {
          temp.right = newNode;
          return this;
        }
        temp = temp.right;
      }
    }
  }

  includes(value: number): boolean {
    if (!this.root) return false;

    let temp: Node6 | null = this.root;
    while (temp) {
      if (value < temp.value) {
        temp = temp.left;
      } else if (value > temp.value) {
        temp = temp.right;
      } else if (value === temp.value) {
        return true;
      }
    }
    return false;
  }
}

// Example usage
const tree = new BST();
tree.insert(5);
tree.insert(8);
tree.insert(3);
tree.insert(1);
tree.insert(7);
tree.insert(9);
console.log(tree.includes(9)); // true
