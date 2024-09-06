// Stack is a linear data structure that follows the Last In, First Out (LIFO) principle.
// It has two main operations: push (add an element to the top) and pop (remove the top element).
// Stacks are commonly used in algorithms like depth-first search (DFS) and in expression evaluation.

/**
 * Represents a node in a stack.
 * @param {*} value - The value for the node.
 */
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

/**
 * Represents a stack.
 * The stack keeps track of its first, last, and length.
 */
class Stack {
  constructor(value) {
    const newNode = new Node(value);
    this.first = newNode;
    this.length = 1;
  }

  /**
   * Adds a new element to the top of the stack.
   * @param {*} value - The value for the new node.
   * @returns {Stack} The updated stack.
   */
  push(value) {
    const newNode = new Node(value);

    if (this.length === 0) {
      this.first = newNode;
    } else {
      newNode.next = this.first;
      this.first = newNode;
      this.length++;
      return this;
    }
  }

  /**
   * Removes and returns the top element from the stack.
   * @returns {*} The value of the removed node or undefined if the stack is empty.
   */
  pop() {
    if (this.length === 0) {
      return undefined;
    }

    let temp = this.first;
    this.first = this.first.next;
    temp.next = null;
    this.length--;
    return temp;
  }

  /**
   * Returns the top element of the stack.
   * @returns {*} The value of the top node or undefined if the stack is empty.
   */
  top() {
    if (this.length === 0) {
      return undefined;
    }
    return this.first;
  }
}

const myStack = new Stack();
myStack.push(1);
myStack.push(2);
myStack.push(3);

console.log(myStack);
