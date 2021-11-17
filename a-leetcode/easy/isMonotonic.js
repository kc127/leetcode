// check if an array is monotonically increasing or decreasing
function isMonotonic(nums) {
  return nums.every((num, i) => i === 0 || num >= nums[i-1]) || nums.every((num, i) => i === 0 || num <= nums[i-1]);
}
