let printPrincipalDiagonal = (matrix, n) => {
  let major = [];
  let minor = [];
  for (let i = n - 1; i >= 0; i--) {
    for (let j = n - 1; j >= 0; j--) {
      if (i === j) {
        major.push(matrix[j][i]);
      }
      if (i+j === n-1) {
        minor.push(matrix[j][i]);
      }
    }
  }
  return major;
}


let matrix = [ [ 1, 2, 3, 4 ],
               [ 5, 6, 7, 8 ],
               [ 1, 2, 3, 4 ],
               [ 5, 6, 7, 8 ] ];
let n = 4;

console.log(printPrincipalDiagonal(matrix, n));
