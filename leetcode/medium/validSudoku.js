/**
 * @param {character[][]} board
 * @return {boolean}
 */
 var isValidSudoku = function(board) {
  let seen = new Set();
  for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
          let c = board[i][j];
          if (c !== '.') {
              if(seen.has(c + ' found in row ' + i) || seen.has(c + ' found in col ' + j) || seen.has(c + ' found in sub-box ' + Math.floor(i/3) + '-' + Math.floor(j/3))) {
                  return false;
              }
              seen.add(c + ' found in row ' + i);
              seen.add(c + ' found in col ' + j);
              seen.add(c + ' found in sub-box ' + Math.floor(i/3) + '-' + Math.floor(j/3));
          }
      }
  }

  return true;
};