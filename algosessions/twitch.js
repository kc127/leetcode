// Q-2 (Coding Problem) (Longest substring 1)
// Given a string, find the length of the longest substring T that contains at most 1 distinct characters.

// Example 1:

// Input: s = "aaabb"
// Output: 3
// Explanation: T is "aaa" which is 3.
/*

  aaabbb
  3

  ab
  1

  aaaa
  4


  set = (a)
  maxLen = 0


  aaabb
     e
  s

    as long as the length of the set is greater than 1
        window = e - s
        update maximum length
        if set has input[s], delete it
        reset s = e


  ab
  e
  s
*/
function longestSubStr(input) {
  if (input.length === 0) {
     return 0;
  }
  if (input.length === 1) {
      return 1;
  }

  let maxLen = 0;
  let uniqueChar = new Set();
  let end = 0;
  let start = 0;
  // aaabb
  for (end = 0; end < input.length; end++) {
      uniqueChar.add(input[end]); // add a, b
      if (uniqueChar.size > 1) {
         let currLen = end - start;
         maxLen = Math.max(maxLen, currLen);
         if (uniqueChar.has(input[start])){
            uniqueChar.delete(input[start]);
         }
         start = end;
        // start++;
      }
  }
  return Math.max(maxLen, end - start);
}

console.log(longestSubStr('aaabb'), ' expect 3')
console.log(longestSubStr('aaabbb'), ' expect 3')
console.log(longestSubStr('a'), ' expect 1')
console.log(longestSubStr(''), ' expect 0')
console.log(longestSubStr('ab'), ' expect 1')
console.log(longestSubStr('aabbb'), ' expect 3')

// Follow up

// Given a string, find the length of the longest substring T that contains at most 2 distinct characters.

// Example 1:

// Input: s = "eceba", k = 2
//                e
//             s
//    set = {c,b}
//     q = [c, e, b]
// Output: 3
//
// Explanation: T is "ece" which is 3.
// Example 2:

// Input: s = "aa", k = 1
// Output: 2
// Explanation: T is "aa" which is 2.








