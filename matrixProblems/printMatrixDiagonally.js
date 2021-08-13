/* Given a m x n matrix, print the elments diagonally.

Input: matrix = [[1, 2, 3, 4],
                 [5, 6, 7, 8],
                 [9, 10,11,12]]
Output: [1,
         5,2,
         9, 6, 3,
         10, 7, 4,
         11, 8,
         12]

pseudocode:
  m is rows
  n is cols
  traverse from k = 0 to k = m-1 (traversing diagonals which start from first column towards first row)
    what is i: k
    what is j: 0
    as long as i is >= 0 (first row)
      add matrix[i][j] to result
      i = i-1;
      j = j+1;
  traverse from k = 1 to k = n-1 (traversing diagonals which start from last row towards last column)
    what is i: m - 1 (last row)
    what is j: k
    as long as i or is within
      add matrix[i][j] to result
      i = i-1;
      j = j+1;
*/

let printMatrixDiagonally = (matrix) => {
  let m = matrix.length;
  let n = matrix[0].length;
  let result = [];
  // diagonal from first col to first row
  for (let k = 0; k < m; k++) {
    let i = k;
    let j = 0;
    while (i >= 0) {
      result.push(matrix[i][j]);
      i = i - 1;
      j = j + 1;
    }
  }
  // diagonal from last row to last column
  for (let k = 1; k < n; k++) {
    let i = m - 1;
    let j = k;
    while (j < n) {
      result.push(matrix[i][j]);
      i = i - 1;
      j = j + 1;
    }
  }
  return result;
}


let matrix = [[1, 2, 3, 4],
              [5, 6, 7, 8],
              [9, 10,11,12]];

console.log(printMatrixDiagonally(matrix));
