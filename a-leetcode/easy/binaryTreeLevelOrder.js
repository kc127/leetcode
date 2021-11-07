/***
 * Given the root of a binary tree, return the level order traversal
 * of its nodes' values. (i.e., from left to right, level by level).
 *
 * Definition for a binary tree node */
 function TreeNode(val, left, right) {
     this.val = (val===undefined ? 0 : val)
     this.left = (left===undefined ? null : left)
     this.right = (right===undefined ? null : right)
 }

/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    let output = [];
    let queue = [];
    if (root === null) {
        return output;
    }

    queue.push(root);
    while (queue.length !== 0) {
        let level = [];
        let size = queue.length;
        for (let i = 0; i < size; i++) {
            root = queue.shift();
            if(root.left) {
                queue.push(root.left);
            }
            if(root.right) {
                queue.push(root.right);
            }
            level.push(root.val)
        };
        output.push(level)
    }
    return output;
};


var myTree = new TreeNode(1);
myTree.left = new TreeNode(2);
myTree.right = new TreeNode(3);
console.log(levelOrder(myTree));