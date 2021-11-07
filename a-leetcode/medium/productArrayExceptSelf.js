/***
 * Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].
 * The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
 * You must write an algorithm that runs in O(n) time and without using the division operation.
 * Example 1:
 * Input: nums = [1,2,3,4]
 * Output: [24,12,8,6]
 * Example 2:
 * Input: nums = [-1,1,0,-3,3]
 * Output: [0,0,9,0,0]
 *
 * I: array of integers
 * O: array of integers
 * C: O(1) space with O(n) runtime
 * E: empty array, input array of 0 integers
 *
 *  O(n) runtime because we traverse the array in parallel fashion
 * O(1) space because output array space doesn't count
 */

const productOfSelf = (nums) => {
  let output = [];
  output[0] = nums[0];

  for (let i = 1; i < nums.length; i++) {
    output[i] = output[i-1] * nums[i];
  }

  let product = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    if(i === nums.length - 1) {
      output[i] = output[i-1];
      product *= nums[i];
    } else if (i === 0) {
      output[0] = product;
    } else {
      output[i] = output[i-1] * product;
      product *= nums[i];
    }
  }
  return output;
}

console.log(productOfSelf([1,2,3,4]))