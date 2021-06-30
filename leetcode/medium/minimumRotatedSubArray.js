/**
 * Given the sorted rotated array nums of unique elements, return the minimum element of this array.
 *
 * Input: nums = [3,4,5,1,2]
 * Output: 1
 * Explanation: The original array was [1,2,3,4,5] rotated 3 times.
 *
 */

var findMin = (nums) => {
  let left = 0;
  let right = nums.length - 1;
  let minElem = nums[nums.length - 1];

  while (left <= right) {
    let mid = left + Math.floor((right - left)/2);

    if (nums[mid] <= minElem) {
      minElem = nums[mid];
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return minElem;
}

let nums = [3,4,5,1,2];

console.log(findMin(nums))