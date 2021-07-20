/**
 * Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.
 *
 * Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
 * Output: 6
 * Explanation: The above elevation map (black section) is represented by
 * array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped.
 */

var trap = (heights) => {
  // edge case
  if (heights === null || heights.length === 0) {
    return 0;
  }

  let totalWater = 0;

  // create leftMax array which contains water level for each element from left direction
  let leftMax = [];
  leftMax[0] = heights[0];
  for (let i = 1; i < heights.length; i++) {
    leftMax[i] = Math.max(heights[i],leftMax[i-1]);
  }

  // create rightMax array which contains water level for each element from right direction
  let rightMax = heights[heights.length - 1];
  for (let i = heights.length - 2; i >= 0; i--) {
    rightMax[i] = Math.max(heights[i], rightMax[i+1]);
  }

  // for each element in heights
    // take the min of leftMax and righMax for each element,
    // deduct building height from it
    // sum the elements which is total water
  for (let i = 0; i < heights.length; i++) {
    totalWater += Math.min(leftMax[i], rightMax[i]) - heights[i];
  }

  return totalWater;
}