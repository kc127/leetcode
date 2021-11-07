/**
572. Subtree of Another Tree

Given the roots of two binary trees root and subRoot, return true if there is a subtree of root with the same structure and node values of subRoot and false otherwise.

A subtree of a binary tree tree is a tree that consists of a node in tree and all of this node's descendants. The tree tree could also be considered as a subtree of itself.

Input: root = [3,4,5,1,2], subRoot = [4,1,2]
Output: true

 */

/* Definition for a binary tree node */

function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val);
  this.left = (left === undefined ? null: left);
  this.right = (right === undefined ? null: right);
}

var isSubtree = (root, subRoot) => {
  if (root === null) {
    return false
  } else if (isIdentical(root, subRoot)) {
    return true;
  } else {
    return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
  }
}

var isIdentical = (p, q) => {
  if (p === null && q === null) {
    return true;
  }

  if (p === null || q === null) {
    return false;
  }

  if (p.val === q.val) {
    return true;
  }

  return isIdentical(p.left, q.left) && isIdentical(p.right, q.right);

}
