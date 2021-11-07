/* 209.
Given an array of positive integers nums and a positive integer target, return the minimal length of a contiguous subarray [numsl, numsl+1, ..., numsr-1, numsr] of which the sum is greater than or equal to target. If there is no such subarray, return 0 instead.

Input: target = 7, nums = [2,3,1,2,4,3]
Output: 2
Explanation: The subarray [4,3] has the minimal length under the problem constraint.

*/

/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */

/**
 *
 * time complexity: O(n);
 * space: O(1)
 */

var minSubArraySum = (target, nums) => {
  if (nums === null || nums.length === 0) {
    return 0;
  }

  let start = 0;
  let end = 0;
  let windowSum = 0;
  let minLength = Number.MAX_SAFE_INTEGER;

  for (end = 0; end < nums.length; end++) {
    windowSum += nums[end];

    while (windowSum >= target) {
      minLength = Math.min(minLength, (end - start) + 1);
      windowSum -= nums[start];
      start++;
    }
  }

  return minLength !== Number.MAX_SAFE_INTEGER ? minLength : 0;
}