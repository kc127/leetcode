/*
Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:
Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.


Function Signature: func isValid(_ input: String) -> Bool

Example valid inputs: "()", ""()[]{}", "([])"

"()" => true
"()[]{}" => true
"([])" => true

Example invalid inputs: "(]", "([)]"
"(]" => false
"([)]" => false
"))" => false

stack approach: time o(n), space: o(n)
if the string is empty, return true
if the given string is odd length => return false
initialize stack ds
iterate through the string
  if the curr char is (, {, [
    push it into our stack
  if the curr char is ), }, ]
    check if the recently pushed char in our stack matches with our curr char
    if yes => pop the opening bracked from stack
    if no => return false
  return true if the stack is empty

*/

function isValid(str) {
  if (str.length === 0 ) {
    return true;
  }

  if (str.length % 2 !== 0) {
    return false;
  }

  let pairs = [];
  let brackets = {
    ')':'(',
    '}':'{',
    ']':'['
  };
  let open = ['(', '{', '['];
  for (let char of str) {
    if (open.includes(char)) {
      pairs.push(char);
    } else {
       let prev = pairs[pairs.length - 1];
       if (brackets[char] === prev) {
          pairs.pop();
       } else {
          return false;
       }
    }
  }
  return pairs.length === 0 ? true : false;
}


console.log(isValid("()[]{}"), "true")
console.log(isValid("[(])"), "false")
console.log(isValid(""), "true")
