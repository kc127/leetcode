/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
 var buildTree = (preOrder, inOrder) => {
  if(preOrder.length === 0) {
    return null;
  }

  let constructTree = (preOrder, inOrder) => {
      if (preOrder.length === 0 || inOrder.length === 0) {
         return null;
      }

      let root = new TreeNode(preOrder[0]); // 1, 2
      let rootIdx = inOrder.indexOf(preOrder[0]);  // 1, 0
      let leftSubtree = inOrder.slice(0, rootIdx); // [2]
      let rightSubtree = inOrder.slice(rootIdx+1); // [3]

      let preOrderLeftSlice = preOrder.slice(1, leftSubtree.length + 1); // [2]
      let preOrderRightSlice = preOrder.slice(leftSubtree.length + 1); // [3]

      root.left = constructTree(preOrderLeftSlice, leftSubtree); // buildTree([2], [2])
      root.right = constructTree(preOrderRightSlice, rightSubtree);

      return root;
  }
  return constructTree(preOrder, inOrder);
}


