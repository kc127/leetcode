// 1. isPalindrome

/*
This is an easier version of the original problem. In this variation, simply return true if the string is a palindrome and false otherwise.

Ex.
“abccba” → true
    ^
   -^
"0p0" => true
"p0p" => true

“a” → true
“ab” → false

Assumptions
- no spaces
- all lowercase

*/



// 4. Longest symmetric sum subsequence

/*
function isPalindrome(str) {
  if (str.length <= 1) {
     return true;
  }
  let i = 0;
  let j = str.length - 1;

  while (i <= j) {
    if (str[i] !== str[j]) {
      return false;
    }
    i++;
    j--;
  }
  return true;
}

console.log(isPalindrome("abccba"),true);
console.log(isPalindrome("0p0"),true);
console.log(isPalindrome("ab"),false);
console.log(isPalindrome("a"),true);
*/


// 2. Helper function solution

/*
func lps(input: String) -> String {
    let longest = ""
    for i in range(input.length) {
        result = lpsHelper(input, i)
        longest = result.length > longest ? result : longest
    }
    return longest
}
func lpsHelper(input: String, index: i) -> String {
     // Your code
}




 oddLen = checkPal (s, i-1, i+1)
 eveLen = checkPal (s, i, i+1);
abcbcba
^
      ^
  *
abba
^
   ^

compare left to i
compare right to i
compare left to right


  *
abbbba
^
     ^

*/

// function lps(input) {
//     let longest = ""
//     for (let i = 0; i < input.length; i++) {
//         let odd = lpsHelper(input, i-1, i+1) // aba
//         let even = lpsHelper(input, i, i+1)
//         let result = odd.length > even.length ? odd : even;
//         longest = result.length > longest.length ? result : longest;
//     }
//     return longest
// }

// function lpsHelper(input, i, j) {

//   while (i >= 0 && j < input.length) {
//     if (input[i] !== input[j]) {
//       break
//     }
//     i--
//     j++
//   }

//   return input.slice(i+1, j)
// }

// console.log(lps("abccba"),"abccba");
// console.log(lps("0p0"),"0p0");
// console.log(lps("ab"),"a");
// console.log(lps("a"),"a");
// console.log(lps("abbaacccca"),"acccca");
// console.log(lps("abcdeffgh"),"ff");



// 3. Longest palindromic mountainous subsequence

/*
A mountainous sequence is an array that monotonically increases to a peak and then monotonically decreases. A palindromic mountainous sequence increases for the same amount of time as it decreases. It must have a singular peak:

[0, 2, 5, 3, 1] is valid
[0, 1, 2, 2, 1, 0] is not valid because it does not have a singular peak.

Given an array, find the longest palindromic mountainous subsequence:

Ex.
[1, 0, 2, 5, 3, 1, 4, 6, 1] returns [0, 2, 5, 3, 1]
                   ^
 longest = [base, i]
 base = 0
 peak = 5
 increasing = 0,2
 decreasing = 3,1


           i
 [1, 0, 2, 5, 3, 1, 4, 6, 1]
  ^
                    ^
 lastLeft =  0
 lastRight = 1
 left = 1  is left < lastLeft?
 right = 4 is right < lastRight?

*/


function getLongestPeak(nums) {
  let longest = []
  for (let i = 0; i < nums.length; i++) {
      let result = lpms(nums, i-1, i+1, nums[i])
      //console.log({result})
      result = result.length > 3 ? result : [];
      longest = result.length > longest.length ? result.slice() : longest;
  }
  return longest;
}

// 2 5 2
// i S j

function lpms(input, i, j, startValue) {

let lastLeft = startValue
let lastRight = startValue;

while (i >= 0 && j < input.length) {
  if (input[i] >= lastLeft || lastRight <= input[j]) {
    break
  }

  lastLeft = input[i];
  lastRight = input[j];

  i--;
  j++;
}

return input.slice(i+1, j)
}

console.log(getLongestPeak([1, 0, 2, 5, 3, 1, 4, 6, 1]),[0, 2, 5, 3, 1])
console.log(getLongestPeak([1, 0, 2, 2, 1]),[])

// https://leetcode.com/problems/palindromic-substrings/




