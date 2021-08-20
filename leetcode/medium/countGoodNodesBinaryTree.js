/**
 Given a binary tree root, a node X in the tree is named good if in the path from root to X there are no nodes with a value greater than X.

Return the number of good nodes in the binary tree.



Example 1:



Input: root = [3,1,4,3,null,1,5]
Output: 4
Explanation: Nodes in blue are good.
Root Node (3) is always a good node.
Node 4 -> (3,4) is the maximum value in the path starting from the root.
Node 5 -> (3,4,5) is the maximum value in the path
Node 3 -> (3,1,3) is the maximum value in the path.
 */



var goodNodesIterative = (root) => {
  let stack = [];
  let max = Number.MIN_SAFE_INTEGER;
  let numGoodNodes = 0;

  stack.push([root, max]);

  while(stack.length !== 0) {
    let currNode = stack.pop();
    root = curr[0];
    let maxSoFar = curr[1];

    if(root.val >= maxSoFar) {
      numGoodNodes++;
      maxSoFar = Math.max(root.val, maxSoFar);
    }
    if(root.right !== null) {
      stack.push([root.right, maxSoFar]);
    }
    if(root.left !== null) {
      stack.push([root.left, maxSoFar]);
    }
  }
  return numGoodNodes;
}