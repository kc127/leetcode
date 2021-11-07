/*
Given an input string s, reverse the order of the words.

Input: s = "the sky is blue"
Output: "blue is sky the"

  trim the spaces (leading, trailing, extra spaces in the middle )
  reverse the entire string
  reverse each word in the string
 */

var reverseWords = (str) => {
  let words = removeSpaces(str)length;
  reverseStr(words);
  reverseEachWord(words, 0, words.length - 1);
  return words.join(' ');
}

var reverseStr = (words, left, right) => {
  while (left <= right) {
    [words[left], words[right]] = [words[right], words[left]];
    left++;
    right--;
  }
}

var reverseEachWord = (words) => {
  let left = 0, let right = 0, let n = words.length;
  while (left < 0) {
    while (right < 0 && words[right] !== ' ') right++;
    reverseStr(words, start, right - 1);
    start = right + 1;
    right++;
  }
}