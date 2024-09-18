// Tree Traversal

/**
 * Represents a node in a binary tree.
 * Each node contains a value and references to its left and right children.
 */
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

/**
 * Represents a binary search tree.
 * The tree keeps track of its root node and provides methods for insertion and traversal.
 */
class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  /**
   * Inserts a new value into the binary search tree.
   * @param {*} value - The value to be inserted.
   * @returns {BinarySearchTree} The binary search tree with the new value inserted.
   */
  insert(value) {
    const newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    }

    let temp = this.root;
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

  /**
   * Performs a Breadth-First Search (BFS) traversal of the tree.
   * @returns {Array} An array containing the values of the nodes in BFS order.
   */
  dfs() {
    let current = this.root;
    let queue = [];
    let data = [];

    queue.push(current);

    while (queue.length) {
      current = queue.shift();
      data.push(current.value);

      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
    }
    return data;
  }

  /**
   * Performs a Pre-order Depth-First Search (DFS) traversal of the tree.
   * Order: Root -> Left -> Right
   * @param {Node} node - The current node being visited (default is the root).
   * @param {Array} data - The array to store the traversal result.
   * @returns {Array} An array containing the values of the nodes in pre-order.
   */
  dfsPreOrder(node = this.root, data = []) {
    if (node === null) return data;

    data.push(node.value);
    if (node.left) this.dfsPreOrder(node.left, data);
    if (node.right) this.dfsPreOrder(node.right, data);
    return data;
  }

  /**
   * Performs a Post-order Depth-First Search (DFS) traversal of the tree.
   * Order: Left -> Right -> Root
   * @param {Node} node - The current node being visited (default is the root).
   * @param {Array} data - The array to store the traversal result.
   * @returns {Array} An array containing the values of the nodes in post-order.
   */
  dfsPostOrder(node = this.root, data = []) {
    if (node === null) return data;
    if (node.left) this.dfsPostOrder(node.left, data);
    if (node.right) this.dfsPostOrder(node.right, data);
    data.push(node.value);
    return data;
  }

  /**
   * Performs an In-order Depth-First Search (DFS) traversal of the tree.
   * Order: Left -> Root -> Right
   * @param {Node} node - The current node being visited (default is the root).
   * @param {Array} data - The array to store the traversal result.
   * @returns {Array} An array containing the values of the nodes in in-order.
   */
  dfsInOrder(node = this.root, data = []) {
    if (node === null) return data;
    this.dfsInOrder(node.left, data);
    data.push(node.value);
    this.dfsInOrder(node.right, data);
    return data;
  }
}

// Example usage
const tree = new BinarySearchTree();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
console.log("BFS:", tree.dfs());
console.log("Pre-order:", tree.dfsPreOrder());
console.log("Post-order:", tree.dfsPostOrder());
console.log("In-order:", tree.dfsInOrder());
