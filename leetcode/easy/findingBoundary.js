/**
 * Given an array of boolean values that are divided into two sections: the left section consists of all "false" and the right section consists of all "true", find the boundary of the right section, i.e. the index of the first "true" element. If there is no "true" element, return -1.
 */

var find_boundary = (arr) => {
  let left = 0;
  let right = arr.length - 1;
  let boundary_index = -1;
  while (left <= right) {
    let mid = left + Math.floor((right - left)/2);
    console.log(mid);
    if (arr[mid]) {
      boundary_index = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return boundary_index;
}

let arr = [false, false, true, true, true];
console.log(find_boundary(arr));