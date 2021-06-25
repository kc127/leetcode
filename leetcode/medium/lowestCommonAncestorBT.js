/**
 Given a binary tree, find the lowest common ancestor (LCA) of two given nodes in the tree.

 Input: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1
 Output: 3
Explanation: The LCA of nodes 5 and 1 is 3.

I: root, node p, node q
O: node
C:
E:

pseudocode:
  if root is null, return null
  if root is equal to p or q, return root
  check if root.left has p or q
  check if root.right has p or q

  if left and right are null, return null
  if left and right are not null, return root

  if left or right is not null, return that node

*/

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

/**
 * @param: {TreeNode} root
 * @param: {TreeNode} p
 * @param: {TreeNode} q
 * @param: {TreeNode}
 */


var lowestCommonAncestor = (root, p, q) => {
  if (root === null)
}