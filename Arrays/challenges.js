// # Challenges
// 1: revert string
// 2: palindrome
// 3: reverse integer
// 4: sentence capitalization
// 5: fizz buzz
// 6: max profit
// 7: array chunking
// 8: two sum

// # 1: Implement revert string
// 1.1: convert string to array(split)
// 1.2: reverse array(reverse)
// 1.3: convert array to string(join)
const revertString = (str) => str.split("").reverse().join("");
const result = revertString("hello");
console.log("revert string: ", result);
console.log("============================");

// # 2: Implement palindrome
// 2.1: convert string to array(split)
// 2.2: reverse array(reverse)
// 2.3: convert array to string(join)
// 2.4: compare string with original string(== or ===)
const palindrome = (str) => str.split("").reverse().join("") === str;
console.log("palindrome: ", palindrome("hello"));
console.log("palindrome: ", palindrome("aba"));
console.log("============================");

// # 3: Implement reverse integer
// 3.1: convert integer to string(toString)
// 3.2: convert string to array(split)
// 3.3: reverse array(reverse)
// 3.4: convert array to string(join)
// 3.5: convert string to integer(parseInt)
// 3.6: return integer
const reverseInteger = (num) =>
  parseInt(num.toString().split("").reverse().join("")) * Math.sign(num);
console.log("reverse integer: ", reverseInteger(123));
console.log("reverse integer: ", reverseInteger(-123));
console.log("reverse integer: ", reverseInteger(120));
console.log("============================");

// # 4: Implement sentence capitalization
// 4.1: convert string to array(split)
// 4.2: map array to capitalize first letter(toUpperCase)
// 4.3: join array to string(join)
// 4.4: return string
const sentenceCapitalization = (str) =>
  str
    .toLowerCase()
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");
console.log("sentence capitalization: ", sentenceCapitalization("hello world"));
console.log("sentence capitalization: ", sentenceCapitalization("Quang Pham"));
console.log("============================");

// # 5: Implement fizz buzz
// 5.1. Print numbers from 1 to n
// 5.2. If number is divisible by 3, print "Fizz"
// 5.3. If number is divisible by 5, print "Buzz"
// 5.4. If number is divisible by 3 and 5, print "FizzBuzz"
// 5. Else, print the number
const fizzBuzz = (n) => {
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
};
fizzBuzz(10);
fizzBuzz(15);
console.log("============================");

// # 6: Implement max profit
// 6.1: Initialize maxProfit to 0
// 6.2: Loop through prices array
// 6.3: If current price is greater than previous price, calculate profit and update maxProfit
// 6.4: Return maxProfit
const maxProfit = (prices) => {
  let minPrice = prices[0]; // Assume the first day is the cheapest to buy
  let maxProfit = 0;

  for (let i = 1; i < prices.length; i++) {
    const currentPrice = prices[i];
    // console.log(currentPrice);

    // Update minimum price if a lower price is found
    minPrice = Math.min(minPrice, currentPrice);
    // console.log(minPrice);

    // Calculate potential profit for selling today
    const potentialProfit = currentPrice - minPrice;
    // console.log(potentialProfit);

    // Update maxProfit if a higher profit is found
    maxProfit = Math.max(maxProfit, potentialProfit);
    // console.log(maxProfit);
  }

  return maxProfit;
};

console.log("max profit: ", maxProfit([7, 1, 5, 3, 6, 4]));
console.log("max profit: ", maxProfit([1, 2, 3, 4, 5]));
console.log("max profit: ", maxProfit([7, 6, 4, 3, 1]));
console.log("============================");

// # 7: Implement array chunking
// 7.1: Initialize an empty array to store the result
// 7.2: Loop through the array
// 7.3: If the current index is divisible by the chunk size, push a new chunk to the result array
// 7.4: Return the result array
const arrayChunking = (array, size) => {
  const chunked = [];
  let index = 0;

  while (index < array.length) {
    const chunk = array.slice(index, index + size);
    chunked.push(chunk);
    index += size;
  }

  return chunked;
};

console.log("array chunking: ", arrayChunking([1, 2, 3, 4, 5, 6, 7, 8], 3));
console.log("============================");

// # 8: Implement two sum
// 8.1: Initialize an empty object to store the result
// 8.2: Loop through the array
// 8.3: If the current index is divisible by the chunk size, push a new chunk to the result array
// 8.4: Return the result array
const twoSum = (nums, target) => {
  // Loop through each number in the list
  for (let i = 0; i < nums.length; i++) {
    // For each number, check the rest of the list
    for (let j = i + 1; j < nums.length; j++) {
      // If the current number and the one we're checking add up to the target, return their indexes
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }

  // If no matching pair is found, return an empty array
  return [];
};

const res = twoSum([2, 7, 11, 15], 9);
const res2 = twoSum([1, 3, 7, 9, 2], 11);
console.log("two sum: ", res);
console.log("two sum: ", res2);
console.log("============================");
