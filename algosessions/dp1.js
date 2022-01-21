/*

- What is Dynamic Programming?

- When does this strategy apply?

- Dynamic Programming vs Memoization

FAST Approach for Dynamic Programming

1. (F)irst solution - use recursion
2. (A)nalyze - look for patterns
3. Identify recurring (S)ubproblems
4. (T)urn the solution around


https://docs.google.com/spreadsheets/d/1Df1_R6LIEJc-MFADwBuw_qCBdmRV5sKL7CV8j8OhzD0/edit

Problems:
1. Fibonacci numbers
2. Making optimal change
3. How many ways to make change (avoiding duplicates)
4. Is it possible to make change


************* Count how many ways to make a target value
[1, 5], 6 => 2 (5 ones or one 5 and one 1) (ignore 1, 5  == 5, 1)

*************Optimal Change (min number of coins)
coins = [1, 6, 10],  target = 12

function minNumberOfCoins(coins, target) {
  //base case if target is 0
    return 0

    min = Infinity
    for each coin
      let num = minNumberOfCoins(coins, target - coin)

      min = Math.min(min, num + 1)

    return min
}


*************Is it possible?
coins = [3,7] target = 13

       13
    10    6
 ...

 do i ever see a 0?

function isPossible(coins, target) {
  // base case if target is 0
    return true
  for each coin
    if (isPossible(coins, target - coin) retrun true
}

*/


function isPossible(coins, target) {
  let dp = Array(target);
  // Fill in the initial values
  for (let i = 0; i < coins.length; i++) {
    dp[coins[i]] = true;
  }

  for (let i = 1; i <= target; i++) {
      dp[i] = false;
      for (let coin of coins) {
          if (coin <= target) {
            dp[i] |= dp[i - coin]
          }
      }
  }

return dp[target]

}








let callCount = 0;


/**
* Dynamic Programming ALSO uses a memo, but the strategy for filling it
* in is reversed. Instead of starting and N and working down, we do this
* bottom's up. Filling in the answers until we arrive at the one we want.
*/
function fibDP(n) {
if (n === 1 || n === 2) {
  return 1;
}

// Just like memoization, we start with our base cases.
const table = {1: 1, 2: 1};

// Now start small and build up without recursion!
for (let i = 3; i <= n; i++) {
  table[i] = table[i - 1] + table[i - 2];
}

return table[n];
}

console.log(`fib(${100}) = ${fibDP(100)}`);

/**
* Q: What happens when the same "smaller version" appears again and again?
* A: Recursion becomes VERY inefficient.
*
* Memoization - remembering previously computer answers.
*/
function fibMemoized(n) {
// start out with the base cases in our memo.
const memo = {1: 1, 2: 1}

// Now this looks mostly like the strictly recursive
// version.
function fib(n) {
  callCount++;
  // Check the memo for a previously computed answer.
  if (memo[n] !== undefined) {
    return memo[n];
  }

  // Store new answers in the memo.
  memo[n] = fib(n-1) + fib(n-2);
  return memo[n];
}

return fib(n);
}

// console.log(`fib(${30}) = ${fibMemoized(30)}`);
// console.log(`Call Count: ${callCount}`);

/**
* Recursion is useful when a problem's solution is related to the solutions
* to smaller versions of the same problem.
*/
function fibRecursive(n) {
callCount++;
if (n === 1 || n === 2) {
  console.log("base case");
  return 1;
}

return fibRecursive(n - 1) + fibRecursive(n - 2);
}

//console.log(`fib(${20}) = ${fibRecursive(20)}`);
//console.log(`Call Count: ${callCount}`);
