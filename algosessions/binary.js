/*

Prompt:
Given an integer, return a string representing its binary representation.

Function Signature: func bin(_ input: Int) -> String

4 should return "100"
10 should return "1010"


2^0 = 1
2^1 = 2
2^2 = 4


4%2 = 0, 4/2 = 2
2%2 = 0, 2/2 = 1
1%2 = 1, 1/2 = 0

10%2 = 0, 10/2 = 5
5%2 = 1,  5/2 = 2
2%2 = 0, 2/2 = 1
1%2 = 1, 1/2 = 0

8%2 = 0, 8/2 = 4
4%2 = 0, 4/2 = 2
2%2 = 0, 2/2 = 1
1%2 = 1, 1/2 = 0

8 return '1000'

5%2 = 1, 5/2 = 2
2%2 = 0, 2/2 = 1
1%2 = 1, 1/2 = 0

5 return '101'
          2^2 + 0 + 1 = 5


2%2 = 0, 2/2 = 1
1%2 = 1, 1/2 = 0

isNegative = true
4 return '100'
if isNegative true return -binary representation

0 return 0

n = 1000 => 500 => 250 => 125 => 67 => 30ish => 15 => 7 => 3 => 1

rough time computation
= number of steps * (1 divide operation + 1 mod operation) = number of steps

2^0
2^1
2^2
2^3
2^4
2^5
..
2^9

*/
function bin(n) {
  if (n === 0) {
    return '0';
  }
  let isNegative = n < 0 ? true : false;
  let res = [];
  let absVal = Math.abs(n);
  while(absVal){
    let rem = absVal % 2;
    res.push(rem);
    absVal = Math.floor(absVal/2);
  }

  let str = res.reverse().join('');
  return isNegative ? '-' + str : str;
}

console.log(bin(0), ' expect 0');
console.log(bin(2), ' expect 10');
console.log(bin(4), ' expect 100');
console.log(bin(-4), ' expect -100');
console.log(bin(-8), ' expect -1000');
console.log(bin(5), ' expect 101');
console.log(bin(8000), ' expect 111101000000');

