/*
Given the root of a binary tree, flatten the tree into a "linked list":

The "linked list" should use the same TreeNode class where the right child pointer points to the next node in the list and the left child pointer is always null.
The "linked list" should be in the same order as a pre-order traversal of the binary tree.

            7
        8<      10

lefTail.right = root.right
            7
        8
          10
root.right = root.left, leftTail.left = null;
            7
              8
                10

    our goal is to get leftTail and rightTail
    * leftTail because it needs to connect to node.right
    * rightTail because it becomes leftTail for the next subtree


    pseudocode

      when root is null, return null
      when root is a leaf node, return root
      let leftTail = recursion(root.left);
      let rightTail = recursion(root.right);

      if leftTail is not null
          leftTail.right = root.right
          root.right = root.left
          root.left = null;

      return rightTail if not null or
      leftTail if rightTail is null


I: root of the tree
O: void
*/

var flatten = (root) => {
  return flattenTree(root);
}

var flattenTree = (node) => {
  if (!root) {  // 1. when root is null
    return null;
  }

  if (!root.left && !root.right) {  // 2. when root is a leaf node
    return root;
  }

  let leftTail = flattenTree(node.left);
  let rightTail = flattenTree(node.right);

  if (leftTail) {
    leftTail.right = node.right;
    node.right = node.left;
    node.left = null;
  }

  return !rightTail ? leftTail : rightTail;
}

