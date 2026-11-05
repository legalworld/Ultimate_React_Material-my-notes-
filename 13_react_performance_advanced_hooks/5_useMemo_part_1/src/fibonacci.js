const memo = {};
export function findFibonnaci(n) {
  if (n in memo) {
    return memo[n];
  }

  if (n <= 1) {
    return n;
  }

  memo[n] = findFibonnaci(n - 1) + findFibonnaci(n - 2);
  return memo[n];
}

// console.log(findFibonnaci(5));

// if i remove the memo obj and return the n as it is then the complexity of this code
// will be exponential ...

// ! -------------------------------------------------------

// Gourab, this is a very important concept in DSA because it teaches you why recursion can become exponential and how memoization reduces that complexity to linear time.

// Let's understand it from the beginning.

// # 1. First, understand the Fibonacci recursion

// The Fibonacci sequence is:

// \\[ 0,1,1,2,3,5,8,13,21,34,\ldots \\]

// The mathematical definition is:

// \\[ Fib(n)= \begin{cases} n & n \leq 1\\\ Fib(n-1)+Fib(n-2) & n > 1 \end{cases} \\]

// Your recursive implementation without memoization would look like this:

// ```
// export function findFibonacci(n) {
//   if (n <= 1) {
//     return n;
//   }

//   return findFibonacci(n - 1) + findFibonacci(n - 2);
// }
// ```

// The code looks simple. But there is a hidden problem.

// It repeatedly calculates the same Fibonacci values.

// # 2. Let's visualize what happens

// Suppose you call:

// ```
// findFibonacci(5);
// ```

// The recursion tree looks like this:

// ## Recursion tree: Fib(5)

// Fib(5)

// Fib(4)

// Fib(3)

// Fib(2)

// Fib(1)

// Fib(2)

// Fib(3)

// Fib(2)

// Fib(1)

// Green nodes represent repeated calculations or base cases. Fib(3) and Fib(2) are calculated multiple times.

// Look carefully.

// To calculate Fib(5):

// - Fib(5) needs Fib(4) and Fib(3).
// - Fib(4) needs Fib(3) and Fib(2).
// - Fib(3) needs Fib(2) and Fib(1).

// Notice something?

// Fib(3) is calculated twice. Fib(2) is calculated three times.

// Now imagine calling Fib(40), Fib(50), or Fib(100).

// The number of repeated calculations becomes enormous.

// # 3. Why does this become exponential?

// Let's look at the recurrence relation for the execution time.

// Every call to Fib(n) makes two recursive calls:

// \\[ T(n)=T(n-1)+T(n-2)+O(1) \\]

// Why?

// Because:

// - Fib(n-1) takes T(n-1) time.
// - Fib(n-2) takes T(n-2) time.
// - Adding their results takes constant time.

// This recurrence grows exponentially.

// The time complexity is:

// \\[ \boxed{O(2^n)} \\]

// More precisely, it grows approximately as:

// \\[ O(\phi^n) \\]

// Where:

// \\[ \phi = \frac{1+\sqrt{5}}{2}\approx 1.618 \\]

// This is the golden ratio.

// # 4. Now introduce memoization

// Let's return to your original code:

// ```
// const memo = {};

// export function findFibonacci(n) {
//   if (n in memo) {
//     return memo[n];
//   }

//   if (n <= 1) {
//     return n;
//   }

//   memo[n] = findFibonacci(n - 1) + findFibonacci(n - 2);

//   return memo[n];
// }
// ```

// What does memoization actually do?

// It stores the result of an already calculated subproblem.

// For example:

// ```
// memo[2] = 1;
// memo[3] = 2;
// memo[4] = 3;
// memo[5] = 5;
// ```

// Now imagine Fib(5) needs Fib(3).

// Instead of calculating Fib(3) again, JavaScript checks:

// ```
// if (n in memo)
// ```

// If Fib(3) has already been calculated, it simply returns the stored result.

// No additional recursion!

// # 5. Visualizing the difference

// Consider the calculation of Fib(5).

// Without memoization

// # 15

// Function calls

// 15 total calls, including repeated subproblems and base cases.

// With memoization

// # 9

// Function calls

// 9 total calls in this implementation, including cache hits and base cases.

// The difference becomes much more significant for larger inputs.

// # 6. Why does memoization make it O(n)?

// This is the most important part.

// Think about all the possible subproblems:

// \\[ Fib(0), Fib(1), Fib(2), \ldots, Fib(n) \\]

// There are only n + 1 distinct Fibonacci values to calculate.

// With memoization:

// 1. Fib(0) and Fib(1) are base cases.
// 2. Fib(2) is calculated once.
// 3. Fib(3) is calculated once.
// 4. Fib(4) is calculated once.
// 5. This continues until Fib(n).

// Each distinct subproblem is calculated at most once.

// Therefore:

// \\[ \boxed{Time=O(n)} \\]

// And because the recursion can reach a depth of n:

// \\[ \boxed{Space=O(n)} \\]

// The space complexity includes the recursion call stack and memo object.

// # 7. The general DSA pattern you should remember

// This is called Top-Down Dynamic Programming with Memoization.

// Whenever you encounter a recursive problem, ask yourself these questions:

