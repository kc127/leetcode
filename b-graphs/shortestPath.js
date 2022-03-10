function shortest(root, target) {
  let level = 0;
  let queue = [root];
  let visited = new Set();
  visited.add(root);
  while (queue.length) {
    let size = queue.length;
    for (let i = 0; i < size; i++) {
      let node = queue.shift();
      if (node.val === target) {
        return level;
      }
      for (let child of node.children) {
        if (visited.has(child)) {
          continue;
        }
        queue.push(child);
        visited.add(child);
      }
    }
    level++;
  }

  return level;
}