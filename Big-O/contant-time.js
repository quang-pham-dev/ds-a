// O(1): Constant time; the execution time does not change with the size of the input.

const findFirstElement = (arr) => {
  return arr[0];
};
console.log(findFirstElement([1, 2, 3, 4, 5])); // O(1)

const getFriend = (friends, index) => friends[index];
console.log(getFriend(["quang", "thu", "nguyen", "toan"], 0)); // O(1)

// O(1) is the best time complexity because the execution time does not change with the size of the input.
