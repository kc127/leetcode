/**
 * @param {number[]} nums
 * @return {number}
 */
 var findMaxLength = function(nums) {
  let sumMap = {};
  let sum = 0;
  let maxLen = 0;

  for (let i = 0; i < nums.length; i++) {
      sum += nums[i] === 0 ? -1 : 1;
      if (sum === 0) {
          maxLen = Math.max(maxLen, i - 0 + 1);
      } else if (sumMap[sum] !== undefined) {
          maxLen = Math.max(maxLen, i - sumMap[sum]);
      } else {
          sumMap[sum] = i;
      }
  }
  return maxLen;
};