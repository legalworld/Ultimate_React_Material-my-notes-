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
