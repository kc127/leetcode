/***
 *
 * Given a string s, determine if it is a palindrome,
 * considering only alphanumeric characters and ignoring cases.
 */

/**
 * @param {string} s
 * @return {boolean}
 */
 var isPalindrome = function(s) {
  let i = 0;
  let j = s.length - 1;
  while (i < j) {
    while (i < j && !isAlphanumeric(s[i])) {
      i++;
    }
    while (i < j && !isAlphanumeric(s[j])) {
      j--
    }
    if (i < j && s[i].toLowerCase() !== s[j].toLowerCase()) {
      return false;
    }
  }
  return true;
};


var isAlphanumeric = function(char) {
  if (char.charCodeAt(0) >= 48 && char.charCodeAt(0) <= 57 || char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90 || char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122) {
     return true;
  }
  return false;
}
