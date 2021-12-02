var sortedArrayToBST = function(nums) {

  let convert = (left, right) => {
      if (left > right) {
          return null;
      }
      let mid = Math.floor((left + right)/2);
      let curr = new TreeNode(nums[mid]);
      curr.left = convert(left, mid - 1);
      curr.right = convert(mid + 1, right);
      return curr;
  }
  return convert(0, nums.length - 1);
};