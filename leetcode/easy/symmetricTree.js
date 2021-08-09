/*
Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).

Input: root = [1,2,2,3,4,4,3]
Output: true

*/

var isSymmetricRecursive = (root) => {
  var isMirror = (root1, root2) => {
    if (root1 === null && root2 === null) {
      return true;
    }

    if (root1 === null || root2 === null) {
      return false;
    }

    return (root1.val === root2.val) && isMirror(root1.left, root2.right) && isMirror(root1.right, root2.left);
  }

  return isMirror(root, root);
}