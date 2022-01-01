/**
 * @param {string} s
 * @return {string}
 */
 var removeDuplicates = function(s) {
  if (s.length <= 1) {
      return s;
  }
  let stack = [];
  let i = 0;
  while (i < s.length) {
      if (stack.length !== 0) {
          let top = stack[stack.length - 1];
          if (top === s[i]) {
              stack.pop();
          } else {
              stack.push(s[i]);
          }
      } else {
          stack.push(s[i]);
      }
      i++;
  }
  return stack.join('');
};