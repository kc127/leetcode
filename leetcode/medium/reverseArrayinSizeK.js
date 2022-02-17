/* Given an array, reverse every sub-array formed by consecutive k elements. */

function reverse (arr, k) {
  let n = arr.length;
  for (let i = 0; i < arr.length; i += k) {
    let l = i;
    let r =  i + k - 1 <= arr.length - 1 ? i + k - 1 : arr.length - 1;
    while (l <= r) {
      [arr[l], arr[r]] = [arr[r], arr[l]];
      l++;
      r--;
    }
  }
  return arr;
}

console.log(reverse([1,2,3,4,5,6], 3));
console.log(reverse([1, 2, 3, 4, 5, 6, 7, 8],10))