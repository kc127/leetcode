/**
 Given a string s, find the length of the longest substring without repeating characters.



Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
Example 2:

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1
 */


/**
 * @param {string} s
 * @return {number}
 */

var lengthOfLongestSubstring = (s) => {
  if (s === null || s.length === 0) {
    return 0;
  }

  let start = 0, end = 0;
  let uniqueChars = new Set();
  let maxLen = 0;
  for (end = 0; end < s.length; end++) {
    let char = s.charAt(end);

    while (uniqueChars.has(char)) {
      uniqueChars.delete(s.charAt(start));
      start++;
    }

    uniqueChars.add(char);
    maxLen = Math.max(maxLen, uniqueChars.size)
  }
  return maxLen;
}

let s = "pwwkew";
console.log(lengthOfLongestSubstring(s));