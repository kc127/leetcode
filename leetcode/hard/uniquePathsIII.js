/**
 * @param {number[][]} grid
 * @return {number}
 */
/*
    visited set
    dfs
    backtracking
*/
var uniquePathsIII = function(grid) {
  if (grid.length === 0 || grid === null) return 0;

  let m = grid.length;
  let n = grid[0].length;
  let dirs = [[-1,0],[0,1],[1,0],[0,-1]];
  let start_r = 0;
  let start_c = 0;
  let end_r = 0;
  let end_c = 0;

  let empty = 1;

  for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
          if (grid[i][j] === 1) {
              start_r = i;
              start_c = j;
          } else if (grid[i][j] === 2) {
              end_r = i;
              end_c = j;
          } else if (grid[i][j] === 0) {
              empty++;
          }
      }
  }
  let output = 0;
  var dfs = (i, j, walk) => {
      if (grid[i][j] === -1 || grid[i][j] === Infinity) return;
      if (i === end_r && j === end_c) {
          if (walk === empty) {
              output++;
          }
          return;
      }

      grid[i][j] = Infinity;

      for (let [di, dj] of dirs) {
          let x = i + di;
          let y = j + dj;
          if (x < 0 || x >= m || y < 0 || y >= n) continue;
          dfs(x,y,walk+1);
      }
      grid[i][j] = 0;
  }

  dfs(start_r, start_c, 0);
  return output;
};

