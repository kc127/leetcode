/*
 Given a binary array nums, return the maximum number of consecutive 1's in the array.

 Example 1:

Input: nums = [1,1,0,1,1,1]
Output: 3
Explanation: The first two digits or the last three digits are consecutive 1s. The maximum number of consecutive 1s is 3.

 */

/**
 * @param {number[]} nums
 * @return {number}
 */

var maxConsecutiveOnes = (nums) => {

  let globalMax = 0, currMax = 0;

  for (let num of nums) {
    globalMax = Math.max(globalMax, currMax = num === 0 ? 0 : currMax + 1)
  }
  return globalMax;
}


let nums = [1,1,0,1,1,1]
console.log(maxConsecutiveOnes(nums))