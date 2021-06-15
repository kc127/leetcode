***DFS(preorder, inorder, postorder) vs BFS(level order)***
Now, a question naturally arises: which one should I use? Or more fundamentally, which tasks do they each excel at? Since they are both algorithms that traverse nodes in a tree, the only differences are caused by the different order of traversal:

**DFS is better at:**

- narrow but deep trees
- finding nodes far away from the root
- vist all nodes in a tree/graph

**BFS is better for:**

- shallow but wide trees
- finding nodes close/closest to the root (shortest path)

  
***When to use DFS***

*Tree*

DFS is essentially pre-order tree traversal.

  - Traverse and find/create/modify/delete node. 
  - Traverse with return value (finding max subtree, detect balanced tree)

*Combinatorial problems*

DFS/backtracking and combinatorial problems are a match made in heaven (or silver bullet and werewolf 😅). As we will see in the Combinatorial Search module, combinatorial search problems boil down to searching in trees.
 - How many ways are there to arrange something
 - Find all possible combinations of ...
 - Find all solutions to a puzzle

*Graph*

Trees are special graphs that have no cycle. We can still use DFS in graphs with cycles. We just have to record the nodes we have visited and avoiding re-visiting them and going into an infinite loop.

- Find a path from point A to B
- Find connected components
- Detect cycles

***Common Tree Problems**
-Max Depth of a Tree
-Visible Tree Node 
-Valid BST
-Serializing and Deserializing BST 
-Lowest Common Ancestor 

***Common Graph Problems**
-Phone Book Problem 
-Generate Parentheses
-Combination Sum 
-Subsets

***Common Matrix Problems**
-Number of Islands
-Number of enclaves
-Surrounded Regions 
-Word Search 
-Smallest Rectangle 
-Enclosing Black Pixels 
