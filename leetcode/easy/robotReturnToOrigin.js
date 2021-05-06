/**
 * Given a string representing the sequence of moves a robot vacuum makes,
 * return whether or not it will return to its original position.
 * The string will only contain L, R, U, and D characters, representing left, right, up, and down respectively.
 *
 *  Ex: Given the following strings...
 * "LR", return true
 * "URURD", return false
 * "RUULLDRD", return true
 */

var judgeCircle = (moves) => {
  let UD = 0;
  let LR = 0;

  for (let i = 0; i < moves.length; i++) {
    if (moves[i] === 'U') {
      UD++;
    } else if (moves[i] === 'D') {
      UD--;
    } else if (moves[i] === 'L') {
      LR++;
    } else if (moves[i] === 'R') {
      LR--;
    }
  }

  return UD === 0 && LR === 0;
}

console.log(judgeCircle('RUULLDRD'));