function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

/* return string representation of the tree */
function serialize(root) {
  if (!root) {
    return 'null,';
  }
  let leftTree = serialize(root.left);
  let rightTree = serialize(root.right);
  return root.val + ',' + leftTree + rightTree;
}

/* return binary tree from string */
function deserialize(string) {
  return deconstruct(string.split(','));

  let deconstruct = (nodes) => {
    let curr = nodes.shift();

    if (curr === 'null') {
      return null;
    }

    let root = new TreeNode(Number(curr));
    root.left = deconstruct(nodes);
    root.right = deconstruct(nodes);

    return root;
  }
}