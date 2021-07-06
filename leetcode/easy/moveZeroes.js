/**
 * Given an integer array nums, move all 0's to the end of it while maintaining
 * the relative order of the non-zero elements.
 *
 * Note that you must do this in-place without making a copy of the array.
 *
 * I: array of integers
 * O: array of integers
 * C: O(1) space, non-zeroes must maintain relative order,
 * E:
 *
 */

/**
 *  brute-force solution
 *  run time: O(n)
 *  space: O(n)
*/
function moveZeroes(nums) {
  let nonZeroes = [];

  for (let n of nums) {
    if (n !== 0) {
      nonZeroes.push(n);
    }
  }

  let i = 0;
  for (; i < nonZeroes.length; i++) {
    nums[i] = nonZeroes[i];
  }

  for (; i < nums.length; i++) {
    nums[i] = 0;
  }

  return nums;
}

/**
 * optimal
 * run time:
 * space:
 */

function moveZeroesOptimal (nums) {
  let 
}

let nums = [1, 0, 2, 0, 0, 7];

console.log(moveZeroes(nums));