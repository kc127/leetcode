class DLLNode {
  constructor(key = 0, val = 0) {
    this.val = val;
    this.key = key;
    this.next = null;
    this.prev = null;
  }
}

class LRUCache {
  constructor(capacity) {
    this.cache = new Map();
    this.head = new DLLNode(0, 0);
    this.tail = new DLLNode(0, 0);
    this.head.next = this.tail;
    this.tail.prev = this.head;
    this.size = 0;
    this.capacity = capacity;
  }

  put(key, val) {
    let node = this.cache.get(key);
    if (node === undefined) {
      let newNode = new DLLNode(key, val);
      if (this.size === this.capacity) {
         let lruNode = this.tail.prev;
         this.cache.delete(lruNode.key);
         this.removeNode(lruNode);
         this.size--;
      }
      this.cache.set(key,newNode);
      this.addNode(newNode);
      this.size = this.cache.size;
    } else {
      node.val = val;
      this.moveToFront(node);
    }
  }

  get(key) {
    if (this.cache.has(key)) {
        let node = this.cache.get(key);
        this.moveToFront(node);
        return node.val;
    } else {
        return -1;
    }
  }


   addNode(node) {
     let headNeighbor = this.head.next;
     node.next = headNeighbor;
     node.prev = this.head;
     headNeighbor.prev = node;
     this.head.next = node;
  }

  removeNode(node) {
     let nextNode = node.next;
     let prevNode = node.prev;

     prevNode.next = nextNode;
     nextNode.prev = prevNode;
     node.next = null;
     node.prev = null;
  }

  moveToFront(node) {
     this.removeNode(node);
     this.addNode(node);
  }
}