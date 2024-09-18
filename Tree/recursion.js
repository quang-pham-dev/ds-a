// Recursion(Đệ quy)

/**
 * Calculates the factorial of a number using recursion.
 * @param {number} n - The number to calculate the factorial for.
 * @returns {number} The factorial of the number.
 */
function factorial(n) {
  // Base case: if n is 0 or 1, return 1
  if (n === 0 || n === 1) {
    return 1;
  }

  // Recursive case: n! = n * (n-1)!
  return n * factorial(n - 1);
}

/**
 * Calculates the nth Fibonacci number using recursion.
 * @param {number} n - The position of the Fibonacci number to calculate.
 * @returns {number} The nth Fibonacci number.
 */
function fibonacci(n) {
  // Base case: if n is 0 or 1, return n
  if (n <= 1) {
    return n;
  }

  // Recursive case: F(n) = F(n-1) + F(n-2)
  return fibonacci(n - 1) + fibonacci(n - 2);
}

// Usage examples
console.log("Factorial of 5:", factorial(5));
console.log("7th Fibonacci number:", fibonacci(7));
