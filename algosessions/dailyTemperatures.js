/*
Engineering Method:
1. Ask clarifying questions - thoroughly understand the problem
2. Identify potential solutions
3. Choose a solution
4. Implement/Code the solution
5. Test your solution


Daily Temperatures:

Given a list of daily temperatures T, return a list such that, for each day in the input, tells you how many days you would have to wait until a warmer temperature.

Examples
Given the list of temperatures T = [73, 74, 75, 71, 69, 72, 76, 73], your output should be [1, 1, 4, 2, 1, 1, 0, 0].

[73, 74, 75, 71, 69, 72, 76, 73]
[1,  1,  4,  2,  1,  1,  0,  0]

[73, 60, 60, 60]
[0, 0, 0, 0]

[73]
[0]

[72, 68, 75]

brute force: two for loops
  lowTemp =  72
  numberOfDays = nextHighest  - currId



[72, 71, 75]
  0  1    2  3   4    5   6  7
[73, 74, 75, 71, 69, 72, 76, 73]
                              ^
[1, 1, 4, 2, 1, 1, 0, 0]
days = [1, 1,3,2,1]
stack = [6]


currTem = 73
left to Right = [1, 1, 0,


Function Signature
function dailyTemperatures(T)
*/
function dailyTemperaturesBruteForce(T) {
  if (T.length === 1) {
     return [0];
  }

  let days = Array(T.length).fill(0);
  for (let i = 0; i < T.length; i++) {
     for (let j = i + 1; j < T.length; j++) {
         if (T[i] < T[j]) {
             days[i] = j-i;
             break;
         }
     }
  }
  return days;
}

function dailyTemperatures(T) {
  if (T.length === 1) {
     return [0];
  }

  let days = Array(T.length).fill(0);
  let stack = [0];
  for (let i = 1; i < T.length; i++) {
     while (stack.length > 0 && T[i] > T[stack[stack.length - 1]]) {
         let currIdx = stack.pop();
         days[currIdx] = i - currIdx;
     }
     stack.push(i);
  }
  return days;
}

function dailyTemperatures(temps) {
  let results = Array(temps.length).fill(0);
  let stack = [];
  for (let i = 0; i < temps.length; i++) {
    // Continue popping every value lower than this value
    while (stack.length > 0 && temps[stack[stack.length - 1]] < temps[i]) {
      let lastVal = stack.pop();
      results[lastVal] = i - lastVal;
    }
    stack.push(i);
  }

  return results;
}


console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73])) // [1,  1,  4,  2,  1,  1,  0,  0]
console.log(dailyTemperatures([73,60, 60, 60])) // [0,0,0,0]
console.log(dailyTemperatures([73])) // [0]
console.log(dailyTemperatures([]))
/*
Time Complexity: O(n^2)
Space Complexity: O(n)


New Time Complexity: O(n)
New Space Complexity: O(n)