let grid = [
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]

let num_rows = grid.length;
let num_cols = grid[0].length;

var getNeighbors = (start) => {
  let [r,c] = start;
  let neighbors = [];
  let dirs = [[r-1,c],[r,c+1],[r+1,c],[r,c-1]];
  for (let dir of dirs) {
    let [i, j] = dir;
    if (i >= 0 && i < num_rows && j >= 0 && j < num_cols) {
      neighbors.push(dir);
    }
  }
  return neighbors;
}

/* modifying the grid */
var bfs = (root) => {
  let queue = [root];
  let [r,c] = root;

  grid[r][c] = '0'
  while (queue.length) {
    let curr = queue.shift();
    for (let neighbor of getNeighbors(curr)) {
      let [i, j] = neighbor;
      if (grid[i][j] === '0') continue;
      queue.push(neighbor);
      grid[i][j] = '0';
    }
  }
}

/* not modifying the grid */