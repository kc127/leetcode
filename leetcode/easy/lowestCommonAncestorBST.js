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

