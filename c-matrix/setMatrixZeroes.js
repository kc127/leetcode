/*
Given an m x n integer matrix matrix, if an element is 0, set its entire row and column to 0's, and return the matrix.

You must do it in place.

Input: matrix = [[1,1,1],[1,0,1],[1,1,1]]
Output: [[1,0,1],[0,0,0],[1,0,1]]

*/


/* Brute Force

  traverse through the matrix to look for zero entries
    if we find zero entry at [i,j],
      record row i in a row set,
      record col j in a col set,

 traverse through the matrix again and for every row and col, check if it has
 been marked earlier in our set, if yes, set the value in the cell to 0

 time: O(n*m)(1st pass) + O(n*m)(2nd pass) = O(nm)
 space: O(n + m) = O(n)

*/

var setZeroes = (matrix) => {
  let row = matrix.length;
  let col = matrix[0].length;

  let rowSet = new Set();
  let colSet = new Set();

  // record row and col containing 0 in a set
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (matrix[i][j] === 0) {
        rowSet.add(i);
        colSet.add(j);
      }
    }
  }

  // traverse to set marked row/col to 0
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (rowSet.has(i) || colSet.has(j)) {
        matrix[i][j] = 0;
      }
    }
  }
  return matrix;
}


/*
Optimal Solution: O(1) Space Efficient Approach
*/

let setZeroesOptimal = (matrix) => {
  let row = matrix.length;
  let col = matrix[0].length;

  let isCol = false;

  // traverse the rows (0, row) and cols (1, cols)
  for (let i = 0; i < row; i++) {
    // if any cell in 0th col is 0, set isCol to true
    if (matrix[i][0] === 0) {
      isCol = true;
    }
    // traverse the cols excluding 0th col
    for (let j = 1; j < col; j++) {
      if (matrix[i][j] === 0) {
        matrix[i][0] = 0;
        matrix[0][j] = 0;
      }
    }
  }

  // traverse matrix again starting from 1st row, 1st col to set 0
  for (let i = 1; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (matrix[i][0] === 0 || matrix[0][j] === 0) {
        matrix[i][j] = 0;
      }
    }
  }

  // see if first cell is 0 and if first row needs to be set to 0
  if (matrix[0][0] === 0) {
    for (let j = 0; j < col; j++) {
      matrix[0][j] = 0;
    }
  }

  // see if first col needs to be set to be 0
  if (isCol) {
    for (let i = 0; i < row; i++) {
      matrix[i][j] = 0;
    }
  }

  return matrix;
}

let matrix = [[1,1,1],[1,0,1],[1,1,1]];

console.log(setZeroes(matrix));