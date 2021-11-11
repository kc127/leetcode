var diameterOfBinaryTree = (root) => {
  if (!root) {
    return 0;
  }
  let leftHeight = maxHeight(root.left);
  let rightHeight = maxHeight(root.right);

  let leftDiameter = diameterOfBinaryTree(root.left);
  let rightDiameter = diameterOfBinaryTree(root.right);

  return Math.max(leftHeight+rightHeight, leftDiameter, rightDiameter);
}

var maxHeight = (node) => {
  if (!node) {
    return 0;
  }
  let leftHeight = maxDepth(node.left);
  let rightHeight = maxDepth(node.right);

  return Math.max(leftHeight, rightHeight) + 1;
}