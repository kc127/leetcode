/**
 Given the root of a binary search tree, and an integer k, return the kth (1-indexed) smallest element in the tree.

Input: root = [3,1,4,null,2], k = 1
Output: 1

**/

var kthSmallestRecursive = (root, k) => {
  let output = [];

  var recursive = (node) => {
    if (node === null) {
      return;
    }

    recursive(node.left);
    output.push(node.val);
    recursive(node.right);
  }

  recursive(root);
  return output[k-1];
}

var kthSmallestIterative = (root, k) => {
  let stack = [];
  let output = [];

  while (true) {
    if(root !== null) {
      stack.push(root);
      root = root.left;
    } else {
      if (stack.length === 0) {
        break;
      }
      root = stack.pop();
      output.push(root.val);
      root = root.right;
    }
  }
  return output[k-1];
}