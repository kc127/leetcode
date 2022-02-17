function merg2Lists (l1, l2) {
  let head = new ListNode(0);
  let curr = head;

  while (l1 && l2) {
    if (l1.val <= l2.val) {
      curr.next = l1;
      l1 = l1.next;
    } else {
      curr.next = l2;
      l2 = l2.next;
    }
    curr = curr.next;
  }
  if (l1) {
    curr.next = l1;
  }
  if (l2) {
    curr.next = l2;
  }
  return head.next;
}

function mergeLists (lists) {
  if (lists.length === 0 || !lists) {
    return null;
  }
  while (lists.length > 1) {
    let mergedLists = [];
    for (let i = 0; i < lists.length; i += 2) {
      let l1 = lists[i];
      let l2 = (i+1) < lists.length ? lists[i+1] : null;
      mergedLists.push(merge2Lists(l1, l2));
    }
    lists = mergedLists;
  }
  return lists[0];
}