/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
 var minSubArrayLen = function(target, nums) {
  let minLen = Infinity;
  let j = 0;
  let sum = 0;

  for (let i = 0; i < nums.length; i++) {
      sum += nums[i];
      let diff = sum - target;
      while (sum >= target) {
          minLen = Math.min(minLen, i + 1 - j);
          sum -= nums[j++];
      }
  }
  return minLen === Infinity ? 0 : minLen;
};