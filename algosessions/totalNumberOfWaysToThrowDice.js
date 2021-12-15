/*
You given a total number of dice, the number of faces on each dice and a sum, write a function that determines the total number of ways to throw the dice to get the target sum.

If the number of faces on a dice is X, then numbers on each face will be 1, 2, ..., X. So a dice with 5 faces will have numbers 1, 2, 3, 4 and 5.

Examples
n = 1, faces = 6, total = 3 returns 1 (must throw face 3)
n = 3, faces = 6, total = 7 returns 15


n = 2, faces = 5, total = 8 returns 3 ways


2 dice each with 5 faces and I'm trying to reach 8

sum of 1 die trying to reach 8 - 1 + 1 die trying to reach 8 - 2...
1 die trying to reach 8 - 5
1  null
2  null
3   5
4   4
5   3


1 1
1 2
1 3
1 4
1 5

2 1
2 2
2 3

sum of (1 die trying to reach 8 - 1 + 1 die trying to reach 8 - 2
1 die trying to reach 8 - 5)


n = 2, faces = 5, total = 8 returns 3 ways

     # of ways to reach total
    1 2 3 4 5 6 7 8
  1 1 1 1 1 1 0 0 0
  2 0 1 2 3 4 5 4 3
  3


 initialize a 2-d array  with n rows and n-total cols
 fill out 1st row as a base case:
    1 up till the number of faces, 0 otherwise

  r, i(idx within the row)
  j iterates from i to n-faces:
    if col-j < 0:
      table[r][i] = 0
      i+=1
    else:
      table[r][i] = sum(table[row-1][col-j])


time = O(dice * total * faces )
space = O(dice * total)

*/

function throwDice(numDice, faces, total) {
  // build table
  // rows are dice
  // columns are totals reached
  const table = new Array(numDice + 1).fill().map((_) => {
    return new Array(total + 1).fill(0);
  });
  // fill row of 1 die up to either faces or total
  for ( let waysToTotal = 1; waysToTotal <= Math.min(faces, total); waysToTotal++) {
    table[1][waysToTotal] = 1;
  }
  // for each additional die
  for (let die = 2; die <= numDice; die++) {
    // for each total
    for (let waysToTotal = 1; waysToTotal <= total; waysToTotal++) {
      // for each face or desired total
      for (let face = 1; face <= Math.min(waysToTotal, faces); face++) {
        // current die and total
        table[die][waysToTotal] += table[die - 1][waysToTotal - face];
      }
    }
  }
  console.log(table);
  return table[numDice][total];
}
