// write a function that takes a string and returns the number of times each word appears in the string
/**
 * Counts the number of occurrences of each word in a given string.
 * @param {string} string - The input string to analyze.
 * @returns {Object} An object where keys are words and values are their occurrence counts.
 * @throws {Error} If the input is not a string.
 */
const wordInstanceCounter = (string) => {
  // Check if the input is a string, throw an error if not
  if (typeof string !== 'string') {
    throw new Error('Input must be a string');
  }

  // Convert the string to lowercase and split it into words
  const words = string.toLowerCase().split(/\s+/);
  const wordCount = {};

  // Count occurrences of each word
  for (const word of words) {
    if (word) {  // Skip empty strings
      // Increment the count for the word, initializing to 0 if it doesn't exist
      wordCount[word] = (wordCount[word] || 0) + 1;
    }
  }

  return wordCount;
};

// Example usage
console.log(wordInstanceCounter("hello my name is Quang my name is"));
// expected output: { hello: 1, my: 2, name: 2, is: 2, quang: 1 }
