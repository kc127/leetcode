var BinarySearchTree = function(value) {
  var newBinaryTree = {};
  newBinaryTree.left = null;
  newBinaryTree.right = null;
  newBinaryTree.value = value;

  _.extend(newBinaryTree, bstMethods);
  return newBinaryTree;
};

var bstMethods = {};

// method, which accepts a value and places it in the tree in the correct position.
// O(logN)
bstMethods.insert = function(value) {

  var newBstTree = BinarySearchTree(value);

  var traverseTree = function(tree) {
    if (!tree) {
      tree = newBstTree;
    }

    if (value < tree.value) {
      if (tree.left === null) {
        tree.left = newBstTree;
      } else {
        traverseTree(tree.left);
      }
    }
    if (value > tree.value) {
      if (tree.right === null) {
        tree.right = newBstTree;
      } else {
        traverseTree(tree.right);
      }
    }
    return false;
  };

  return traverseTree(this);

};

// method, which accepts a value and returns a boolean reflecting whether or not the value is contained in the tree.
// O(logn)
bstMethods.contains = function(value) {


  var traverseAgain = function(tree) {

    if (tree.value === value) {
      return true;
    }
    if (value < tree.value && tree.left) {
      if (tree.left.value === value) {
        return true;
      } else {
        traverseAgain(tree.left);
      }
    } else if (value > tree.value && tree.right) {
      if (tree.right.value === value) {
        return true;
      } else {
        traverseAgain(tree.right);
      }
    }
    return false;
  };

  return traverseAgain(this);

};
// O(logn)
bstMethods.depthFirstLog = function(callback) {

  var depthFirstSearch = function(tree) {
    if (tree !== null) {
      callback(tree.value);
    }
    while (tree) {
      if (tree.left !== null) {
        depthFirstSearch(tree.left);
      }
      if (tree.right !== null) {
        depthFirstSearch(tree.right);
      }
      return;
    }
  };

  return depthFirstSearch(this);
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
