// Selection Sort is a simple and efficient sorting algorithm that works by repeatedly selecting the minimum element
// from the unsorted portion of the array and moving it to the end of the sorted portion.

// Time Complexity: O(n^2)
// Space Complexity: O(1)

/**
 * @param {number[]} arr - The array to be sorted
 * @returns {number[]} - The sorted array
 */
function selectionSort(arr) {
  const n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }

    [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
  }

  return arr;
}

// Example usage:
const array = [64, 34, 25, 12, 22, 11, 90];
console.log("Selection Sort:", selectionSort(array)); // Output: [11, 12, 22, 25, 34, 64, 90]
