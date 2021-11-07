/*
Given an array of 0s and 1s, group all 0s on one side and 1s on the other side using the minimum number of moves possible. A "move" is a swap between any adjacent positions.

Examples
[0, 1] => 0, no swaps are needed since they are already grouped.
[0, 1, 0] => 1, swap 1 with either 0 to group them.
[1, 0, 1, 1, 0] => 2, swap 0 with 1 then swap it again with the next 1.

[1, 0, 1, 1, 0]
[1, 1, 0, 1, 0]
[1, 1, 1, 0, 0]

Potential solutions:
What if we solved for one side first (e.g. put all 1's on one side?)
We can then find the lowest # of steps if we put all onto one side versus the other (basically reverse the algorithm)

Let's say we put all the 0's on the left

[1,1,1,1,0]
[0,1,1,1,1] -> 4 swaps

swaps = 2 + 3
countzeroes = 1
swaps = 1
countones
[1,1,0,1,0]
  ^
pivot = 0 1
left = 0 -> 2 + 4 - pivot = 5
right = 0 -> 2 -> 2

[1,1,0,1,0]
       ^
pivot = 2
left = 0 -> 0 -> 1
right = 0 + 4 -> 3 - pivot -> 6 -


[0,0,1,1,1] -> 5 swaps (2 for the middle, and 3 for the end)

[1,1,1,0,0]
[0,0,1,1,1] -> 6 swaps (3 for middle, 3 for end)

[1,1,0,1,0,1,0,0] -> 13

zeroIndex=1
swaps=6

Move the left-most 0 to the left for each iteration
Note if two 0's are next to each other, you have to swap the left 0

[1,1,1,0,0]
         i

       swap += i - zeroIndex
           3 - 0
           4 - 1


*/

//[1 1 0 1 0]
//countONes = 2
//swaps = 2
//countOnes = 3
//swaps = 5

function minSwaps(input) {
  let zeroSwaps=0;
  let oneSwaps=0;
  let countZeroes=0;
  let countOnes = 0;
 for (let i = 0; i < input.length; i++) {
  //iterate through
  //each contiguous 1 you encounter, increment countOnes
  //then, when you encounter a 0, swaps += countOnes
  if (input[i] === 1) {
   countOnes++;
  }
  else {
   zeroSwaps += countOnes;
  }
 }
   for (let i = 0; i < input.length; i++) {
  //iterate through
  //each contiguous 1 you encounter, increment countOnes
  //then, when you encounter a 0, swaps += countOnes
  if (input[i] === 0) {
   countZeroes++;
  }
  else {
   oneSwaps += countZeroes;
  }
 }

  return Math.min(zeroSwaps, oneSwaps)

}

console.log(minSwaps([1,1,0,1,0]), 1)
console.log(minSwaps([1,1,1,1,1]), 0)
console.log(minSwaps([1,1,1,1,0]), 0)