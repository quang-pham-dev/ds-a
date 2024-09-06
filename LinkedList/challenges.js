// # 1: Reverse a singly linked list
// 1.1: Initialize a current node to the head of the list
// 1.2: Initialize a previous node to null
// 1.3: Loop through the list
// 1.4: Set the current node's next to the previous node
// 1.5: Move the previous node to the current node
// 1.6: Move the current node to the next node
// 1.7: Return the previous node

/**
 * Represents a node in a singly linked list.
 * @param {*} value - The value for the node.
 */
class Node {
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
  constructor(value) {
    const newNode = new Node(value);
    this.head = newNode;
    this.tail = newNode;
    this.length = 1;
  }

  /**
   * Adds a new node to the end of the list.
   * @param {*} value - The value for the new node.
   * @returns {LinkedList} The updated linked list.
   */
  push(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  /**
   * Reverses the linked list.
   * @returns {LinkedList} The updated linked list.
   */
  reverse() {
    let temp = this.head;
    this.head = this.tail;
    this.tail = temp;
    let next = temp;
    let prev = null;

    for (let i = 0; i < this.length; i++) {
      next = temp.next;
      temp.next = prev;
      prev = temp;
      temp = next;
    }

    return this;
  }

  /**
   * Prints the values of the linked list.
   */
  printList() {
    let temp = this.head;
    while (temp !== null) {
      console.log(temp.value);
      temp = temp.next;
    }
  }
}

/**
 * Reverses a singly linked list.
 * @param {Node} head - The head of the linked list.
 * @returns {Node} The new head of the reversed linked list.
 */
const reverseSinglyLinkedList = (head) => {
  let current = head;
  let previous = null;

  while (current) {
    const next = current.next;
    current.next = previous;
    previous = current;
    current = next;
  }

  return previous;
};

// Example usage
const myLinkedList = new LinkedList(1);
myLinkedList.push(2);
myLinkedList.push(3);
myLinkedList.push(4);
myLinkedList.printList();
console.log(myLinkedList.reverse());
