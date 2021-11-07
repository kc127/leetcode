/*
1329. Sort the Matrix Diagonally

A matrix diagonal is a diagonal line of cells starting from some cell in either the topmost row or leftmost column and going in the bottom-right direction until reaching the matrix's end. For example, the matrix diagonal starting from mat[2][0], where mat is a 6 x 3 matrix, includes cells mat[2][0], mat[3][1], and mat[4][2].

Given an m x n matrix mat of integers, sort each matrix diagonal in ascending order and return the resulting matrix.

Input: mat = [[3,3,1,1],[2,2,1,2],[1,1,1,2]]
Output: [[1,1,1,1],[1,2,2,2],[1,2,3,3]]


*/

var diagonalSort = (matrix) => {
  let m = matrix.length;
  let n = matrix[0].length;

  // diagonals from first row to last col
  for (let k = 0; k < n; k++) {

  }

  // diagonals from first col to last row
  for (let k = 1; k < m; k++) {

  }

  return matrix;
}

var sort = (matrix, i, j) => {
  let m = matrix.length;
  let n = matrix[0].length;

  while (i < m && j < n) {
    
  }
}