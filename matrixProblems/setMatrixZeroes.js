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

let matrix = [[1,1,1],[1,0,1],[1,1,1]];

console.log(setZeroes(matrix));