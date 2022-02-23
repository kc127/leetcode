/**
 * @param {string} s
 * @return {string[][]}
 */
 var partition = function(s) {
  let res = [];

  let backtrack = (path = [], start = 0) => {
      if(start === s.length) {
          res.push(Array.from(path));
          return;
      }
      for (let i = start; i < s.length; i++) {
          if (isPal(s, start, i)) {
              path.push(s.slice(start, i+1));
              backtrack(path, i+1);
              path.pop();
          }
      }
  }
  backtrack();
  return res;
};

function isPal (s, i, j) {
  while (i < j) {
      if (s[i++] !== s[j--]) {
          return false;
      }
  }
  return true;
}