/**
 * Given an integer array nums, return true if any value appears
 * at least twice in the array, and return false if
 * every element is distinct.
 *
 * @param {number[]} nums
 * @return {boolean}
 * 
 */
 var containsDuplicate = function(nums) {
  let count = {};
  for (let i = 0; i < nums.length; i++) {
     if(count[nums[i]]) {
       return true;
     } else {
       count[nums[i]] = 1;
     }
  }
  return false;
};