/***
 *
 * Given a string s containing just the characters '(', ')', '{', '}', '['
 * and ']', determine if the input string is valid.
 * An input string is valid if:
 *
 * Open brackets must be closed by the same type of brackets.
 * Open brackets must be closed in the correct order.
 *
 * Example 1:
 * Input: s = "()"
 * Output: true
 *
 * Example 2:
 * Input: s = "()[]{}"
 * Output: true
 *
 * /
/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {
  // use stack to store opening parentheses
  let stack = [];
  for (let i = 0; i < s.length; i++) {
      let char = s[i];
      if (char === '(' || char === '[' || char === '{') {
          stack.push(char);
      } else if (char === ')' && stack.length !== 0 && stack[stack.length - 1] === '(') {
          stack.pop();
          console.log(char);
      } else if (char === '}' && stack.length !== 0 && stack[stack.length - 1] === '{') {
          stack.pop();
      } else if (char === ']' && stack.length !== 0 && stack[stack.length - 1] === '[') {
          stack.pop();
      } else {
          return false;
      }

  }
  return stack.length === 0;
};

console.log(isValid('('))