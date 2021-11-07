/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
 var isToeplitzMatrix = function(matrix) {
  if (matrix.length === 0) {
      return true;
  }
  let rowLen = matrix.length;
  let colLen = matrix[0].length;

  // traverse along first row
  for (let i = 0; i < matrix[0].length; i++) {
      if (!checkDiagonal(0, i, matrix)) {
          return false;
      }
  }

  // traverse along first column
  for (let j = 1; j < matrix.length; j++) {
      if (!checkDiagonal(j, 0, matrix)) {
          return false;
      }
  }
  return true;
};

var checkDiagonal = (i, j, matrix) => {
  let initialVal = matrix[i][j];
  while (i < matrix.length && j < matrix[0].length) {
      if (matrix[i][j] !== initialVal) {
          return false;
      }
      i++;
      j++;
  }
  return true;
}