/*
Given an input string s, reverse the order of the words.

Input: s = "the sky is blue"
Output: "blue is sky the"

  trim the spaces (leading, trailing, extra spaces in the middle )
  reverse the entire string
  reverse each word in the string
 */

var reverseWords = function(s) {
    let words = removeSpaces(s);
    reverseString(words, 0, words.length - 1);
    reverseEachWord(words);
    return words.join("")
};

var removeSpaces = function(s) {
    s = s.trim();
    let left = 0;
    let right = s.length - 1;
    let words = [];
    while (left <= right) {
        let c = s.charAt(left);
        if (c !== ' ') {
            words.push(c);
        } else if (words[words.length - 1] !== ' ') {
            words.push(c)
        }
        left++;
    }
    return words;
}

var reverseString = function (strArr, left, right) {
    while (left <= right) {
        [strArr[left], strArr[right]] = [strArr[right], strArr[left]];
        left++;
        right--;
    }
}

var reverseEachWord = function (strArr) {
    let start = 0, end = 0, n = strArr.length;
    while (start < n) {
        while (end < n && strArr[end] !== ' ') end++;
        reverseString (strArr, start, end - 1);
        start = end + 1;
        end++;
    }
}

/*
  remove spaces
  convert string to array
  reverse the whole string
  reverse each word in the string
  return array convertd to string

*/
