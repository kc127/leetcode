/*

 * Determine if a given binary tree is symmetric.

 Example



Input:
      A
   /     \
  B       B
 /  \    /  \
C    D  C    D
Output: false

      A
    B   C

  return false

      A
   B     B
X            X

 return true

      A
  B        B
    X    X

    return true

        A
   return true


     Input:
      A
   /     \
  B       B
 /  \    /  \
C    D  D    C
Output: true


        input                      line
          A                        helper(B,B) = return true

   MAIN FUNC(root)

      HELPER(p, q)

        case 0) if p and q are both NULL => return true
        case 1) if p || q is null => return false
        case 2) if p.val is not equal q.val => return false
        case 3) if value of p is equal to value of q
                  let leftSubtree =   HELPER(p.left, q.right)
                  let rightSubtree =   HELPER(p.right, q.left)
        return leftSubtree AND rightSubtree

*/

class TreeNode {
  constructor(val = 0, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function isSymmetric(root) {
    if (!root) {
      return false;
    }

    var checkSymmetric = (p, q) => {
      if (!p && !q) {
          return true;
      }
      if (!p || !q) {
          return false;
      }
      if (p.val !== q.val) {
          return false;
      }
      return checkSymmetric(p.left, q.right) && checkSymmetric(p.right, q.left);
    }

    return checkSymmetric(root.left, root.right);
}






function isSymmetric2(root) {

    var checkSymmetric = (p, q) => {
      if (!p && !q) {
          return true;
      }
      if (!p || !q) {
          return false;
      }
      return p.val == q.val &&
        checkSymmetric(p.left, q.right) &&
        checkSymmetric(p.right, q.left);
    }

    if (!root) {
      return false;
    }

    return checkSymmetric(root.left, root.right);
}


/*


      A
   B     B
X            X

*/

let tree1 = new TreeNode('A',
                           new TreeNode('B',
                                          new TreeNode('C'),
                                          new TreeNode('D')),
                           new TreeNode('B',
                                          new TreeNode('D'),
                                          new TreeNode('C'))
                         )

let tree2 = new TreeNode('A',
                           new TreeNode('B',
                                          new TreeNode('C'),
                                          new TreeNode('D')),
                           new TreeNode('B',
                                          new TreeNode('C'),
                                          new TreeNode('D'))
                         )

let tree3 = new TreeNode('A',
                            new TreeNode('B'),
                            new TreeNode('C')
                         )

let tree4 = new TreeNode('A',
                            new TreeNode('B',
                                            new TreeNode('X')),
                            new TreeNode('B',
                                            null,
                                            new TreeNode('X'))
                         )

let tree5 = null;
let tree6 = new TreeNode('A',
                            new TreeNode('B'))
let tree7 = new TreeNode('A');

console.log(isSymmetric2(tree1), ' expect true');
console.log(isSymmetric2(tree2), ' expect false');
console.log(isSymmetric2(tree3), ' expect false');
console.log(isSymmetric2(tree4), ' expect true');
console.log(isSymmetric2(tree5), ' expect false');
console.log(isSymmetric2(tree6), ' expect false');
console.log(isSymmetric2(tree7), ' expect true');










