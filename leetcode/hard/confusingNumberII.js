/*
                                new num = p  * v + currVal
                                10 * 1 + 0 = 0
                                10 * 1 + 1 = 11
                                10 * 1 + 6 = 16
                                10 * 1 + 8 = 18
                                10 * 1 + 9 = 19

                                10 * 6 + 0 = 0
                                10 * 6 + 1 = 61
                                10 * 6 + 6 = 66
                                10 * 6 + 8 = 68
                                10 * 6 + 9 = 69

                                new rotatedNum = 10 * valid[currVal] + rotatedVal
                                10 * 0 + 1 = 0
                                10 * 1 + 1 = 11
                                10 * 9 + 1 = 91
                                10 * 8 + 1 = 81
                                10 * 6 + 1 = 61
*/

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