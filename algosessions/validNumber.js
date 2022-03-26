/*

check if the input is a valid string representation of a number

integer
exponential notation  3e20
floats

+ve or -ve

examples:

"22" => true
"022" => false, leading zero
"1.00" => false, trailing zero
"-22" => true
"+22" => true
"100" => true


"3.2e5" => true
"-3.2e-5" => true
"3.2e5.5" => false

"4." => false
".3" => INVALID false
"0.3" => VALID true

"12 34" => false

types of representation
"2^4" => false
"2.1*10^2" => false
"2.1e2" => true

"123.0" => false
"123.40" => INVALID false
"123.4" => VALID true



Regexy:

/^(\+|-)?([1-9]\d*|0)(\.\d*?[1-9])?((\+|-)?e\d+)?$/
*/

function isValidNumber(string) {
  console.log(string);
  const PLUS_OR_MINUS = "(\\+|-)?"
  const INTEGER_NO_LEADING_ZEROES = "([1-9]\\d*|0)"
  const DECIMAL_NO_TRAILING_ZEROES = "(\\.\\d*?[1-9])?"
  const EXPONENT = "(e" + PLUS_OR_MINUS + INTEGER_NO_LEADING_ZEROES + ")?"
  const START_OF_STRING = "^";
  const END_OF_STRING = "$";
  const NUMBER = new RegExp(START_OF_STRING + PLUS_OR_MINUS + INTEGER_NO_LEADING_ZEROES + DECIMAL_NO_TRAILING_ZEROES + EXPONENT + END_OF_STRING);

  // let re = /^(\+|-)?([1-9]\d*|0)(\.\d*?[1-9])?(e(\+|-)?([1-9]\d*|0))?$/;

  let result = string.match(NUMBER);
  if (!result) {
    return NaN;
  }
  /*
  result[1] = sign
  result[2] = integer part
  result[3] = decimal part with leading .
  result[5] = sign of the exponent
  result[6] = exponent
  */
  let sign = result[1];
  let int_part = result[2];
  let dec_part = result[3]; // .slice(1);
  let sign_exp = result[5];
  let exp = result[6]

  let numStr = sign
  if (sign === '-') {
     sign = parseInt(int_part) * (-1)
  }

  return true;
}

function parseInt(str) {

}


console.log(isValidNumber("22"), true);
console.log(isValidNumber("022"), false);
console.log(isValidNumber("1.00"), false);
console.log(isValidNumber("0.2"), true);
console.log(isValidNumber("0."), false);
console.log(isValidNumber("2."), false);
console.log(isValidNumber("-0"), true);

console.log(isValidNumber("0"), true);
console.log(isValidNumber("-0.2"), true);
console.log(isValidNumber("-22"), true);
console.log(isValidNumber("+22"), true);
console.log(isValidNumber("100"), true);
console.log(isValidNumber("3.2e5"), true);
console.log(isValidNumber("3.2e5.5"), false);
console.log(isValidNumber("3.2e-5"), true);
console.log(isValidNumber(""), false);
console.log(isValidNumber("-3.2e5.5"), false);
console.log(isValidNumber("-3.2e5"), true);
console.log(isValidNumber("-3.2e05"), false);
console.log(isValidNumber("-3.2e0"), true);



