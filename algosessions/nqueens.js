/*Given an NxN board, find the number of positions that allow N queens to be placed on the board where no queen can attack another queen.

Queens attack along their row, column, and diagonal. eg, x means the square can be attacked by a queen.

2X2 = no solution

3X3 = no solution
0 0 0
0 0 0
0 0 0

4x4 = yes solution
1 x x x
x x x t
x 3 x x
x t 0 x



[0,null,....]
[ ,  , q

*/

[1, 1,3, 4, ]
let result = 0

function validateBoard(arr) {
  // [ 0, 1, 1, 2 ]
  let set = new Set();
  for (let row = 0; row < arr.length; row++) {
      if (set.has(arr[row])) {
         return false;
      }
      set.add(arr[row]);
  }
  // [1, 2, 3, 4]
  for (let i = 0; i < arr.length; i++) {
    for (let j= 0; j < arr.length; j++) {
      if (i == j) continue;
      if (Math.abs(i -j) == Math.abs(arr[i] - arr[j])) {
        return false;
      }
    }
    //
  }
  return true
}

function helper(row, arr) {

  if (row >= arr.length) {
    const isTrue = validateBoard(arr)
    if(isTrue) {
      result++
    }
    return
  }

  for (let i = 0; i < arr.length; i++) {
    arr[row] = i
    helper(row+1, arr)
  }

  return arr
}



const queens = (n) => {
  let positions = Array(n).fill(null); // [null, null,..null]

  helper(0, positions)

  return result;
}

console.log(queens(8))


input = n

1 0 0 r1
0 2 0 r2
0 0 3 r3

board = [0, 1, 2] 




