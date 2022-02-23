/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var subsetsWithDup = function(nums) {
  let subsets = [];
  nums.sort((a,b) => a-b)
  let backtrack = (runningChoices = [], start = 0) => {
      subsets.push([...runningChoices]);
      for (let i = start; i < nums.length; i++) {
          if (i !== start && nums[i] === nums[i-1]) {
              continue;
          }
          runningChoices.push(nums[i]);
          backtrack(runningChoices,i+1);
          runningChoices.pop();
      }
  }
  backtrack();
  return subsets;
};