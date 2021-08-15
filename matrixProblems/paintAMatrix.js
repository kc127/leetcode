/**
 Given a 2-color matrix and a point start, flip all points in the adjacent region of start to the opposite color.

 Input:
image = [
  [0, 0, 1, 0],
  [0, 0, 1, 0],
  [0, 0, 1, 0],
  [0, 0, 1, 0]
]
row = 0
col = 1
newColor = 1

Output:
[
  [1, 1, 1, 0],
  [1, 1, 1, 0],
  [1, 1, 1, 0],
  [1, 1, 1, 0],
]

Explanation: (0, 1) is color 0, the whole adjacent region was flipped to 1's


I: matrix, row, col, rowColor
O: matrix
C: cells can only be 1 or 0, in place
 */

/*
  add starting node to queue
  add starting node to visited
  while queue is not empty
    remove

*/
const paint = (image, row, col, newColor) => {
  let queue = [];
  let visited = new Set();
  queue.push([row, col]);
  visited.add([row, col]);
  let originalColor = image[row][col]
  if (originalColor === newColor) {
    return image;
  }
  while (queue.length !== 0) {
    const node = queue.shift();

    image[node[0]][node[1]] = newColor;

    for (const neighbor of getNeighbors(node, image)) {
      let neighborRow = neighbor[0];
      let neighborCol = neighbor[1];

      if (visited.has(neighbor) === false && image[neighborRow][neighborCol] === originalColor) {
        image[neighborRow][neighborCol] === newColor
        visited.add(neighbor);
        queue.push(neighbor);
      }
    }
  }
  return image;
}

const getNeighbors = (coord, image) => {
  let num_rows = image.length;
  let num_cols = image[0].length;

  const [row, col] = coord;
  let deltaRow = [-1, 0, 1, 0];
  let deltaCol = [0, 1, 0, -1];

  let neighbors = [];

  for (let i = 0; i < deltaRow.length; i++) {
    let neighborRow = row + deltaRow[i];
    let neighborCol = col + deltaCol[i];

    if( 0 <= neighborRow && neighborRow < num_rows && 0 <= neighborCol && neighborCol < num_cols) {
      neighbors.push([neighborRow, neighborCol]);
    }
  }
  return neighbors;
}

let image = [
  [0, 0, 1, 0],
  [0, 0, 1, 0],
  [0, 0, 1, 0],
  [0, 0, 1, 0]
]
let row = 1
let col = 1
let coord = [row, col]
let newColor = 1

let image1 = [[0,0,0],[0,1,1]]


console.log(paint(image1, row, col, newColor))