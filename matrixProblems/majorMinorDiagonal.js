let printPrincipalDiagonal = (matrix, n) => {
  let major = [];
  let minor = [];
  let majorSum = 1;
  let minorSum = 1;
  for (let i = n - 1; i >= 0; i--) {
    for (let j = n - 1; j >= 0; j--) {
      if (i === j) {
        major.push(matrix[j][i]);
        majorSum *= matrix[i][j];
      }
      if (i+j === n-1) {
        minor.push(matrix[j][i]);
        minorSum *= matrix[i][j];
      }
    }
  }
  return majorSum - minorSum;
}


let matrix = [ [ 1, 2, 3, 4 ],
               [ 5, 6, 7, 8 ],
               [ 1, 2, 3, 4 ],
               [ 5, 6, 7, 8 ] ];
let n = 2;

let m = [[3,8],[4,6]]

console.log(printPrincipalDiagonal(m, n));
