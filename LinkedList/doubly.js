/**
 * Represents a node in a doubly linked list.
 * Each node contains a value and references to the next and previous nodes.
 */
class Node {
  /**
   * Creates a new Node.
   * @param {*} value - The value to be stored in the node.
   */
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

/**
 * Represents a doubly linked list.
 * The list keeps track of its head, tail, and length.
 */
class DoublyLinkedList {
  /**
   * Creates a new DoublyLinkedList with an initial value.
   * @param {*} value - The value for the first node in the list.
   */
  constructor(value) {
    const newNode = new Node(value);
    this.head = newNode;
    this.tail = this.head;
    this.length = 1;
  }

  /**
   * Appends a new node to the end of the list.
   * @param {*} value - The value for the new node.
   * @returns {DoublyLinkedList} The updated doubly linked list.
   */
  push(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }

    this.length++;
    return this;
  }

  /**
   * Removes the last node from the list.
   * @returns {Node|undefined} The removed node, or undefined if the list is empty.
   */
  pop() {
    if (this.length === 0) {
      return undefined;
    }

    let temp = this.tail;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null;
      temp.prev = null;
    }

    this.length--;
    return temp;
  }

  /**
   * Adds a new node to the beginning of the list.
   * @param {*} value - The value for the new node.
   * @returns {DoublyLinkedList} The updated doubly linked list.
   */
  unshift(value) {
    const newNode = new Node(value);

    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }

    this.length++;
    return this;
  }

  /**
   * Removes the first node from the list.
   * @returns {Node|undefined} The removed node, or undefined if the list is empty.
   */
  shift() {
    if (this.length === 0) {
      return undefined;
    }

    let temp = this.head;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
      this.head.prev = null;
      temp.next = null;
    }
    this.length--;
    return temp;
  }
}

// Example usage
const myDoublyLinkedList = new DoublyLinkedList(0);
myDoublyLinkedList.push(1);
myDoublyLinkedList.pop();
myDoublyLinkedList.shift();
console.log(myDoublyLinkedList);
