/*
  Given a ternary tree (each node of the tree has at most three children), find all root-to-leaf paths.

        1
    2   4   6
 3

 paths = [ 1->2->3,
           1->4,
           1->6]

  pseudocode:
    res = []
    if root is not null
      dfs on root, path, result
    return res

  dfs (root, path, res)
    if leaf node
       join path by "->"
       push path to res
       return;

   for child in root children
     push child.value to current path
     dfs (child, path, res)
     pop child from path

*/

var findAllPaths = (root) => {
    let res = [];
    if (root) { // if root is not null
      dfs(root, [], res);  // perform dfs with root, path, and res
    }
    return res;
}

var dfs = (root, path, res) => {
  // if current node is a leaf,
    // push curr node's val to curr path
    // join curr path by ->
    // push curr path to result
    // pop curr node from curr path
    // return
  if (root.children.every(child => !child)) {
    path.push(root.val);
    res.push(path.join('->'));
    path.pop();
    return;
  }

  // for every child node in root
    // child node is not null
        // push root's val to curr path
        // perform dfs on child, path, res
        // pop root off the curr path
  for (let child of root.children) {
    if (child) {
      path.push(root.val);
      dfs(child, path, res);
      path.pop();
    }
  }
}