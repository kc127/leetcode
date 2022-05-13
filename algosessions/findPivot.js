/*

Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand. Find the minimum element in O(log N) time. You may assume the array does not contain duplicates.
Function Signature: func findPivot(input: [Int]) -> Int
For example, given [5, 7, 10, 3, 4], return 3.

assumptions:
- array is sorted with contraint


[5, 7, 10, 3, 4] => return 3
[10, 11, 12, 13, 1] => return 1
              l   r
              m
[-2, 0, 2, 5, 7] => return -2
[-1, 0] => return -1
[5, 7, 8, 9, -1, 0,] => return -1
[1, 2, 3] => return 1
[3, 1, 2]

A = [5, 7, 10, 3, 4]
     l            r
            m
B = [1, 2, 3, 4, 5]   (1)
     l     m     r
     [1, _ 3, _  5]
     [5, _, 10,_ 4]
     [10, _, 12,_ 1]
     [-2, _ 2, _ ,7]
     [l,m, r]
     [-1, -1, 0]
     [9, _, -1_, 0]

     m = l + math.floor((r-l/2))
          0 + 5/2 ~ 2

     if midElem >= leftElem  &&  midElem < rightElem
         r = m  - 1
     midElem > leftElem && midElem > rightElem
        l = m + 1
     midElem < leftElem && midElem < rightElem
        smallest = m

2, 3,  4, 5,  6
[T, T, T, F, F]
       m
  while (l <= r)
      if (A[m] === true)
          boundaryIdx = m
          l = m + 1
      else
        r = m - 1

 target
 smallestIdx = -1
 l <= r
    midElem = A[m]
    //
    if (midElem === target) X
    if (midElem < target) r = m + 1
    else l = m - 1
    //

    if (midElem > A[m-1]) =>  smallestIdx = m
       l = m + 1
    if (midElem < A[m+1]) =>  ?

    if (midElem vs A[l]) =>
    if (midElem vs A[r]) =>
*/

function findPivot(input) {

  let l = 0;
  let r = input.length - 1;

  while (l <= r) {
    let m = l + Math.floor((r-l)/2);

    if (input[m] > input[l]) {

    } else {

    }
  }
}
// [5, 7, 10, 3, 4]
// var findMin = function(nums) {
//   var left = 0,
//       right = nums.length - 1

//   while (left < right){
//       var mid = Math.floor((left + right)/2)
//       if (nums[mid] > nums[right]) left = mid + 1
//       else right = mid
//   }
//   return nums[left]
// };

// def helper(arr, low, high):
//     if high == low:
//         return arr[low]

//     mid = (high + low) / 2
//     if arr[mid] < arr[high]:
//         high = mid
//     else:
//         low = mid + 1
//     return helper(arr, low, high)

// def find_min_element(arr):
//     low, high = 0, len(arr) - 1
//     return helper(arr, low, high)