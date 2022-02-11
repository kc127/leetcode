/*
Prompt:
Given n dice with m faces numbered 1 to m, compute the number of ways to get the sum sum

Function Signature: func numDiceCombinations(n: Int, m: Int, sum: Int) -> Int


n  m  t
1  2  1  => [1]

2  6  10 => [4,6] => 3 ways
         => [5,5]
         => [6,4]


2  4  6  => [2,4] => 3 ways
            [4,2]
            [3,3]



  2  4  6

  choices are from faces = [1,2,3,4]
                            ^
                                d1d2
                    globalSum = 1+1 !== 6
                                1+2 !== 6
                                1+3
                                1+4
                                2+1
                                2+2
                                2+3


  f(globalSum, n)

  input                  line number
  f(0,2)                 f(1,1) =
  f(1,1)                 f(2,0) = 0, f(3,0)
  f(2,0)                 returns 0
  f(3,0)                 returns 0

let globalSum = 1
let numberOfWays = 0;

enter recursion
  base cases:
  3. if globalSum === target && n === 0
        increment numberOfWays
        return;
  1. if target = 0, return 0
  2. if n = 0, return 0


  iterate though my choices are from face = 1 to face = m
      if currChoice + globalSum < targetSum
          recurse(globalSum, n-1)
      globalSum -= currChoice
return numberOfWays

     time:
        m^n        branching factor ^ depth
        m^n

    d1              m1,     m2    m9
    d2        m1-m9  m1-m9
    .
    .
    d0

    space:
      call stack at max = m1 * (m1-m9) + m2 * (m1-m9).....+ ...= m^n

      n = 2, m = 4, target = 6
        1 to target
                m   t
       0 1  2 3 4 5 6
     0 0 0  0 0 0 0
    d1 0 1  1 1 1 0 0
    d2 0 0  1 2 3 4

   i know x = 2 ways at sum 3

   number of ways to get 4 = number of ways to currentTarget - 4 by the previous dice + current way
                           =  1 + 1 = 2

   number of ways to get 5 = number of ways to get 4 + current way

  target 4
   d1d2
  [1,3]
  [2,2]
  [3,1]

  target 5
  [1,4]
  [2,3]
  [4,1]
  [3,2]


  coin fib
  n = 2, m = 4 (1,2,3,4)
                           6
      d1.       5         4         3             2
      d2.   4 3 2 1   3 2 1 0   2 1 0 X     1 0 X X
      d3 3 2 1 0

  cache : [[target, number of dices]: number of ways]

  Time: O(NMS)

*/
function numDiceCombinations(n, m, target) {
  let globalSum = 0;
  let numberOfWays = 0;

  if (target === 0 || n === 0) {
     return numberOfWays;
  }

  let findNumberOfWays = (globalSum, n) => {
    if (n === 0 && globalSum === target) {
       numberOfWays++;
       return;
    }
    if (n === 0) {
       return 0;
    }

    for (let face = 1; face <= m; face++) {
      if (face + globalSum <= target) {
         globalSum += face;
         findNumberOfWays(globalSum, n - 1);
         globalSum -= face;
      }
    }
  }

  findNumberOfWays(globalSum, n);
  return numberOfWays;
}

console.log(numDiceCombinations(1,2,1), " expect 1");
console.log(numDiceCombinations(2,4,6), " expect 3");
console.log(numDiceCombinations(2,6,10), " expect 3");
console.log(numDiceCombinations(2,6,6), " expect 5");
