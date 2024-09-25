// Merge Sort is a divide-and-conquer algorithm that divides the input array into two halves,
// calls itself for the two halves, and then merges the two sorted halves.

// Time Complexity: O(n log n)
// Space Complexity: O(n)

/**
 * @param {number[]} arr - The array to be sorted
 * @returns {number[]} - The sorted array
 */
function mergeSort(arr) {
  // Early return for empty or single-element arrays
  if (arr.length <= 1) {
    return arr;
  }

  const middle = Math.floor(arr.length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
}

/**
 * @param {number[]} left - The left array
 * @param {number[]} right - The right array
 * @returns {number[]} - The merged array
 */
function merge(left, right) {
  let result = [];
  let i = 0; // left index
  let j = 0; // right index

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }

  return result.concat(left.slice(i)).concat(right.slice(j));
}

// Example usage:
const array = [64, 34, 25, 12, 22, 11, 90];
console.log("Merge Sort:", mergeSort(array)); // Output: [11, 12, 22, 25, 34, 64, 90]
