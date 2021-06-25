/**
 Given a binary search tree (BST), find the lowest common ancestor (LCA) of two given nodes in the BST.

 I: root, node p, node q
 O: node
 C:
 E:

 bruteforce iterative ?
    if root is greater than p, q
      set root as root.left
    if root is less than p, q
      set root as root.right
    else
      break

  return root

  brutefor recursive ?
    if root is greater than p, q
        run recursion with root.left, p, q
    if root is less than p, q
        run recursion with root.right, p, q
    else
      return root

 */

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

/**
 * @param: {TreeNode} root
 * @param: {TreeNode} p
 * @param: {TreeNode} q
 * @param: {TreeNode}
 */

var lowestCommonAncestorIterative = (root, p, q) => {
  if (root.val < p.val && root.val < q.val) {
    root = root.right;
  } else if (root.val > p.val && root.val > q.val) {
    root = root.left
  } else {
    break;
  }
  return root;
}

var lowestCommonAncestorRecursive = (root, p, q) => {
  if (root.val < p.val && root.val < q.val) {
    return lowestCommonAncestorRecursive(root.right, p, q);
  } else if (root.val > p.val && root.val > q.val) {
    return lowestCommonAncestorRecursive(root.left, p, q);
  } else {
    return root;
  }
}