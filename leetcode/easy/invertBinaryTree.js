/**
 * Given the root of a binary tree, invert the tree, and return its root.
 *
 * Input: root = [4,2,7,1,3,6,9]
 * Output: [4,7,2,9,6,3,1]
 *
 */

var invertTree = (root) => {
  if (root === null) {
    return null;
  }

  let right = invertTree(root.right);
  let left = invertTree(root.left);

  root.left = right;
  root.right = left;

  return root;
}