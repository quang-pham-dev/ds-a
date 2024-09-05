class ArrayOperations {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  /**
   * @description Adds an item to the end of the array
   * @param item
   * @returns the length of the array after the item is added
   */
  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }

  /**
   * @description Returns the item at the specified index
   * @param index
   * @returns the item at the specified index
   */
  get(index) {
    return this.data[index];
  }

  /**
   * @description Removes the last item from the array
   * @returns the item that was removed from the array
   */
  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }

  /**
   * @description Removes the first item from the array
   * @returns the first item that was removed from the array
   */
  shift() {
    const firstItem = this.data[0];

    for (let i = 0; i < this.length; i++) {
      this.data[i] = this.data[i + 1];
    }

    // Delete the last element (which now contains the original second element)
    delete this.data[this.length - 1];
    this.length--;

    // Return the first item that was removed from the array
    return firstItem;
  }

  /**
   * @description Removes the item at the specified index
   * @param index
   * @returns the item that was removed from the array
   */
  delete(index) {
    // Store the item to be removed
    const item = this.data[index];

    // Shift elements after the target element (excluding the last one)
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }

    // Delete the last element (which now holds the element to be removed)
    delete this.data[this.length - 1];

    // Decrement length
    this.length--;

    // Return the removed item
    return item;
  }
}

const myNewArray = new ArrayOperations();
myNewArray.push("one");
myNewArray.push("two");
myNewArray.push("three");
myNewArray.push("four");
myNewArray.push("five");
console.log(myNewArray);

myNewArray.get(2);
console.log(myNewArray);

myNewArray.pop();
console.log(myNewArray);

myNewArray.shift();
console.log(myNewArray.get(0));
myNewArray.delete(1);
console.log(myNewArray);
