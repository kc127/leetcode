/*
Given a string s which represents an expression, evaluate this expression and return its value.

Input: "12+3*4"
Output: 24

DMAS => parens => exponents => divide => multiply => add => substract

Input: "24/2 + 2"
Output: 12 + 2 => 14

Input: "0/10" => 0
Input: "10/0" => throw expection

approach:



signs = { '/' :'divide', '*': 'multiply', +: 'add', '-': 'substract'}

order: /, *, +, -
signsStack:  +
numStack: 24, 4
12 * 2 + 4
         ^
if next sign is valid
ans = 2 * 12

sign: +
num: 12, 6

12 + 2 * 3 * 4 + 5
             ^

lastSign = '+', o(n/2) ~ o(n)
current = 6
ans = 12 + 6 + 5
time : o(n), space: o(n)
traverse through the string
  - if the curr char is not in signs obj
    - add to numstack
  - if curr char is a sign
    if curr sign is before the sign that was last added
      - compute => pop off the last elem from numStack,
                => grab the next element from string
                => push the res to the num stack
    - add to our signsStack

 time: o(n)
 signStack = '+'
 as long as the signStack and num stack is not empty
  pop off elem from numStack
  pop off elem from signStack
  pop off elem from numStack
  add it to the ans far

 return ans
*/

/*

12 + 2
12 - 2
-12 - 2;


*/
function calculate(str) {
  let lastNum = 1;
  let ans = 0;
  let lastSign = '+';
  let i = 0;
  let signs = ['/','*','+','-'];
  let chToNum = 0;
  while (i < str.length) {
    let ch = str.charAt(i);
    if (!signs.includes(ch)) {

      // check next char to see if it's a number
      while (i < str.length-1 && !signs.includes(str.charAt(i+1))){
         ch += str.charAt(i+1);
         i++;
      }
      let chToNum = Number(ch);
      if (lastSign === '*') {
        let temp = lastNum;
        lastNum = lastNum * chToNum;
        ans += - temp + lastNum;
      } else if (lastSign === '/') {
        let temp = lastNum;
        lastNum = lastNum / chToNum;
        ans += -temp + lastNum;
      } else if (lastSign === '+') {
        ans += chToNum;
        lastNum = chToNum;
      } else if (lastSign === '-') {
        ans += -chToNum;
        lastNum = -chToNum;
      }

    } else {
      lastSign = ch;
    }

    i++;
  }
  return ans;
}


console.log(calculate('2+2*2'),6);
console.log(calculate('12+2*3'),18);
console.log(calculate('12*2+3'),27);
console.log(calculate('2*2*2*2'),16);
