/**
 * Given the root of a binary tree, invert the tree, and return its root.
 *
 * Input: root = [4,2,7,1,3,6,9]
 * Output: [4,7,2,9,6,3,1]
 *
 */

var invertTreeRecursive = (root) => {
  if (root === null) {
    return null;
  }

  let right = invertTree(root.right);
  let left = invertTree(root.left);

  root.left = right;
  root.right = left;

  return root;
}

var invertTreeIterative = (root) => {
  if (root === null) {
    return null;
  }

  let queue = [];
  queue.push(root);

  while (queue.length !== 0) {
    node = queue.shift();

    let temp = node.left;
    node.left = node.right;
    node.right = node.left;

    if (node.left) {
      queue.push(node.left);
    }

    if(node.right) {
      queue.push(node.right);
    }
  }
  return root;
}