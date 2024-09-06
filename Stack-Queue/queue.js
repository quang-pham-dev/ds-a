// Queue is a linear data structure that follows the First In, First Out (FIFO) principle.
// It has two main operations: enqueue (add an element to the end) and dequeue (remove the front element).
// Queues are commonly used in algorithms like breadth-first search (BFS) and in task scheduling.
// Node class represents an element in the queue

/**
 * Represents a node in a queue.
 * Each node contains a value and a reference to the next node in the queue.
 */
class Node {
  /**
   * Creates a new Node.
   * @param {*} value - The value to be stored in the node.
   */
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

/**
 * Represents a queue.
 * The queue keeps track of its first, last, and length.
 */
class Queue {
  /**
   * Creates a new Queue.
   * @param {*} value - The value for the first node in the queue.
   */
  constructor(value) {
    const newNode = new Node(value);
    this.first = newNode;
    this.last = newNode;
    this.length = 1;
  }

  /**
   * Adds a new element to the end of the queue.
   * @param {*} value - The value for the new node.
   * @returns {Queue} The updated queue.
   */
  enqueue(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.length++;
    return this;
  }

  /**
   * Removes and returns the first element from the queue.
   * @returns {*} The value of the removed node or undefined if the queue is empty.
   */
  dequeue() {
    if (this.length === 0) {
      return undefined;
    }
    let temp = this.first;
    if (this.length === 1) {
      this.first = null;
      this.last = null;
    } else {
      this.first = this.first.next;
      temp.next = null;
    }
    this.length--;
    return temp;
  }
}

// Example usage
const myQueue = new Queue(1);
myQueue.enqueue(2);
myQueue.enqueue(3);
myQueue.enqueue(4);

console.log(myQueue);
