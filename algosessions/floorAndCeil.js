/*
Given a binary search tree where all nodes have integer values, return the floor and ceil of a target number.

The floor is the largest element that is smaller than or equal to the target, and the ceil is the smallest element that is greater than or equal to the number

Examples

  3
1   5

target: 4 returns [3, 5]
target: 2 returns [1, 3]

target: 3 returns [3,3]
target: 6 returns [5,null]
target: 0 returns [null, 1]

target: 4

      3
  1       5<[3,5]


time: O(height) ~ O(logn) (avg), O(n) worst

   5
3     6
  4

target: 4 > [3, 5]

*/

class TreeNode {
  constructor(val, left = null, right = null){
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function floorAndCeil(root, target) {
let floor = null;
let ceil = null;
// check root val
// go left , right accordingly
while (root) {
  if (root.val === target) {
    floor = root.val;
    ceil = root.val;
    break;
  }
  else if (target > root.val) {
    floor = root.val;
    root = root.right;

  }
  else {
    ceil = root.val;
    root = root.left;
  }
}

return [floor, ceil]
}


console.log(floorAndCeil(new TreeNode(3, new TreeNode(1), new TreeNode(5)), 4)); // returns [3,5]

console.log(floorAndCeil(new TreeNode(3, new TreeNode(1), new TreeNode(5)), 3)); // returns [3,3]

console.log(floorAndCeil(new TreeNode(5, new TreeNode(3,null,new TreeNode(4)), new TreeNode(6)), 4)); // returns [4,4]

console.log(floorAndCeil(new TreeNode(3, new TreeNode(1), new TreeNode(5)), 6)); // returns [5,null]

console.log(floorAndCeil(new TreeNode(3, new TreeNode(1, new TreeNode(-1)), new TreeNode(5)), 0
                      )); // returns [3,5]

console.log(floorAndCeil(new TreeNode(3, new TreeNode(1), new TreeNode(5, )), 4)); // returns [4,4]

