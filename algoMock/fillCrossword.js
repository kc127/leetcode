
/*
12/17/2021
You're given a empty crossword board, and a dictionary of words. Fill up the crossword so that each row and each column is a word in the dictionary.

Eg. ["cot", "owe", "cat", "ten", "awe", "car"]

Possible Output [['c', 'o', 't'],
                 ['a', 'w', 'e'],
                 ['t', 'e', 'n']]


c, a, t
o, w  e
t, e, n

example 2:
  [lot, etn, ate, all, awe, len, toe, llt]


l o t
e t n
n

a, t, e
l, l, t
l, e, n


1  2  3
a, t, e
l, o, t

let prefix1 = board[i][0]
let prefix2 = board[i++][j++]



assumptions:
1. the row len of the board is the len of the word
2. all the words have same length
3. not all words have to be used
4. reuse words

pseudocode

    create a n x n board where n is the length of the word
    loop through the words array
      place word1 in the board as the first row
      loop through the rest of the words array
        add the word2 in the board
          check if the prefix in each of the col is valid of not
          if valid, place word2
          if not, continue

    return board

    time:
    space: O(size of the board)

    ["aaa"]


 */

    function fillCrossword(words) {
      let board = new Array(words[0].length).fill([]).map(val => new Array(words[0].length).fill(''));

      let rBoard = 0;

      let addWords = (rBoard, i) => {
        if (i < 0 || i >= words.length) {
            return false;
        }
        board[rBoard] = words[i].split('');
         rBoard++;
        if (isValid(board)) {
            addWords(rBoard, i++);
        } else {
            addWords(rBoard-1, i++)
        }
      }

      addWords(0,0);
      return board;

  //         for (let i = 0; i < words.length; i++) {
  //           let word1 = words[i];
  //           board[rBoard] = word1.split('');
  //           rBoard++;
  //           if (isValid(board)) {

  //           }
  //         }
  //         for (let j = i + 1; j < words.length; j++) {
  //             let word2 = words[j];
  //             board[rBoard] = word2.split('');

  //             let prefixes = getPrefix(rBoard,board[0].length, board);
  //             if (isValid(prefixes)) {

  //             }
  //         }

  }

  console.log(fillCrossword(["cot", "owe", "cat", "ten", "awe", "car"]));