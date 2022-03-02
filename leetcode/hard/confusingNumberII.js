/**
 * @param {number} n
 * @return {number}
 */
 var confusingNumberII = function(n) {
  let valid = {
      0:0,
      1:1,
      6:9,
      8:8,
      9:6
  }
  let total = 0;
  let choices = [0,1,6,8,9]
  let backtrack = (num, rotatedVal, pow) => {
      if (num > n) {
          return;
      } else {
          if (num !== rotatedVal) {
              total++;
          }
      }

      for (let choice of choices) {
          backtrack(10 * num + choice, valid[choice] * pow + rotatedVal, pow * 10);
      }
  }

  for (let num of [1,6,8,9] ) {
      backtrack(num, valid[num],10);
  }
  return total;
};