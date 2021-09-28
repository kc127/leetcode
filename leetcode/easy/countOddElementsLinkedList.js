class LinkedListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

var coundOdd = (head) => {
  if (head === null) {
    return 0;
  }

  if (head.value % 2 === 1) {
    return coundOdd(head.next) + 1;
  } else {
    return countOdd(head.next);
  }
}

