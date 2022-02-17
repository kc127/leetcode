/*
Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.

We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.

You must solve this problem without using the library's sort function.

*/

/* optimal 1 pass with O(n) runtime and O(1) space */
var sortColors = function(nums) {
  let left = 0;
  let right = nums.length - 1;
  let mid = 0;

  while (mid <= right) {
      if (nums[mid] === 0) {
          [nums[left], nums[mid]] = [nums[mid], nums[left]]
          mid++;
          left++;
      } else if (nums[mid] === 1) {
          mid++;
      } else if (nums[mid] === 2) {
          [nums[mid], nums[right]] = [nums[right], nums[mid]];
          right--;
      }
  }
};

/* optimal 2 pass solution O(n) runtime and O(n) space */

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var sortColors = function(nums) {
  if (nums.length === 1) {
      return nums;
  }
  let obj = {};
  for (let num of nums) {
      if (obj[num] === undefined) {
          obj[num] = 1;
      } else {
          obj[num]++;
      }
  }

  for (let i = 0; i < nums.length; i++) {
      if (obj['0']) {
          nums[i] = 0;
          obj['0']--;

      } else if (obj['1']) {
          nums[i] = 1;
          obj['1']--;

      } else if (obj['2']) {
          nums[i] = 2;
          obj['2']--;
      }
  }
};