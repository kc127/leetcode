/**
 You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

Merge nums1 and nums2 into a single array sorted in non-decreasing order.

The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.



Example 1:

Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
Output: [1,2,2,3,5,6]
Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.

 */
// approach 1: merge and sort
// time: O(n+m)log(n+m)
// space: O(m)
var mergeArrays1 = (nums1, m, nums2, n) => {
  for (let i = 0; i < n; i++) {
    nums1[i+m] = nums2[i];
  }
  nums1.sort((a, b) => (a-b));
  return nums1;
}

// approach 2: three pointers (two read pointers, 1 write pointer)
/*
  Initialize nums1Copy to be a new array containing the first m values of nums1
  Initialize read pointer p1 to the beginning of nums1Copy
  Initialize read pointer p2 to the beginning of nums2
  Initialize write pointer p to the beginning of nums1
  While p is still within num1:
    if nums1Copy[p1] exists and is less than or equal to nums2[p2]
      write nums1Copy[p1] into nums[p] and increment p1 by 1
    else
      write nums2[p2] into nums[p] and increment p2 by 1
    increment p by 1

*/

// time: O(n+m)
// space: O(m) because of nums1Copy array
var mergeArrays2 = (nums1, m, nums2, n) => {
  let nums1Copy = [...nums1];
  let p1 = 0;
  let p2 = 0;
  let p = 0;

  while (p < nums1.length) {
    if (nums1Copy[p1] && nums1Copy[p1] <= nums2[p2]) {
      nums1[p] = nums1Copy[p1];
      p1++;
    } else {
      nums1[p] = nums2[p2];
      p2++;
    }
    p++;
  }
  return nums1;
}

// approach 3: three pointers (start from the end)
/*
  initialize read pointer p1 to the m-1th position of nums1 array
  initialize read pointer p2 to the n-1th position of nums2 array
  initizlize write pointer p to the m+n-1th position of nums1 array
  while p is still within nums1
    if nums1[p1] is less than or equal to nums2[p2]
      write nums1[p1] into nums1[p]
      decrement p1 by 1
    else
      write nums2[p2] into nums1[p]
      decrement p2 by 1
    decrement p

  return nums1

*/
var mergeArrays3 = (nums1, m, nums2, n) => {
  let p1 = m - 1;
  let p2 = n - 1;
  let p = m + n - 1;

  while (p >= 0) {
    if (nums1[p1] <= nums2[p2]) {
      nums1[p] = nums2[p2];
      p2--
    } else {
      nums1[p] = nums1[p1];
      p1--;
    }
    p--;
  }
  return nums1;
}

let nums1 = [1,2,3,0,0,0];
let m = 3;
let nums2 = [2,5,6];
let n = 3;

console.log(mergeArrays3(nums1, m, nums2, n));

