// Bubble Sort is a simple sorting algorithm that repeatedly steps through the list,
// compares adjacent elements, and swaps them if they are in the wrong order.
// The pass through the list is repeated until the list is sorted.
// The algorithm is named for the way smaller or larger elements "bubble" to the top of the list.

// Time Complexity: O(n^2)
// Space Complexity: O(1)
/**
 * Bubble Sort algorithm implementation
 * @param {number[]} arr - The array to be sorted
 * @returns {number[]} - The sorted array
 */
function bubbleSort(arr) {
  const n = arr.length;

  for (let i = 0; i < n - 1; i++) { // let i = n - 1; i > 0; i--
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // Swap elements
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;

        // SHORTHAND [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }

  return arr;
}

// Example usage:
const array = [64, 34, 25, 12, 22, 11, 90];
console.log("Bubble Sort:", bubbleSort(array)); // Output: [11, 12, 22, 25, 34, 64, 90]
