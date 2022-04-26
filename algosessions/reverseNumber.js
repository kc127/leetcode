/*
Today, you will write a function that reverses a given number.

Assumptions:
- no leading 0s
- for trailing 0s, omit 0s in the output
- cannot convert to string

Function Signature: func reverse(number: Int) -> Int

Input: 123
Ouput: 321

res = 0

123 % 10 = 3, 123/10 ~ 12
    res *= 10 + 3 = 3
12 % 10 = 2, 12 / 10 ~ 1
    res = 3 * 10 + 2 = 32
1 % 10 = 1, 1/10 ~ 0
    res = 32 * 10 + 1 = 321


Input: 1548
Ouput: 8451

Input: 0
Output: 0

Input: 10
Output: 1

10 % 10 = 0 , 10/10 = 1
    res = 10 * 0 + 0 = 0
1 % 10 = 1, 1/10 ~ 0
    res = 0 * 10 + 1 = 1

Input: -1
Output: -1

Input: -100
Output: -1

Input: -123
Output: -321

isNegative = true

function reverse(number) {
    const isNegative = number < 0;
    let number = Math.abs(number);
    let reversedNumber = 0;
    while (number > 0) {
        reversedNumber = reversedNumber * 10 + number % 10;
        number /= 10;
    }
    return isNegative ? -reversedNumber : reversedNumber;
}

*/

function reverse(number) {
  let reversedNum = 0;
  let isNegative = false;
  if (number < 0) {
      isNegative = true;
  }
  number = Math.abs(number);

  while (number) {
     let rem = number % 10;
     reversedNum = reversedNum * 10 + rem;
     number = Math.floor(number/10);
  }

  return isNegative ? reversedNum * (-1) : reversedNum;
}

console.log(reverse(123), ' expect 321');
console.log(reverse(1548), ' expect 8451');
console.log(reverse(-1), ' expect -1');
console.log(reverse(0), ' expect 0');
console.log(reverse(10), ' expect 1');
console.log(reverse(-123), ' expect -321');
console.log(reverse(-100), ' expect -1');