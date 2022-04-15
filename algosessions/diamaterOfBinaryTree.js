/* Given a binary tree, you need to compute the length of the diameter of the tree. The diameter of a binary tree is the length of the longest path between any two nodes in a tree. This path may or may not pass through the root.

  assumptions:
    - diamater = total number of edges along the path between two given nodes



         1
      2     3

  diameter => 2 -> 1 -> 3 = 2

            1
  diameter = 0

*/

class TreeNode {
  constructor(val = 0, left = null, right = null) {
      this.val = val;
      this.left = left;
      this.right = right;
  }
}

function findDiameter(root) {
  if (!root || (!root.left && !root.right)) {
      return 0;
  }

  let findHeight = (node) => {
      if (!node) {
        return 0;
      }
      let left = findHeight(node.left);
      let right = findHeight(node.right);
      return 1 + Math.max(left, right);
  }
  return findHeight(root.left) + findHeight(root.right);
}


let tree1 = new TreeNode(1,
                        new TreeNode(2),
                        new TreeNode(3));
let tree2 = new TreeNode(1);
/*
           7
        6     5
            4
*/
let tree3 = new TreeNode(7,
                          new TreeNode(6),
                          new TreeNode(5,
                                          new TreeNode(4)))
/*
                            1
                        2         3
                    4       5

*/
let tree4 = new TreeNode(1,
                          new TreeNode(2,
                                        new TreeNode(4),
                                        new TreeNode(5)),
                          new TreeNode(3))
/*
                              1
                                  2
                                      3
                                          4
                                              5

*/
console.log(findDiameter(tree1), ' expect 2');
console.log(findDiameter(tree2), ' expect 0');
console.log(findDiameter(tree3), ' expect 3');
console.log(findDiameter(tree4), ' expect 3');

/*

      self.diameter = 0

      def depth(node):
          if not node:
              return 0
          left = depth(node.left)
          right = depth(node.right)
          self.diameter = max(self.diameter, left+right)
          return 1 + max(left, right)

      depth(root)
      return self.diameter
*/