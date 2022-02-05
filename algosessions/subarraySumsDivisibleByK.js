/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 var subarraysDivByK = function(nums, k) {
  let sumFreq = {0:1};
  let sum = 0;
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
      sum += nums[i];
      let diff = sum % k;
      diff = diff < 0 ? diff + k : diff;
      if (sumFreq[diff] !== undefined) {
          count += sumFreq[diff];
      }
      sumFreq[diff] = (sumFreq[diff] || 0) + 1;
  }
  return count;
};