/**
 * Given two integer arrays nums1 and nums2,
 * return an array of their intersection.
 * Each element in the result must be unique and you may return the result in any order.
 * 
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
 var intersection = function(nums1, nums2) {
  let nums1Set = new Set(nums1);
  let nums2Set = new Set(nums2);

  return [...nums1Set].filter(num => nums2Set.has(num))

};