// 1. Does my recursive function solve smaller versions of the same problem?
// 2. Are the same smaller problems being calculated repeatedly?
// 3. Can I store their answers and reuse them?

// If the answer is yes, memoization might be applicable.

// The general template:

// ```
// const memo = {};

// function solve(state) {

//   // 1. Check whether the answer already exists
//   if (state in memo) {
//     return memo[state];
//   }

//   // 2. Base case
//   if (/* base condition */) {
//     return /* base answer */;
//   }

//   // 3. Solve smaller subproblems
//   const result = /* recursive calculations */;

//   // 4. Store the answer
//   memo[state] = result;

//   // 5. Return the answer
//   return result;
// }
// ```

// # 8. One more important distinction

// There are actually two ways to implement Fibonacci using Dynamic Programming.

// | Approach               | Time  | Auxiliary space |
// | ---------------------- | ----- | --------------- |
// | Normal recursion       | O(2ⁿ) | O(n)            |
// | Memoization (Top-Down) | O(n)  | O(n)            |
// | Tabulation (Bottom-Up) | O(n)  | O(n)            |
// | Space optimized        | O(n)  | O(1)            |

// Space-optimized Fibonacci:

// ```
// function fib(n) {
//   if (n <= 1) return n;

//   let prev2 = 0;
//   let prev1 = 1;

//   for (let i = 2; i <= n; i++) {
//     let current = prev1 + prev2;

//     prev2 = prev1;
//     prev1 = current;
//   }

//   return prev1;
// }
// ```

// Here we don't even need a memo object or recursion.

// We only remember the previous two Fibonacci values.

// My recommendation: Before moving to more complicated DP problems, make sure you understand these three things:

// - Recursion tree: Why are subproblems repeated?
// - Memoization: How do we avoid solving the same subproblem twice?
// - Tabulation: How do we solve subproblems iteratively?

// These three concepts form the foundation of Dynamic Programming.

// !-----------------------------------------------------------------------------------------------

// Exactly! When `Fib(5)` needs `Fib(3)`, JavaScript retrieves the value directly from `memo[3]`, not `memo[4]`.

// Let's trace the execution so you can see exactly what happens.

// ## 1. Suppose we call Fib(5)

// ```
// const memo = {};

// function fib(n) {
//   if (n in memo) {
//     console.log("Cache hit:", n, "=", memo[n]);
//     return memo[n];
//   }

//   if (n <= 1) return n;

//   memo[n] = fib(n - 1) + fib(n - 2);

//   return memo[n];
// }

// console.log(fib(5));
// ```

// ## 2. Let's trace the execution

// Initially:

// ```
// memo = {}
// ```

// We call `fib(5)`.

// Step 1: `fib(5)` needs:

// ```
// fib(4) + fib(3)
// ```

// Step 2: `fib(4)` needs:

// ```
// fib(3) + fib(2)
// ```

// Step 3: `fib(3)` needs:

// ```
// fib(2) + fib(1)
// ```

// Step 4: `fib(2)` needs:

// ```
// fib(1) + fib(0)
// ```

// Both are base cases, so:

// ```
// memo[2] = 1;
// ```

// Now `fib(3)` finishes:

// ```
// memo[3] = 2;
// ```

// Now `fib(4)` needs `fib(2)`.

// Cache hit

// ```
// if (2 in memo) {
//   return memo[2]; // Returns 1
// }
// ```

// So:

// ```
// memo[4] = 2 + 1; // 3
// ```

// Now comes the important part!

// Step 5: We return to `fib(5)`.

// Remember, `fib(5)` was waiting for this:

// ```
// fib(4) + fib(3)
// ```

// We have finished `fib(4)`. Now JavaScript executes `fib(3)`.

// But look at our memo object:

// ```
// memo = {
//   2: 1,
//   3: 2,
//   4: 3
// }
// ```

// Cache hit!

// ```
// if (3 in memo) {
//   return memo[3]; // Returns 2
// }
// ```

// It immediately returns 2. It doesn't execute the recursive calls inside Fib(3) again.

// Finally:

// ```
// memo[5] = 3 + 2; // 5
// ```

// ## 3. Complete execution summary

// ## Memo object evolution

// 1. Initially

//    `{ }`
// 2. Fib(2) calculated

//    `{ 2: 1 }`
// 3. Fib(3) calculated

//    `{ 2: 1, 3: 2 }`
// 4. Fib(4) calculated

//    `{ 2: 1, 3: 2, 4: 3 }`
// 5. Fib(3) cache hit

//    Returns `memo[3]`, which is `2`.
// 6. Fib(5) calculated

//    `{ 2: 1, 3: 2, 4: 3, 5: 5 }`

// Final answer

// # 5

// ## 4. The most important thing to understand

// Think of the memo object as a dictionary.

// When you write:

// ```
// if (n in memo) {
//   return memo[n];
// }
// ```

// You are saying:

// "Have I already solved this particular subproblem? If yes, give me its answer immediately."

// So:

// - `memo[2]` gives you the answer to Fib(2).
// - `memo[3]` gives you the answer to Fib(3).
// - `memo[4]` gives you the answer to Fib(4).

// The key is that the argument `n` determines which cache entry is retrieved.

// `fib(3)` retrieves `memo[3]`, never `memo[4]`.

// That's the entire idea behind memoization!
