// Binary Search Tree (BST) is a binary tree in which for each node,
// the value of all the nodes in the left subtree is lesser and the value of all the nodes in the right subtree is greater.

/**
 * Represents a node in a binary search tree.
 * Each node contains a value and references to its left and right children.
 */
class Node {
  /**
   * Creates a new Node.
   * @param {*} value - The value to be stored in the node.
   */
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

/**
 * Represents a binary search tree.
 * The tree keeps track of its root node.
 */
class BinarySearchTree {
  /**
   * Creates a new BinarySearchTree.
   */
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
   * Checks if a value exists in the binary search tree.
   * @param {*} value - The value to be checked.
   * @returns {boolean} True if the value exists, false otherwise.
   */
  includes(value) {
    if (this.root === null) {
      return false;
    }

    let temp = this.root;
    while (temp) {
      if (value < temp.value) {
        temp = temp.left;
      } else if (value > temp.value) {
        temp = temp.right;
      } else {
        return true;
      }
    }

    return false;
  }
}

const tree = new BinarySearchTree();
tree.insert(5);
tree.insert(8);
tree.insert(3);
tree.insert(1);
tree.insert(7);
tree.insert(9);
console.log(tree.includes(9));
