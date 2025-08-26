class Graph {
  adjacencyList: { [key: string]: string[] };

  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vtx: string): boolean {
    if (!this.adjacencyList[vtx]) {
      this.adjacencyList[vtx] = [];
      return true;
    }
    return false;
  }

  addEdge(vtx1: string, vtx2: string): boolean {
    if (this.adjacencyList[vtx1] && this.adjacencyList[vtx2]) {
      this.adjacencyList[vtx1].push(vtx2);
      this.adjacencyList[vtx2].push(vtx1);
      return true;
    }
    return false;
  }

  removeEdge(vtx1: string, vtx2: string): boolean {
    if (this.adjacencyList[vtx1] && this.adjacencyList[vtx2]) {
      this.adjacencyList[vtx1] = this.adjacencyList[vtx1].filter(
        (v) => v !== vtx2
      );

      this.adjacencyList[vtx2] = this.adjacencyList[vtx2].filter(
        (v) => v !== vtx1
      );
      return true;
    }
    return false;
  }

  removeVertex(vtx: string): Graph | undefined {
    if (!this.adjacencyList[vtx]) return undefined;

    for (let neighbor of this.adjacencyList[vtx]) {
      this.adjacencyList[neighbor] = this.adjacencyList[neighbor].filter(
        (v) => v !== vtx
      );
    }

    delete this.adjacencyList[vtx];
    return this;
  }
}

// Example usage
let g = new Graph();
g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addEdge("A", "B");
g.addEdge("A", "C");
g.addEdge("A", "D");
g.addEdge("B", "D");
g.addEdge("C", "D");

console.log("Graph before removing vertex:", g);
g.removeVertex("D");
console.log("Graph after removing vertex:", g);
