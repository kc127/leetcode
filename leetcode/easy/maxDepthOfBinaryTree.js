/**
 Given the root of a binary tree, return its maximum depth.

A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

Input: root = [3,9,20,null,null,15,7]
Output: 3

 */


 /* Definition for a binary tree node.*/
  function TreeNode(val, left, right) {
     this.val = (val===undefined ? 0 : val)
     this.left = (left===undefined ? null : left)
     this.right = (right===undefined ? null : right)
  }

/**
 * @param {TreeNode} root
 * @return {number}
 */

var maxDepth = function(root) {

  if (root === null) {
    return 0;
  }

  let leftHeight = maxDepth(root.left);
  let rightHeight = maxDepth(root.right);

  return Math.max(leftHeight, rightHeight) + 1;
}