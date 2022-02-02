/*


                        5
                      3    7
                    1   2

                        0
                     -1   1





Prompt:

Given a binary tree where each node holds a integer, write a function that returns an array of integer representing the bottom view of the tree.
To calculate the bottom view of a tree, consider the horizontal distance of each node. The horizontal distance of a binary tree node describes how far left or right the node will be when the tree is printed out.

More rigorously, we can define it as follows:
The horizontal distance of the root is 0.
The horizontal distance of a left child is hd(parent) - 1.
The horizontal distance of a right child is hd(parent) + 1.

Function Signature: func bottomView(root: Node) -> [Int]



[-3,-2,-1,0,1,2]


For this tree, hd(1) = -2, and hd(6) = 0.
The bottom view could be [0, 1, 3, 4, 8, 9]
           5
         /   \
       3       7
     /  \    /  \
    1    4  6    9
   /            /
  0            8
 solutions:

 [0, 1, 3, 4, 8, 9]
 [0, 1, 3, 6, 8, 9]

 ------------
 [0, 1, 3, 4, 6, 8, 9]

 [0,1,3,(4,6),(8), 9]

 hd

           0
    -1          1
  -2   0     0     2
-3              1

 hashmap len = 6

        5 (0)
    6(-1)                   7 (1),
 4 (-1-1)   3 (-1 + 1)
                   [node, level, hd]

      let hdMap = {};
      let queue = [[root, 0, 0]];
      let hd = 0;
      while (queue.length)
          let size = queue.length;

          for (let i = 0; i < size; i++) {
             let curr = queue.shift();
             let currNode = curr[0];
             let currLevel = curr[1];
             let currHd = curr[2];

             {
              0: [5, 0]
             }

             parent: [5, 0]

             hashmap = {currHd: {prevLevel: [values]}

             if (currNode.left) {
                queue.push([currNode.left, +1,currHd - 1]);
             }
             if (currNode.right) {
                queue.push([currNode.right, currLevel+1,currHd + 1]);
             }

          }

  approach:

  first do a bfs traversal and create a hashmap with hd as key and array of nodes as values

  base case:
  if length of result array is equal to hashmap length
    stop recursing

  loop through the length of the hashmap
    for every key loop through it's array [2, 3, 4]
      push one of the array values to our result
      go to next key

  return result array

*/