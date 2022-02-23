/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
 var combinationSum = function(candidates, target) {
  let paths = [];

  let backtrack = (path = [], start = 0, globalSum = 0) => {
      if (globalSum === target) {
          paths.push(Array.from(path));
          return;
      }
      for (let i = start; i < candidates.length; i++) {
          if (candidates[i] + globalSum <= target) {
              path.push(candidates[i])
              backtrack(path, i, globalSum + candidates[i]);
              path.pop();
          }
      }
  }
  backtrack();
  return paths;
};