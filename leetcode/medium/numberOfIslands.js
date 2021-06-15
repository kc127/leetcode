/*
Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.

An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

 */

const grid = [
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]

let num_rows = grid.length;
let num_cols = grid[0].length;

var getNeighbors = (node) => {
  let res = [];

  let [row, col] = node;

  let delta_row = [-1, 0, 1, 0];
  let delta_col = [0, 1, 0, -1];

  for (let i = 0; i < delta_row.length; i++) {
    const r = row + delta_row[i];
    const c = col + delta_col[i];

    if (0 <= r && r < num_rows && 0 <= c && c < num_cols) {
      res.push([r,c])
    }
  }
  return res;
}


var numberOfIslands = (grid) => {
  let count = 0;

  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[0].length; c++) {
      if (grid[r][c] === '0') {
        continue;
      }
      bfs([r,c]);
      count++;
    }
  }
  return count;
}

var bfs = (start) => {

  const queue = [start];
  const [r,c] = start;
  // replace 1 with 0
  grid[r][c] = '0';
  while (queue.length > 0) {
    const node = queue.shift();
    for (const neighbor of getNeighbors(node)) {
      let [r, c] = neighbor;
      if (grid[r][c] === '0') {
        continue;
      }
      queue.push(neighbor);
      // replace 1 with 0;
      grid[r][c] = '0';
    }
  }
}



console.log(numberOfIslands(grid));