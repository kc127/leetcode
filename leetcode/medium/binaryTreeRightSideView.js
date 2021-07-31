/**
199. Binary Tree Right Side View

Given the root of a binary tree, imagine yourself standing on the right side of it, return the values of the nodes you can see ordered from top to bottom.

Input: root = [1,2,3,null,5,null,4]
Output: [1,3,4]
 */

/**
 *
 * I: root
 * O: array of nodes
 *
 *
 * approach:
 *    initialize a queue array
 *    initialize a rightSide array
 *    push root to queue
 *    while queue is not empty
 *      initialize a level array
 *      initialize a size variable to queue's length
 *      traverse the current queue from o to size
 *          set root as queue.pop
 *          if root.left is not null
 *            push root.left to queue
 *          if root.right is not null
 *            push root.right to queue
 *          push root.val to level
 *      push the last element of level to rightSide array
 *    return rightSideArray
 */
var rightSideView = function(root) => {
    let queue = [];
    let rightSide = [];

    queue.push(root);
    while (queue.length !== 0) {
      let level = [];
      let size = queue.length;
      for (let i = 0; i < size; i++) {
        root = queue.pop();
        if (root.left) {
          queue.push(root.left);
        }
        if (root.right) {
          queue.push(root.right);
        }
        level.push(root.val);
      }
      rightSide.push(level.pop());
    }
    return rightSide;
}