/*

  '' C A T
'' 0 1 2 3
C  1 0 1 2
O  2
T  3

'' C A T
'' C

1 add
construct comparison table
  fill 1st row with i = 0 to i length of word1
  fill 1st col with j = 0 to j length of word2

traverse our comparison table
   if characters are equal then add diagonal element at curr position
   else
      curr position = min of values at top, left, diagonal

return the value at the intersection of last row and last col
*/

var editDistance = (word1, word2) => {

  let table = [];

  for (i = 0; i <= word1.length; i++) {
    table[i] = [i];
  }

  for (let j = 1; j <= word2.length; j++) {
    table[0][j] = j;
  }

  for (let i = 1; i <= word1.length; i++) {
    for (let j = 1; j <= word2.length; j++) {
      if (word1[i-1] === word2[j-1]) {
        table[i][j] = table[i-1][j-1];
      } else {
        let top = table[i-1][j];
        let left = table[i][j-1];
        let diagonal = table[i-1][j-1];
        table[i][j] = Math.min(top, left, diagonal) + 1;
      }
    }
  }
  return table[word1.length][word2.length];
}

console.log(editDistance('CAT','COT'));
