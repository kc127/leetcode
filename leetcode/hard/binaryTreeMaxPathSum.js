/*
A path in a binary tree is a sequence of nodes where each pair of adjacent nodes in the sequence has an edge connecting them. A node can only appear in the sequence at most once. Note that the path does not need to pass through the root.

The path sum of a path is the sum of the node's values in the path.

Given the root of a binary tree, return the maximum path sum of any path.

*/

var binaryMaxPathSum = (root) => {
  let maxSoFar = root.value;

  let maxGain = (node) => {
    if(!node) return 0;
    let leftMax = Math.max(0, maxGain(node.left));
    let rightMax = Math.max(0, maxGain(node.right));

    maxSoFar = Math.max(leftMax + rightMax + node.value, maxSoFar);

    return Math.max(leftMax, rightMax) + node.value;
  }
  maxGain(root);
  return maxSoFar;
}