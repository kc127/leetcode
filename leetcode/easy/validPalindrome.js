/***
 *
 * Given a string s, determine if it is a palindrome,
 * considering only alphanumeric characters and ignoring cases.
 */

/**
 * @param {string} s
 * @return {boolean}
 *
 * Soln: Two pointers method
 * O(n) time complexity
 * O(1) space complexity
 *
 */

var isPalindrome = (str) => {
  let start = 0;
  let end = str.length - 1;
  while (start < end) {
    let s = str.charCodeAt(start);
    let e = str.charCodeAt(end);
    if (!isAlphanumeric(s)) {
      start++;
      continue;
    }
    if (!isAlphanumeric(e)) {
      end--;
      continue;
    }
    if (isLowerCase(s) !== isLowerCase(e)) {
      return false;
    }
    start++;
    end--;
  }
  return true;
}

var isAlphanumeric = (code) => {
  // number 0 - 9
  if (code >= 48 && code <= 57 ||
      code >= 65 && code <= 90 ||
      code >= 97 && code <= 122) {
      return true
  } else {
      return false;
  }
}

var isLowerCase = (code) => {
  if (code >= 65 && code <= 90) {
    code += 32;
    return code;
  } else {
    return code;
  }
}

console.log(isPalindrome("race a car"));