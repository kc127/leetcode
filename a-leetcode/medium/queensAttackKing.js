/**
 * @param {number[][]} queens
 * @param {number[]} king
 * @return {number[][]}
 */
 var queensAttacktheKing = function(queens, king) {
  let res = [];
  let seen = Array(8).fill([]).map(val => Array(8).fill(0));

  for (let queen of queens) {
      seen[queen[0]][queen[1]] = true;
  }

  let dirs = [-1,0,1];
  for (let dx of dirs) {
      for (let dy of dirs) {
          if (dx === 0 && dy === 0) continue;
          let x = king[0];
          let y = king[1];
          while (x + dx >= 0 && x + dx < 8 && y + dy >= 0 && y + dy < 8) {
              x += dx;
              y += dy;
              if (seen[x][y]) {
                  res.push([x,y]);
                  break;
              }
          }
      }
  }
  return res;
};