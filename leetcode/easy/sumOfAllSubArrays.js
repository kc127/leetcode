// compute the sum of all subarrays
/**
 * brute force
 *  generate all subarrays O(n^2) runtime operation
 *  compute the sum
 *
 * optimal O(n) run time
 *  use a formula
 *
 *  1 2 3
 *  3 4 3
 *
 *    total sum = nums[i] * (n - i) * (i+1)
 *              = 1 * (3-0) * (0+1)  + (2 * (3-1) * (1+1) + ... )
 *
 * 1
 * 1 2
 * 1 2 3
 *
 * 2
 * 2 3
 *
 * 3
 *
 *  create a sum
 *  iterate over the array
 *    for each element at index i
 *        add to sum :
 */


function sumAllSubarrays (nums) {
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i] * (nums.length - i) * (i+1);
  }
  return sum;
}