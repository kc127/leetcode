/*
Given an m x n matrix, return all elements of the matrix in spiral order.

Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
Output: [1,2,3,6,9,8,7,4,5]

*/

var spiralOrder = (matrix) => {
  let n = matrix.length, m = matrix[0].length;
  let top = 0, bottom = n - 1;
  let left = 0, right = m - 1;

  let output = [];
  let dir = 0;

  while (top <= bottom && left <= right) {
    if (dir === 0) {
      // traverse left to right
      for (let i = left; i <= right; i++) {
        output.push(matrix[top][i]);
      }
      top++;
    } else if (dir === 1) {
      // traverse top to bottom
      for (let i = top; i <= bottom; i++) {
        output.push(matrix[i][right]);
      }
      right--;
    } else if (dir === 2) {
      // traverse right to left
      for (let i = right; i >= left; i--) {
        output.push(matrix[bottom][i]);
      }
      bottom--;
    } else if (dir === 4) {
      // traverse bottom to top
      for (let i = bottom; i >= top; i--) {
        output.push(matrix[i][left]);
      }
      left++;
    }
    dir = (dir + 1) % 4;
  }
  return output;
}

let matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]];
console.log(spiralOrder(matrix));