/*
   l m   r
   4 5 6 7 8 0 1 2 3 , target 5
   F F F F F T T T T

   find the mid
   if mid is target,return target
   else mid is greater than first element
      if start <= target < mid
        right = mid - 1
      else
        left = mid + 1
   else mid is not greater than first element
      if mid < target <= end
         left = mid + 1
      else
         right = mid - 1
   return -1
*/

let left = 0;
let right = input.length - 1;

while (left <= right) {
  let mid = left + Math.floor((right-left)/2);
  if (input[mid] === target) {
      return mid;
  } else if (input[mid] >= input[left]) {
      if (target >= input[left] && target < input[mid]) {
          right = mid - 1;
      } else {
          left = mid + 1;
      }
  } else {
      if (target <= input[right] && target > input[mid]) {
          left = mid + 1;
      } else {
          right = mid - 1;
      }
  }
}
return -1;