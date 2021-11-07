function rotateImage(matrix) {
  let size = matrix.length - 1;
  let layers = Math.floor(matrix.length/2);

  for (let layer = 0; layer < layers; layer++) {
    for (let i = layer; i < size - layer; i++) {
      let top = matrix[layer][i];
      let right = matrix[i][size - layer];
      let bottom = matrix[size - layer][size - i];
      let left = matrix[size - i][layer];

      matrix[layer][i] = left;
      matrix[i][size - layer] = top;
      matrix[size - layer][size - i] = right;
      matrix[size - i][layer] = bottom;
    }
  }
  return matrix;
}

let matrix = [[1,2,3,4],
[5,6,7,8],
[9,10,11, 12],
[13, 14, 15, 16]]
console.log(rotateImage(matrix))