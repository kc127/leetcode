/*
Q. Given an array of 0s, 1s, and 2s, sort them in-place in ascending order.

Examples:
• Given an array: [2, 1] // returns [1, 2]
• Given an array: [0, 2, 1, 0, 1, 2] // returns [0, 0, 1, 1, 2, 2]


1. Count solution (count zeros, ones and twos)
2. One pass solution (three pointers)
3. Two elements problem (only 0s and 1s)
4. Recursive solution (create helper with zeroIndex, currIndex and twoIndex)
*/

// 1. two pass solution
function dnf(input) {
  let zeroes = 0;
  let ones = 0;
  let twos = 0;

  for (let num of input) {
    if (num === 0) {
      zeroes++;
    } else  if (num === 1) {
      ones++;
    } else {
      twos++;
    }
  }

  for (let i = 0; i < input.length; i++) {
    if (zeroes) {
      input[i] = 0;
      zeroes--;
    } else if (ones) {
      input[i] = 1;
      ones--;
    } else {
      input[i] = 2;
      twos--;
    }
  }
  return input;
}

// 2. one pass solution
function dnf(input) {
  let low = 0;
  let mid = 0;
  let high = input.length - 1;

  while (mid <= high) {
    if (input[mid] > 1) {
      [input[mid], input[high]] = [input[high], input[mid]];
      high--;
    } else {
       if (input[mid] < 1) {
          [input[low],input[mid]] = [input[mid],input[low]];
          low++;
       }
       mid++;
    }
  }
  return input;
}


// 4. recursive solution
function dnf(input) {

  let helper = (input, low, mid, high) => {
    if (mid >= high) {
       return input;
    }
    if (input[mid] === 0) {
      [input[low], input[mid]] = [input[mid], input[low]];
      helper(input, low+1, mid+1, high);
    } else if (input[mid] === 1) {
      helper(input, low, mid+1, high);
    } else {
      [input[mid], input[high]] = [input[high],input[mid]];
      helper(input, low, mid, high - 1);
    }
  }
  helper(input, 0, 0, input.length - 1);
  return input;
}