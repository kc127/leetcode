/***
 * Given the root of a binary tree, determine if it is a valid binary search tree (BST).
 *
 * A valid BST is defined as follows:
 * The left subtree of a node contains only nodes with keys less than the node's key.
 * The right subtree of a node contains only nodes with keys greater than the node's key.
 * Both the left and right subtrees must also be binary search trees.
 *
 * Solution:
 * declare a min and a max for every recursive call
 * initial min is a very small number,
 * initial max is a very large number,
 * check if give node.data is within min-max range
 * to process left node, pass min and root.data as max
 * to process right node, pass root.data as min and max
 *
 */

/**
 * Definition for a binary tree node.
 */

 function TreeNode(val, left, right) {
      this.val = (val===undefined ? 0 : val)
      this.left = (left===undefined ? null : left)
      this.right = (right===undefined ? null : right)
 }

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
 var isValidBST = function(root) {
    let min = Number.MIN_VALUE;
    let max = Number.MAX_VALUE;

    let isBSTUtil = (node, min, max) => {
      if (node === null) {
        return true;
      }

      if(root.val <= min || root.val > max) {
        return false;
      }

      return isBSTUtil(node.left, min, node.val) && isBTSUtil(node.right, node.val, max)
    }

    return isBSTUtil(root, min, max)
};


/** iterative */

var isBSTIterative = (root) => {
  if (root === null) {
    return true;
  }
  let stack = [];
  let prev = null;
  while (true) {
    if (root !== null) {
      stack.push(root);
      root = root.left;
    } else {
      if (stack.length === 0) {
        break;
      }
      root = stack.pop();
      if(prev !== null && prev >= root.val) {
        return false;
      }
      prev = root.val;
      root = root.right;
    }
  }
}
