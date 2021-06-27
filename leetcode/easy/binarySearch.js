/**
 *
 * @param {*} target
 * @param {*} nums
 * @return boolean
 *
 * time complexity:
 * at every step in the while loop, we divide our original array of size n by half such that in the worst case we are only left with one element?
 * So the question is: how many times must we divide our original array of size n in half until we get down to 1?
 *
 *  n * 1/2 * 1/2 * 1/2 * .... = 1
 *
 * how many (1/2)s are there? we don't know that but we can call that number x:
 *
 * n * (1/2)^x = 1
 * n / 2^x = 1
 * n = 2^x
 *
 * now to get x, we take logarithms on both sides.
 * Remembeer that log(10)100  means "what power must we raise 10 to, to get 100", the answer is 2
 *
 * so log(2)n = log(2)(2^x);
 *
 * on the right, we ask, what power must we raise 2, to get 2^x, the answer is just x
 *
 * log(2)n = x
 *
 * so that's it: the number of times we must divide n in half to get to 1 is log(2)n, so our time cose is O(log(n))
 *
 */

var binarySearch = (target, nums) => {
  let floorIndex = -1;
  let ceilingIndex = nums.length;

  while (floorIndex + 1 < ceilingIndex) {
    let halfDistance = Math.floor((ceilingIndex - floorIndex)/2)
    let guessIndex = Math.floor((ceilingIndex - floorIndex)/2) + floorIndex ;
    let guessValue = nums[guessIndex];

    if (guessValue === target) {
      return true;
    }

    if (guessValue < target) {
      floorIndex = guessIndex;
    } else {
      ceilingIndex = guessIndex;
    }
  }
  return false;
}

console.log(binarySearch(1, [1,2]));