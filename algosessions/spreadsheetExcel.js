/*
Given a string columnTitle that represents the column title as appear in an Excel sheet, return its corresponding column number.

For example:

A -> 1
B -> 2
C -> 3
...
Z -> 26
AA -> 27

AB -> 28
...


Example 1:

Input: columnTitle = "A"
Output: 1

Example 2:

Input: columnTitle = "AB"
Output: 28

Example 3:

Input: columnTitle = "ZY"
Output: 701


1 <= columnTitle.length <= 7
columnTitle consists only of uppercase English letters.
columnTitle is in the range ["A", "FXSHRXW"].

map = char:index
    = A: 0
    = B: 1
    = Z:25

A = 0 + 1 = 1
B = 1 + 1 = 2
AA = (0 + 1)*10 = 11
^
total => A = (0+1) = 1
AA = total*26 + (0+1)
 ^

        A B C AA AB AC AAA AAB AAC
        1 2 3 4
*/
function titleToNumber(str){
  let letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  let map = new Map();

  // for (let i in letters) {
  //    map[letters[i]] = Number(i);
  // }

  for (let ascii = 65; ascii < 91; ascii++) {
    map.set(String.fromCharCode(ascii), (ascii-65));
  }

  let column = 0;
  for (let i in str) {
    let ch = str[i];
    column *= 26
    column += map[ch] + 1;
  }
  return column;
}

console.log(titleToNumber("AA"), 'expect 27');
console.log(titleToNumber("FXSHRXW"), "expected: 2147483647");
console.log(titleToNumber("ZY"), "expect: 701");
console.log(titleToNumber("AB"), ' expect 28');