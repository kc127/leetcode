/*

we have an NxN chess board

we want to place N queens on this board, such that no two queens attack each other

Q . .
. . .
. . .

how many ways can we do this?

rowsWithQueens: {0}
colsWithQueens {0}

if we keep an array of queen coords placed, then:
for every queen already placed:
  is she in diagonal relationshpi with currently considered cell

this would be O(Q) at every cell

dict[(1,2)

dict[1].push(2)


for row of rows
  if row in usedRows continue
  for col of cols
    if col in usedCols continue



placeQueen(0, n, [])


placeQueen(column, placedQueens) {
  if column == len of board;
    if no more queens:
     count++
    else
    return


  for row in board:
      if valid placement
        place queen here # add to array
        placeQueen(column + 1, numQueens - 1)
        remove queen here # backtracking - pop from array
}




placedQueens = [[0,0], ... ]

isValidPlacement(row, col, n, placedQueens)

  // diagonal validity
  loop through placedQueens
    if (row === currRow || col === currCol) return false
    absRowVal = Math.abs(row - currRow)]
    absColVal = Math.abs(col - currCol)]
    if absColVal === absRowVal:
      return False

  return true;

*/
function nQueens(n) {
  let count = 0
  // let positions = [];

  const helper = (col = 0, placedQueens = []) => {
    if(col === n){
      if(placedQueens.length === n){
        count++
      return
    }

    for (let row = 0; row < n; row++) {
      if (isValidPlacement(row, col, placedQueens)) {
        placedQueens.push([row, col])
        helper(col + 1, placedQueens)
        placedQueens.pop()
      }
    }
  }

  // O(n)
  const isValidPlacement = (row, col, placedQueens) => {
    for (queen of placedQueens) {
      if (queen[0] === row)
        return false;
      if (Math.abs(row - queen[0]) === Math.abs(col - queen[1]))
        return false;
    }
    return true;
  }

  helper()
  return count

}

/*
              branching factor, depth
                    n             n
                    n^n
*/
