 /**
Given a starting node in a graph and a target, traverse the graph using BFS and return true if a node with the target value exists, and false otherwise.
You may assume this graph is implemented via a Node class data structure:
```
class GNode {
   // Constructurs + properties / attributes
   function hasPathTo(target)
}
```
Make sure that you are handling cycles in this implementation.


Pseudocode:
    create a set called seen to track already seen nodes
    add root to queue
    iterate over queue as long as queue is not empty
      remove the first node, set it as currNode
      if currNode is node, return true
      else check if currNode has been seen already
      if not add to seen set
        for every child in currNode's children array
          if child not seen already add to queue
    return false
  */


class GNode {
  constructor(value = 0, children = []) {
    this.value = value;
    this.children = children;
  }

  hasPathTo(node) {
    let seen = new Set();
    let queue = [this];
    while (queue.length) {
      let currNode = queue.shift();
      if (currNode === node) return true;
      if (!seen.has(currNode)) {
        seen.add(currNode);
        for (let child of currNode.children) {
          if (!seen.child(child)) {
            queue.push(child);
          }
        }
      }
    }
    return false;
  }
}