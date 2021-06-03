/***
 * Given a signed 32-bit integer x, return x with its digits reversed.
 * If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1],
 * then return 0.
 *
 * runtime O(log10x) -> base 10 
 * space O(1)
 */

var reverse = function(x) {
  let negative = false;
  if (x < 0) {
      negative = true;
       x *= -1;
  }

  let reversed = 0;
  while (x > 0) {
      reversed = (reversed * 10) + (x % 10);
      x = Math.floor(x/10);
  }
  let max = Math.pow(2, 31) - 1;
  let min = Math.pow(2, 31);

  if(negative && reversed > min) {
      return 0;
  }

  if(!negative && reversed > max) {
      return 0;
  }

  return negative ? -reversed : reversed;
};

console.log(reverse(123));