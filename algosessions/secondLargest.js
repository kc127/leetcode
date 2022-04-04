/*
Today, you will be giving the problem to find the second largest element in a BST.
Function Signature: func secondLargest(node: Node) -> Int

  2
 / \
1   3
      \
        4


2ndLargest = -1;
case 1: root not null AND root.right is null AND root.left is not NULL O(1) time
                2ndLargest = root.left.val;
                break;

case 2: root is a leaf
          return 2ndLargest

case 3 & 4: root not null, root.left and right are NOT NULL.  O(h) => log n


           2ndLargest = root.val
           root = root.right

  X
X

case 4:   root not null, root.left IS null, root.right IS NOT NULL


    X
  X

  X
    X

  X
X   X

    X => -1

In this tree, return 2.

    secondLargest = 15

      10
  6       15
               18
           17<

return 17

          25
       24
    23

  return 24


  assumptions:
  - infinitely big
*/
function TreeNode(val, left = null, right = null) {
  this.val = val;
  this.left = left;
  this.right = right;
}


// function  findSecondLargest(root) {
//       let secondLargest = -1;

//       while (root) {
//         if (!root.left && !root.right) {
//             break;
//         } else if (root.left && !root.right) {
//            secondLargest = root.left.val;
//            break;
//         } else if (root.right) {
//            secondLargest = root.val;
//            root = root.right;
//         }
//       }
//      return secondLargest;
// }

// L => C => R
// R => C => L

          //   2
          // 1    3

function findSecondLargest(root) {
  let revInorder = [];

  // while (root) {
  //   if (root.right) {
  //     root = root.right
  //     continue;
  //   };
  //   revInorder.push(root.val);
  //   if (revInorder.length === 2) {
  //     console.log(revInorder);
  //     return revInorder[1];
  //   }
  //   else if (root.left) root = root.left;
  // }
  function traverse(root) {
    if (!root) return;
    traverse(root.right);
    revInorder.push(root.val);
    traverse(root.left);
  }
  traverse(root);
  return revInorder[1] || -1;
}

let tree1 = new TreeNode(2,
                          new TreeNode(1),
                          new TreeNode(3));
let tree2 = new TreeNode(2);
let tree3 = new TreeNode(5,
                          new TreeNode(2));
let tree4 = new TreeNode(10,
                            null,
                            new TreeNode(20));

console.log(findSecondLargest(tree1), ' expect 2');
console.log(findSecondLargest(tree2), ' expect -1');
console.log(findSecondLargest(tree3), ' expect 2');
console.log(findSecondLargest(tree4), ' expect 10');
