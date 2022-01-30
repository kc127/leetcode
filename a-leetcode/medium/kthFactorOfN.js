/**
 Given two positive integers n and k.

A factor of an integer n is defined as an integer i where n % i == 0.

Consider a list of all factors of n sorted in ascending order, return the kth factor in this list or return -1 if n has less than k factors.



Example 1:

Input: n = 12, k = 3
Output: 3
Explanation: Factors list is [1, 2, 3, 4, 6, 12], the 3rd factor is 3.

 */

/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
 var kthFactor = function(n, k) {
  let num = n;
  let factors = new Set();
  factors.add(n);
  factors.add(1);
  for (let i = 2; i <= num; i++) {
      if ( n % i === 0) {
          factors.add(i);
          factors.add(n/i);
          num = n/i;
      }
  }
  return [...factors].sort((a,b) => a-b)[k-1] ? [...factors].sort((a,b) => a-b)[k-1] : -1;
};