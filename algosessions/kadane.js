/*
1. Return the maximum subarray
In this variation, instead of returning the max sum, return the actual array containing the max sum.

Ex.
[5, 6, 1, -13, 1, 3] returns [5, 6, 1]
*/
var maxSubArray = function(nums) {
  let globalSum = nums[0];
  let currSum = nums[0];
  let start = 0;
  let end = 0;
  for (let i = 1; i < nums.length; i++) {
      if (nums[i] > currSum + nums[i]) {
          start = i;
          currSum = nums[i];
      } else {
          currSum = currSum + nums[i];
      }

      if (globalSum < currSum) {
          end = i;
          globalSum = currSum;
      }
  }

  return nums.slice(start, end+1);
};

/*

2. Maximum Monotonically Increasing Subarray
In this variation, you want to find a monotonically increasing subarray with the largest sum.

Ex.
[1, 3, 10, 2, 3, 4] returns [1, 3, 10]
In this example, the two monotonically increasing subarrays are [1, 3, 10] and [2, 3, 4] but [1, 3, 10] has a larger sum

high level approach
    generate all subarrays O(n^2)
    if subarray is monotonic
       compute sum, store in a map with sum as key, subarray as value
    return the subarray with max key
*/

function maximumMonotonic(nums) {
  let subarraySum = {};
  
}
