/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
 var combinationSum2 = function(candidates, target) {
  let res = [];
  candidates.sort((a,b) => a-b);
  let backtrack = (sum = target, path = [], start = 0) => {
      if (sum < 0) {
          return;
      }
      if (sum === 0) {
          res.push(Array.from(path));
          return;
      }
      for (let i = start; i < candidates.length; i++) {
          if (i !== start && candidates[i] === candidates[i-1]) {
              continue;
          }
          path.push(candidates[i]);
          backtrack(sum - candidates[i], path, i + 1);
          path.pop();
      }
  }
  backtrack();
  return res;
};