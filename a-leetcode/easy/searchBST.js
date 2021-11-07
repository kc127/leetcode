
 //Definition for a binary tree node.
 function TreeNode(val, left, right) {
 this.val = (val===undefined ? 0 : val)
 this.left = (left===undefined ? null : left)
 this.right = (right===undefined ? null : right)
 }

/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */

 var dfs = (node) => {
  let output1 = [];

  let recursive = (node1) => {
      if (node1 === null) {
          return output1;
      }

      output1.push(node1.val);
      recursive(node1.left);
      recursive(node1.right);
      return output1;
  }

  return recursive(node);
}

var searchBST = function(root, val) {
  //let output = [];
  if (root === null) {
      return null;
  }

  if (root.val === val) {
      return dfs(root)
  }

  return (searchBST(root.left) || searchBST(root.right));
};


var myTree = new TreeNode(2);
myTree.left = new TreeNode(1);
myTree.right = new TreeNode(3);
//console.log(myTree)
console.log(searchBST(myTree,1));