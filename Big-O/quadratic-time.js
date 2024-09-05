// O(n^2): Quadratic time; the execution time increases quadratically with the size of the input.
const myFriends = ["quang", "thu", "nguyen", "toan"];

function findFriends(arr) {
  const n = arr.length;
  // O(n^2)
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      console.log(`Friend: ${arr[i]}, ${arr[j]}`);
    }
  }
}

// Example usage
findFriends(myFriends);

function searchFriends(arr) {
  const n = arr.length;
  // O(n^2)
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      console.log(`Friend: ${arr[i]}, ${arr[j]}`);
    }
  }
  // O(n)
  for (let k = 0; k < n - 1; k++) {
    console.log(`====>: `, k);
  }

  // If we combine all the "O" operations it becomes O(n^2 + n)
  // O(n^2) is a Dominant term
  // "n" is a Non-Dominant term
  // So we remove the "non-dominant" term and we're only left with O(n^2)
  // This way, we simplify our bigO
}

// Example usage
searchFriends(myFriends);

// Explanation of O(n^2) time complexity:
// - The outer loop runs (n-1) times
// - For each iteration of the outer loop, the inner loop runs (n-i-1) times
// - This results in approximately n * n = n^2 comparisons
// - As the input size (n) grows, the number of operations grows quadratically
