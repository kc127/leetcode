/***
 * Given two binary strings (strings containing only 1s and 0s)
 * return their sum (also as a binary string).
 * Note: neither binary string will contain leading 0s unless the string
 *  itself is 0
 * Ex: Given the following binary strings...
 * "100" + "1", return "101"
 * "11" + "1", return "100"
 * "1" + "0", return  "1"
 *
 * I: two strings a and b
 * O: string
 * C:
 * E: empty strings
 */

var addBinary = (a, b) => {
  let maxString = a.length > b.length ? a : b;
  let minString = a.length < b.length ? a : b;

  let sum = '';
  for (let i = maxString.length - 1; i >= 0; i--) {
    if(parseInt(a[i] === 0 && parseInt(b[i]) && parseInt(b[i] === 0)) {
      sum
    }
  }
}

