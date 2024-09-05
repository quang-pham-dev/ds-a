// O(log n): Logarithmic time; the execution time increases logarithmically with the size of the input.
const sortedFriends = [
  "alice",
  "bob",
  "charlie",
  "david",
  "eve",
  "frank",
  "grace",
  "henry"
];

function binarySearchFriend(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  let steps = 0;

  // O(log n)
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    steps++;

    console.log(`Step ${steps}: Checking index ${mid}`);

    if (arr[mid] === target) {
      return `Found ${target} at index ${mid} in ${steps} steps`;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return `${target} not found after ${steps} steps`;
}

// Example usage
console.log(binarySearchFriend(sortedFriends, "eve"));
console.log(binarySearchFriend(sortedFriends, "zack"));

// Explanation of O(log n) time complexity:
// - In each iteration, the search space is halved
// - For an array of size n, the maximum number of iterations is log2(n)
// - As the input size grows, the number of operations grows logarithmically
// - Even if we double the input size, we only need one more step
