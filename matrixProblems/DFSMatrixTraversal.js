let grid = [
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]

let num_rows = grid.length;
let num_cols = grid[0].length;

/* modifying input grid */
var dfs = (root) => {
  let [r,c] = root;

  // check bounds
  if (r < 0 || r >= num_rows || c < 0 || c >= num_cols || grid[r][c] === '0') {
    return;
  }

  grid[r][c] = '0';
  let dirs = [[r-1, c], [r, c+1], [r+1, c], [r, c-1]];

  for (let dir of dirs) {
    dfs(dir);
  }
  
}