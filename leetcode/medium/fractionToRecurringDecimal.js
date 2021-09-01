/*
Given two integers representing the numerator and denominator of a fraction, return the fraction in string format.

If the fractional part is repeating, enclose the repeating part in parentheses.

If multiple answers are possible, return any of them.

It is guaranteed that the length of the answer string is less than 104 for all the given inputs.

Example 1:

Input: numerator = 1, denominator = 2
Output: "0.5"
Example 2:

Input: numerator = 2, denominator = 1
Output: "2"
Example 3:

Input: numerator = 2, denominator = 3
Output: "0.(6)"
Example 4:

Input: numerator = 4, denominator = 333
Output: "0.(012)"
Example 5:

Input: numerator = 1, denominator = 5
Output: "0.2"



*/


var fractionToDecimal = (numerator, denominator) => {
  if (numerator === 0) {
    return 0;
  }

  let isNegative = false;

  if (numerator < 0 && denominator < 0) {
    isNegative = false;
  }

  if (numerator < 0 || denominator < 0) {
    isNegative = true;
  }

  let quotient = Math.floor (numerator/denominator);
  let remainder = Math.floor (numerator % denominator);
  let result = quotient;
  if (remainder === 0) {
    return isNegative ? "-" + result : result;
  } else {
    let hashMap = new Map();
    result += ".";

    while (remainder !== 0) {
      if (hashMap.has(remainder)) {
        let key = hashMap.get(remainder);
        result = result.slice(0, key) + "(" + result.slice(key);
        result += ")";
        break;
      } else {
        hashMap.set(remainder, result.length);
        remainder *= 10;
        quotient = Math.floor(remainder/denominator);
        remainder = Math.floor(remainder%denominator);
        result += quotient;
      }
    }
  }
  return isNegative ? "-" + result : result;
}




console.log(fractionToDecimal(14,3)) // 4.(6)