/**
 * 144. Binary Tree Preorder Traversal
 * Given the root of a binary tree, return the preorder traversal of its nodes' values.
 * Input: root = [1,null,2,3]
 * Output: [1,2,3]
 */


// brute force recursive runtime O(n), space O(n)

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
 var preorderTraversal = function(root) {
  let output = [];

  let recursive = (node) => {
     if (node === null) {
      return output;
     }

    output.push(node.val);
    recursive(node.left);
    recursive(node.right);
    return output;
  }

  return recursive(root)

};


// iterative using stack
var preorderTraversal = function(root) {
  let stack = [];
  let output = [];

  if(root === null) {
      return output;
  }

  stack.push(root);
  while(stack.length !== 0) {
      let root = stack.pop();
      output.push(root.val);

      if(root.right !== null){
          stack.push(root.right);
      }
      if(root.left !== null){
          stack.push(root.left);
      }
  }
  return output;
};