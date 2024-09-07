// write a function that takes an array of numbers and a target sum, and returns an array of two numbers that add up to the target sum

/**
 * Finds two numbers in the given array that add up to the target sum.
 * @param {number[]} nums - The array of numbers to search.
 * @param {number} target - The target sum to find.
 * @returns {number[]} An array containing the indices of the two numbers that add up to the target sum, or an empty array if no such pair is found.
 */
const twoSum = (nums, target) => {
  // Create a Map to store numbers and their indices
  const numMap = new Map();

  // Iterate through the array
  for (let i = 0; i < nums.length; i++) {
    // Calculate the complement (the number needed to reach the target)
    const complement = target - nums[i];
    
    // If the complement exists in the Map, we've found a pair
    if (numMap.has(complement)) {
      // Return the indices of the complement and the current number
      return [numMap.get(complement), i];
    }
    
    // If no pair is found, add the current number and its index to the Map
    numMap.set(nums[i], i);
  }

  // If no solution is found, return an empty array
  return [];
};

// Example usage
const nums = [2, 7, 11, 15];
const target = 9;
console.log(twoSum(nums, target)); // expected [0, 1]
