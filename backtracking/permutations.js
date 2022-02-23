/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var permute = function(nums) {
  let paths = [];
  let used = Array(nums.length).fill(false);
  let path = [];
  let backtrack = (path, used) => {
      if (path.length === nums.length) {
          paths.push(Array.from(path));
          return paths;
      }
      for (let i = 0; i < nums.length; i++) {
          if (!used[i]) {
              path.push(nums[i]);
              used[i] = true;
              backtrack(path, used);
              path.pop();
              used[i] = false;
          }
      }
  }
  backtrack([],used);
  return paths;
};