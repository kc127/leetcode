/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
 var findWords = function(board, words) {

  let res = [];
  let buildTrie = (words) => {
      let root = {};

      for (let word of words) {
          let curr = root;
          for (let char of word) {
              if (!curr[char]) {
                  curr[char] = {};
              }
              curr = curr[char];
          }
          curr.endOfWord = word;
      }
      return root;
  }

  let backtrack = (node, r, c) => {

      if (node.endOfWord) {
          res.push(node.endOfWord);
          node.endOfWord = null;
      }
      if (r < 0 || r >= board.length || c < 0 || c >= board[0].length) {
          return;
      }
      if (!node || !node[board[r][c]]) {
          return;
      }

      let letter = board[r][c]
      board[r][c] = '#';
      let dirs = [[-1,0],[0,1],[1,0],[0,-1]];
      for (let [i,j] of dirs) {
          backtrack(node[letter], i+r, j+c);
      }
      board[r][c] = letter;
  }

  let trie = buildTrie(words);

  for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board[0].length; j++) {
          if (trie[board[i][j]]) {
              backtrack(trie, i, j);
          }
      }
  }
  return res;
};