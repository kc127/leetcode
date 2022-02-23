/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var permuteUnique = function(nums) {
  let paths = [];
  let used = Array(nums.length).fill(false);
  nums.sort((a,b) => a-b);
  let backtrack = (path, used) => {
      if (path.length === nums.length) {
          paths.push([...path]);
          return;
      }

      for (let i = 0; i < nums.length; i++) {
          if (used[i] || (i !== 0 && nums[i] === nums[i-1] && !used[i-1])) {
              continue;
          }
          path.push(nums[i]);
          used[i] = true;
          backtrack(path, used);
          path.pop();
          used[i] = false;
      }
  }
  backtrack([],used);
  return paths;
};