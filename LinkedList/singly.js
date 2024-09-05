/**
 * Represents a node in a singly linked list.
 * Each node contains a value and a reference to the next node.
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
 * Represents a singly linked list.
 * The list keeps track of its head, tail, and length.
 */
class LinkedList {
  /**
   * Creates a new LinkedList with an initial value.
   * @param {*} value - The value for the first node in the list.
   */
  constructor(value) {
    const newNode = new Node(value);
    this.head = newNode;
    this.tail = this.head;
    this.length = 1;
    console.log("constructor head: ", this.head);
    console.log("constructor tail: ", this.tail);
  }

  /**
   * Appends a new node to the end of the list.
   * @param {*} value - The value for the new node.
   */
  push(value) {
    let newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    }

    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;

    console.log("push head: ", this.head);
    console.log("push tail: ", this.tail);
  }

  /**
   * Removes the last node from the list.
   * @returns {Node|undefined} The removed node, or undefined if the list is empty.
   */
  pop() {
    if (!this.head) {
      return undefined;
    }

    let temp = this.head;
    let prev = this.head;

    while (temp.next) {
      prev = temp;
      temp = prev.next;
    }

    this.tail = prev;
    this.tail.next = null;
    this.length--;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    console.log("pop head: ", this.head);
    console.log("pop tail: ", this.tail);
    return temp;
  }

  /**
   * Adds a new node to the beginning of the list.
   * @param {*} value - The value for the new node.
   * @returns {LinkedList} The updated linked list.
   */
  unshift(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    }

    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }

  /**
   * Removes the first node from the list.
   * @returns {Node|undefined} The removed node, or undefined if the list is empty.
   */
  shift() {
    if (!this.head) {
      return undefined;
    }

    let temp = this.head;
    this.head = this.head.next;
    temp.next = null;
    this.length--;

    if (this.length === 0) {
      this.tail = null;
    }

    return temp;
  }

  /**
   * Gets the first node in the list.
   * @returns {Node|null} The first node, or null if the list is empty.
   */
  getFirst() {
    return this.head;
  }

  /**
   * Gets the last node in the list.
   * @returns {Node|null} The last node, or null if the list is empty.
   */
  getLast() {
    if (!this.head) {
      return null;
    }

    let node = this.head;

    while (node) {
      if (!node.next) {
        return node;
      }
      node = node.next;
    }
  }

  /**
   * Gets the node at a specific index in the list.
   * @param {number} index - The index of the desired node.
   * @returns {Node|null} The node at the specified index, or null if not found.
   */
  get(index) {
    let counter = 0;
    let node = this.head;

    while (node) {
      if (counter === index) {
        return node;
      }

      counter++;
      node = node.next;
    }

    return null;
  }

  /**
   * Sets the value of the node at a specific index.
   * @param {number} index - The index of the node to update.
   * @param {*} value - The new value for the node.
   * @returns {boolean} True if the node was updated, false otherwise.
   */
  set(index, value) {
    let temp = this.get(index);

    if (temp) {
      temp.value = value;
      return true;
    }

    return false;
  }

  /**
   * Inserts a new node at a specific index in the list.
   * @param {number} index - The index at which to insert the new node.
   * @param {*} value - The value for the new node.
   * @returns {boolean} True if the node was inserted, false otherwise.
   */
  insert(index, value) {
    if (index === 0) {
      return this.unshift(value);
    }

    if (index === this.length) {
      return this.push(value);
    }

    const newNode = new Node(value);
    const temp = this.get(index - 1);

    newNode.next = temp.next;
    temp.next = newNode;
    this.length++;
    return true;
  }

  /**
   * Gets the size of the list.
   * @returns {number} The number of nodes in the list.
   */
  size() {
    let counter = 0;
    let node = this.head;

    while (node) {
      counter++;
      node = node.next;
    }

    return counter;
  }

  /**
   * Clears the list by removing all nodes.
   */
  clear() {
    this.head = null;
  }
}

// Example usage
const myLinkedList = new LinkedList(1);
myLinkedList.push(2);
myLinkedList.push(3);
console.log(myLinkedList);
