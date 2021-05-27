var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  newTree.children = [];
  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

// O(1)
treeMethods.addChild = function(value) {
  var newTree = Tree(value);
  this.children.push(newTree);
};

// (O(logn))
treeMethods.contains = function(target) {

  var traverse = function(tree) {
    if (tree.value === target) {
      return true;
    }
    if (tree.children.length !== 0) {
      for (var i = 0; i < tree.children.length; i++) {
        if (traverse(tree.children[i])) {
          return true;
        }
      }
    }
    return false;
  };

  return traverse(this);
};



/*
 * Complexity: What is the time complexity of the above functions?
 *
 */
