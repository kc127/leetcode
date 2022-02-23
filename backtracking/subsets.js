/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var subsets = function(nums) {
  let paths = [];
  let backtrack = (path = [], start = 0) => {
      paths.push([...path]);
      for (let i = start; i < nums.length; i++) {
          path.push(nums[i]);
          backtrack(path, i+1);
          path.pop(nums[i]);
      }
  }
  backtrack();
  return paths;
};