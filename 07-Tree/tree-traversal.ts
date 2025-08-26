class Node7 {
  value: number;
  left: Node7 | null;
  right: Node7 | null;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST2 {
  root: Node7 | null;

  constructor() {
    this.root = null;
  }

  insert(value: number): BST2 | undefined {
    const newNode = new Node7(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    }

    let temp: Node7 = this.root;
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

  // BFS (level order)
  dfs(): number[] {
    if (!this.root) return [];
    let current: Node7 | undefined = this.root;
    const queue: (Node7 | null)[] = [];
    const data: number[] = [];

    queue.push(current);

    while (queue.length) {
      current = queue.shift()!;
      data.push(current.value);

      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
    }
    return data;
  }

  // DFS - Pre Order
  dfsPreOrder(node: Node7 | null = this.root, data: number[] = []): number[] {
    if (node === null) return data;

    data.push(node.value);
    if (node.left) this.dfsPreOrder(node.left, data);
    if (node.right) this.dfsPreOrder(node.right, data);
    return data;
  }

  // DFS - Post Order
  dfsPostOrder(node: Node7 | null = this.root, data: number[] = []): number[] {
    if (node === null) return data;

    if (node.left) this.dfsPostOrder(node.left, data);
    if (node.right) this.dfsPostOrder(node.right, data);
    data.push(node.value);
    return data;
  }

  // DFS - In Order
  dfsInOrder(node: Node7 | null = this.root, data: number[] = []): number[] {
    if (node === null) return data;

    this.dfsInOrder(node.left, data);
    data.push(node.value);
    this.dfsInOrder(node.right, data);
    return data;
  }
}

// Example usage
const tree2 = new BST2();
tree.insert(5);
tree.insert(8);
tree.insert(3);
tree.insert(1);
tree.insert(7);
tree.insert(9);

console.log("BFS:", tree.dfs());
console.log("PreOrder:", tree.dfsPreOrder());
console.log("PostOrder:", tree.dfsPostOrder());
console.log("InOrder:", tree.dfsInOrder());
