var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var newNode = Node(value);
    if (!list.head) {
      list.head = newNode;
      list.tail = newNode;
    } else {
      var pointer = list.head;
      while (pointer.next !== null) {
        pointer = pointer.next;
      }
      pointer.next = newNode;
      list.tail = newNode;
    }
  };

  list.removeHead = function() {
    var nodeToRemove = list.head;
    list.head = list.head.next;
    delete nodeToRemove;
    return nodeToRemove.value;
  };

  list.contains = function(target) {
    if (!list.head) {
      return false;
    }
    var currNode = list.head;
    while (currNode !== null) {
      if (currNode.value === target) {
        return true;
      }
      currNode = currNode.next;
    }
    return false;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 * O(n) for addToTail
 * O(1) for removeHead
 * O(n) for containsß
 */
