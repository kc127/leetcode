
/***
 * Given an integer array nums, find the contiguous subarray (containing at least one number)
 * which has the largest sum and return its sum.
 *
 * Example 1:
 * Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
 * Output: 6
 * Explanation: [4,-1,2,1] has the largest sum = 6.
 */

// Kadane's algorithm

var maxSubArray1 = function (nums) {
  let globalMax = nums[0];
  let currMax = nums[0];
  let start = 0;
  let end = 0;
  for (let i = 1; i < nums.length; i++) {
    if(nums[i] > currMax + nums[i]) {
      start = i;
      currMax = nums[i];
    } else {
      currMax = currMax + nums[i];
    }

    if(globalMax < currMax) {
      end = i;
      globalMax = currMax;
    }

  }
  //return nums.slice(start, end + 1);
  return globalMax;
}

// brute force O(n^2) runtime, O(1) space
var maxSubArray = function(nums) {
  // initialize a variable maxSubArray to negative inifinity (because nums could be all neg numbers)
  let maxSubArray = Number.MIN_SAFE_INTEGER;
  // loop through nums array to consider each index
  for (let i = 0; i < nums.length; i++) {
     // initialize a variable currentSubArray to 0
      let currentSubArray = 0;
     // loop through the array from the starting index
      for (let j = i; j < nums.length; j++) {
        // each time add the current element to currentSubArray
         currentSubArray += nums[j];
         console.log(currentSubArray);
        // set maxSubArray to the max of maxSubArray, currentSubArray
        maxSubArray = Math.max(maxSubArray, currentSubArray);
        console.log(maxSubArray);
      }
  }
 // return maxSubArray
 return maxSubArray;

};

console.log(maxSubArray1([-2,1,-3,4,-1,2,1,-5,4]))