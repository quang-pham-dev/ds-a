// write a function that takes an array of strings and returns an array of arrays, where each subarray contains anagrams of each other

/**
 * Groups anagrams in an array of strings.
 * @param {string[]} strings - The array of strings to group.
 * @returns {string[][]} An array of arrays, where each subarray contains anagrams of each other.
 */
const groupAnagrams = (strings) => {
  // Create a Map to store anagrams
  const anagramGroups = new Map();

  // Iterate through each string in the input array
  for (const str of strings) {
    // Sort the string and use it as the key
    const sortedStr = str.split("").sort().join("");

    // If the sorted string is already a key in the Map, add the original string to the existing group
    if (anagramGroups.has(sortedStr)) {
      anagramGroups.get(sortedStr).push(str);
    } else {
      // Otherwise, create a new group with the sorted string as the key
      anagramGroups.set(sortedStr, [str]);
    }
  }

  // Convert the Map values to an array of arrays
  return Array.from(anagramGroups.values());
};

// Example usage
const strings = ["eat", "tea", "tan", "ate", "nat", "bat"];
console.log(groupAnagrams(strings)); // expected output: [["eat", "tea", "ate"], ["tan", "nat"], ["bat"]]
