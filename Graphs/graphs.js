// Graphs are a collection of nodes and edges.

/**
 * Represents a graph using an adjacency list.
 */
class Graph {
  /**
   * Creates a new graph.
   */
  constructor() {
    this.adjacencyList = {};
  }

  /**
   * Adds a vertex to the graph.
   * @param {*} vtx - The vertex to add.
   * @returns {boolean} True if the vertex was added, false if it already exists.
   */
  addVertex(vtx) {
    if (!this.adjacencyList[vtx]) {
      this.adjacencyList[vtx] = [];
      return true;
    }
    return false;
  }

  /**
   * Adds an edge between two vertices in the graph.
   * @param {*} vtx1 - The first vertex.
   * @param {*} vtx2 - The second vertex.
   * @returns {boolean} True if the edge was added, false if either vertex doesn't exist.
   */
  addEdge(vtx1, vtx2) {
    if (this.adjacencyList[vtx1] && this.adjacencyList[vtx2]) {
      this.adjacencyList[vtx1].push(vtx2);
      this.adjacencyList[vtx2].push(vtx1);
      return true;
    }
    return false;
  }

  /**
   * Removes an edge between two vertices in the graph.
   * @param {*} vtx1 - The first vertex.
   * @param {*} vtx2 - The second vertex.
   * @returns {boolean} True if the edge was removed, false if either vertex doesn't exist.
   */
  removeEdge(vtx1, vtx2) {
    if (this.adjacencyList[vtx1] && this.adjacencyList[vtx2]) {
      this.adjacencyList[vtx1] = this.adjacencyList[vtx2].filter(
        (v) => v !== vtx2
      );

      this.adjacencyList[vtx2] = this.adjacencyList[vtx2].filter(
        (v) => v !== vtx1
      );
      return true;
    }
    return false;
  }

  /**
   * Removes a vertex and all its edges from the graph.
   * @param {*} vtx - The vertex to remove.
   * @returns {Graph|undefined} The updated graph if the vertex was removed, undefined if the vertex doesn't exist.
   */
  removeVertex(vtx) {
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

// Example usage of the Graph class
const graph = new Graph();

// Adding vertices
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");

// Adding edges
graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("A", "D");
graph.addEdge("B", "D");
graph.addEdge("C", "D");

console.log("Before removing vertex", graph);

// Removing a vertex
graph.removeVertex("D");

console.log("After removing vertex", graph);
