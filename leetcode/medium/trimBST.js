class BSTree {
  constructor(value, left, right) {
    this.value = value ? value : undefined;
    this.left = left ? left : null,
    this.right = right ? right : null,
  }
}

var trimBST = (root, low, high) => {
  if (!root) {
    return root;
  }

  // if root value is less than low, discard left side of the tree, only trim right side
  if (root.value < low) {
      return trimBST(root.right, low, high);
  }

  // if root value is greater than high, discard right side of the tree, only trim left side
  if (root.value > high) {
      return trimBST(root.left, low, high);
  }

  // or else trim both sides and return
  root.left = trimBST(root.left, low, high);
  root.right = trimBST(root.right, low, high);

  return root;
}