/*
Given an array containing distinct numbers in the range of 0 to the length of the array, return the number in the range that is missing from the array.
Examples
Input: [3,0,1]
Output: 2
There are 3 numbers, so the range covers 0 to 3.
2 is the missing number because it does not appear in the range.
Input: [0,1]
Output: 2
There are 2 numbers, so the range covers 0 to 2.
2 is the missing number because it does not appear in the range.
Input: [9,6,4,2,3,5,7,0,1]
Output: 8

input: [1,2,3,4]
length = 4, range = 0 to 4
ouput: 0

input: [1,2,3,5] INVALID input
length = 4, range = 0 to 4 = 0, 1, 2, 3, 4


possible solution:
        input = [0,1], len = 2, range = 0, 1, 2
    - create an output array of size input length + 1, fill with 0
      output = [0,0,0]
    - traverse the input

    - traverse the output
        check which index has value 0
    return index


3 Solutions Proposed:
1. Use second Array O(n), O(n)
2. Use HashSet O(n), O(n)
3. Sorting O(nlogn), O(1)

4. Sum
O(n) time + O(1) space

0 to n  = sum (0,n) = X
        = sum(input) = Y
        output = X - Y

input = [1, 0],
      X = sum(0,2) = 3  = n * (n - 1)/2 = 3 * 2/2 = 3 * 1 = 3
      Y = sum(input) = 1
      output = X - Y = 3-1 = 2

assumption:
- unsorted
- valid input

*/
function findMissing(input) {
  let n = input.length;
  let totalSum = n * ((n + 1)/2);
  let runningSum = 0;

  for (let num of input) {
      runningSum += num;
  }
  return totalSum - runningSum;
}

console.log(findMissing([0, 1]), ' expect 2');
console.log(findMissing([1,2,3,4]), ' expect 0');
console.log(findMissing([0,2,3,4]), ' expect 1');
console.log(findMissing([0,1,2,4]),'expect 3');
