/**

Given the root of a binary tree, return a string
that represents the path to a node

function getPath(root: Node, targetValue: string) -> string


Node
  Node left
  Node right
  string val

       foo
       /  \
      bar baz
      /
     asdf

getPath(root (foo), 'asdf') -> 'foo/bar/asdf'

        a
      b   c
            d
getPath(a, 'a') => 'a'
getPath(a, '') => ''
getPath(a, 'd') => 'a/c/d'

======= VARIATION
       foo
       /  \
      bar asdf
      /   /       \
     asdf asdf    ab

getPath(root (foo), 'asdf') -> Set{'foo/bar/asdf', 'foo/asdf/asdf', 'foo/asdf','foo/asdf/ab' }
=======

==== ORIGINAL ===
paths = [];
globalState = []
HELPER
preorder dfs (node, globalState)
  if node is null
    return [];
  check if curr node val is equal to our targetString
  if yes
      add it to our globalstate
      paths.push(globalState);

  if left node
     globalState.push(node.val)
     dfs(node.left, globalState)

     globalState.pop();
  if right node
     globalState.push(node.val)
     dfs(node.right, globalState)
     globalState.pop();
  return paths;

OUTER FUNC
  dfs(root,globalState);
  return paths.map(globalState => globalState.join('/'));
==== ORIGINAL ===
```
==== GLOBAL BOOL VERSION ===
globalState = []
isFound = False

HELPER

preorder dfs (node, globalState) -> void
  if node is null
    return;
  check if curr node val is equal to our targetString
  if yes
      isFound = True
      paths.push(globalState);
      return;

  if left node
     globalState.push(node.val)
     dfs(node.left, globalState)
     if isFound:
      return;

     globalState.pop();
  if right node
     globalState.push(node.val)
     dfs(node.right, globalState)
     if isFound:
      return;
     globalState.pop();
  return;

OUTER FUNC
  dfs(root,globalState);
  return paths.map(globalState => globalState.join('/'));
==== ORIGINAL ===

        foo<
       /  \
      bar baz
      /
     asdf
      targetVal = 'baz'
        input            line number
     dfs(foo, [])         line 41 = dfs(bar, [foo]), line 44 = dfs(baz, [foo]), return [foo,
     dfs(bar, [foo])      line 41 = dfs(asdf, [foo, bar])
     dfs(asdf, [...])     return [foo, bar]
     dfs(baz, [foo])      [foo, baz]

    return 'foo/bar/asdf'


HELPER JEREMYS VERSION
preorder dfs (node, globalState)
  if node is null
    return False;
  check if curr node val is equal to our targetString
  if yes
      add it to our globalstate
      return True;
  if left node
     globalState.push(node.val)
     result = dfs(node.left, globalState)
     if result: return True
     globalState.pop();
  if right node
     globalState.push(node.val)
     result = dfs(node.right, globalState)
     if result: return True
     globalState.pop();
  return False;

OUTER FUNC
  dfs(root,globalState);
  return globalState.join('/');

globalState = []
targetVal = 'asdf';

preorder dfsHelper (node)
  BASE CASE
    if node is null -> ret False
    if node is found -> ret True

  RECURSIVE CASE
    globalState.push(node.val)
    checkLeft: result = dfsHelper(node.left)
               if result is True -> ret True
    checkRight: result = dfsHelper(node.right)
               if result is True -> ret True
    return False

def dfs_helper(node):
    #   BASE CASE
    #     if node is null -> ret False
    #     if node is found -> ret True
    if node is None: return False
    if node.val = target: return True

    #   RECURSIVE CASE
    #     globalState.push(node.val)
    #     checkLeft: result = dfsHelper(node.left)
    #                if result is True -> ret True
    #     checkRight: result = dfsHelper(node.right)
    #                if result is True -> ret True
    #     return False
    globalState.pus(node.val)



*/
