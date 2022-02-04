/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 var subarraySum = function(nums, k) {
  let sumFreq = {0:1};
  let sum = 0;
  let count = 0;

  for (let num of nums) {
      sum += num;
      let diff = sum - k;
      if (sumFreq[diff]) {
          count += sumFreq[diff];
      }
      sumFreq[sum] = (sumFreq[sum] || 0) + 1;

  }

  return count;
};