// Given a binary tree where each node holds a integer, write a function that returns an array of integer representing the bottom view of the tree.
// To calculate the bottom view of a tree, consider the horizontal distance of each node. The horizontal distance of a binary tree node describes how far left or right the node will be when the tree is printed out.
// More rigorously, we can define it as follows:
// The horizontal distance of the root is 0.
// The horizontal distance of a left child is hd(parent) - 1.
// The horizontal distance of a right child is hd(parent) + 1.

//            5 (0)
//         /     \
//   -1   3         7 +1
//     /  \      /   \
//   1     4    6 0   9 < +2
//  /                /
// 0            8

// For this tree, hd(1) = -2, and hd(6) = 0.
// The bottom view could be [0, 1, 3, 4, 8, 9], [0, 1, 3, 6, 8, 9]
/*

                  5              level 0
              3<       7         level 1
          1      4   6    9      level 2
                        8

          {hd: node}
            0    5, 4, 6
            -1   3
            1    7, 8
            -2   1
            2    9

                    5
              [5];

                      5
                  1      2
                     6 7
              = [5, 1, 2]
                [6, 1, 2]
                [7, 1, 2]

approaches:

compute hd for each node using bfs (o(n))
create hdmap {hd : node.val}
return values as an array;    (Object.values(hdmap));

time: o(n)
space: o(n)
*/

class TreeNode {
  constructor(val = 0, left = null, right = null) {
    this.val = val
    this.left = left;
    this.right = right;
  }
}

function bottomView(root) {
  let hdMap = {}


  let traverse = (node) => {
    if (!node) {
       return [];
    }

    let hd = 0;
    let queue = [[node, hd]];
    while (queue.length) {
       let size = queue.length;
       for (let i = 0; i < size; i++) {
          let curr = queue.shift();
          let currHd = curr[1];
          hdMap[currHd] = curr[0].val;
          if (curr[0].left) {
             queue.push([curr[0].left, currHd - 1]);
          }

          if (curr[0].right) {
             queue.push([curr[0].right, currHd + 1]);
          }
       }
    }
  }
  traverse(root);
  return Object.values(hdMap);
}

/*
                  5              level 0
              3<       7         level 1
          1      4   6    9      level 2
                        8



*/

let tree1 = new TreeNode(5, new TreeNode(3, new TreeNode(1), new TreeNode(4)),
                            new TreeNode(7, new TreeNode(6), new TreeNode(9, new TreeNode(8))));
console.log(bottomView(tree1));