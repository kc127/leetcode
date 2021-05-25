/**
 * Given an array of integers nums and an integer target,
 * return indices of the two numbers such that they add up to target.
 *
 * Input: nums = [2,7,11,15], target = 9
 * Output: [0,1]
 * Output: Because nums[0] + nums[1] == 9, we return [0, 1].
 *
 */

 var twoSum = function(nums, target) {
  let count = new Map();
  for (let i = 0; i < nums.length; i++) {
      let difference = target - nums[i];
      if (count.has(difference)) {
          return [count.get(difference), i]
      } else {
          count.set(nums[i],i)
      }
  }
};

console.log(twoSum([2,7,11,15],9))
