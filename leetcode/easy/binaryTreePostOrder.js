/**
 * Given the root of a binary tree, return the postorder traversal of its nodes' values.

Input: root = [1,null,2,3]
Output: [3,2,1]

 */

/* Definition for a binary tree node */
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}


var postOrderRecursive = (root) => {
  let output = [];

  let postOrder = (node) => {
    if (node === null) {
      return;
    }

    postOrder(node.left);
    postOrder(node.right);
    output.push(node.val);

    return output;
  }

  return postOrder(root);
}


var postOrderIterative = (root) => {
  let output = [];
  let stack = [];

  while (stack.length !== 0 || root !== null) {
    if (root !== null) {
      stack.push(root);
      console.log(root.val)
      output.unshift(root.val);
      root = root.right;
    } else {
      root = stack.pop();
      root = root.left;
    }
  }
  return output;
}

var myTree = new TreeNode(1);
myTree.right = new TreeNode(2);
myTree.right.left = new TreeNode(3);
console.log(postOrderIterative(myTree));