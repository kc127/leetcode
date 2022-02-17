/**
 * Given an integer array nums, find a peak element, and return its index.
 * If the array contains multiple peaks, return the index to any of the peaks.
 *  Input: nums = [1,2,3,1]
 * Output: 2
 * Explanation: 3 is a peak element and
 * your function should return the index number 2.
 *
 */

var peakElement = (nums) => {
  let left = 0;
  let right = nums.length - 1;
  let boundaryIndex = -1;

  while (left <= right) {
    let mid = left + Math.floor((right - left)/2);

    if(mid === nums.length - 1 || nums[mid] > nums[mid + 1]) {
      boundaryIndex = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
    return boundaryIndex;
}

let nums = [1,2,1,3,5,6,4];
console.log(peakElement(nums));