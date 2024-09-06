// Min Stack

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
 * @param {*} value - The value for the node.
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
    }
    return this;
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

  /**
   * Returns the minimum value in the stack.
   * @returns {*} The minimum value or undefined if the stack is empty.
   */
  min() {
    if (this.length === 0) {
      return undefined;
    }

    let current = this.first;
    let minValue = current.value;

    while (current.next) {
      current = current.next;
      if (current.value < minValue) {
        console.log(current.value, minValue);
        minValue = current.value;
      }
    }

    return minValue;
  }
}

// Example usage
const theStack = new Stack();
theStack.push(1);
theStack.push(2);
theStack.push(3);

console.log(theStack.min());
