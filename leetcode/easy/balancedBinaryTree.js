/**
 Given a binary tree, determine if it is height-balanced. For this problem, a height-balanced binary tree is defined as: a binary tree in which the left and right subtrees of every node differ in height by no more than 1.

Input: root = [3,9,20,null,null,15,7]
Output: true

time: O(n)
space: O(n)

 */

var height = (node) => {
  if (node === null) {
    return 0;
  }

  let leftH = height(node.left);
  let rightH = height(node.right);

  return Math.max(leftH, rightH) + 1;
}



var isBalanced = (root) => {
  if(root === null) {
    return true;
  }

  let heightDifference = Math.abs(height(root.left)-height(root.right));
  if(heightDifference > 1) {
    return false;
  } else {
    return (isBalanced(root.left) && isBalanced(root.right));
  }
}