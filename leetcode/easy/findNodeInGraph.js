class GNode {
  constructor(value = 0, children = []) {
    this.children = children
    this.value = value
    this.visited = new Set()

  }

  // node = {},
  // node.val = 1 this.val = 1
//   hasPathTo(node) {
//       if(node === this) return true

//       if(!this.visited.has(this)) {
//         this.visited.add(this)
//         for(var i = 0; i < this.children.length; i++) {
//           if(!this.visited.has(this.children[i])) {
//              return this.children[i].hasPathTo(node)
//           }

//         }
//       }
//     return false
//   }

  hasPathTo(node) {
    var visited = new Set()
    var stack = [this]

    while(stack.length) {

      var currNode = stack.pop()
      if(currNode === node) return true

      if(!visited.has(currNode)) {
        visited.add(currNode)
        for(var i = 0; i < currNode.children.length; i++) {
          stack.push(currNode.children[i])
        }
      }

    }
    return false
  }
}
