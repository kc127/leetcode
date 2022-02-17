/*
Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the triplets set must not contain duplicate triplets.



Example 1:

Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]

*/

var threeSum = (nums) => {

  if (nums === null || nums.length === 0) {
    return [];
  }

  let triplets = [];
  // step 1: sort the array
  nums.sort((a,b) => a-b);

  // step 2: traverse the nums array from 0 to nums length
  for (let i = 0; i < nums.length; i++) {
    // step 2.1 if the current element has already been seen, skip it aka check for duplicity
    if (i !== 0 && nums[i] === nums[i-1]) {
      continue;
    }

    // step 3: traverse the remaining elements using pointers from opposite direction at the same speed
    let left = i+1;
    let right = nums.length - 1;
    while (left < right) {
      let sum = nums[i] + nums[left] + nums[right];

      if (sum === 0) {
        triplets.push([nums[i], nums[left], nums[right]]);

        // step 3.1 check if the next element that left points to has already been seen (again checking for duplicity)
        while (left < right && nums[left] === nums[left + 1]) {
          left++;
        }
        // step 3.2 check if the next element that right points to has already been seen, if yes, skip it
        while (left < right && nums[right] === nums[right - 1]) {
          right--;
        }
        left++;
        right--;
      } else if (sum > 0) {
        right--;
      } else {
        left++;
      }
    }
  }
  return triplets;
}

let nums = [-1,0,1,2,-1,-4];
console.log(threeSum(nums));