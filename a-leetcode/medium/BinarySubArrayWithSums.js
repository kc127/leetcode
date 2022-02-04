/**
 * @param {number[]} nums
 * @param {number} goal
 * @return {number}
 */
 var numSubarraysWithSum = function(nums, goal) {
  let sumFreq = {0:1};
  let sum = 0;
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
      sum += nums[i];
      let diff = sum - goal;
      if (sumFreq[diff]) {
          count += sumFreq[diff];
      }
      sumFreq[sum] = (sumFreq[sum] || 0) + 1;
  }
  return count;
};