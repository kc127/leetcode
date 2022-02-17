/*
There are n rooms labeled from 0 to n - 1 and all the rooms are locked except for room 0. Your goal is to visit all the rooms. However, you cannot enter a locked room without having its key.

When you visit a room, you may find a set of distinct keys in it. Each key has a number on it, denoting which room it unlocks, and you can take all of them with you to unlock the other rooms.

Given an array rooms where rooms[i] is the set of keys that you can obtain if you visited room i, return true if you can visit all the rooms, or false otherwise.

Input: rooms = [[1],[2],[3],[]]
Output: true
Explanation:
We visit room 0 and pick up key 1.
We then visit room 1 and pick up key 2.
We then visit room 2 and pick up key 3.
We then visit room 3.
Since we were able to visit every room, we return true.

*/
/* DFS */
/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
 var canVisitAllRooms = function(rooms) {
  let stack = [];
  let seenSet = new Set();

  stack.push(0);
  seenSet.add(0);

  while (stack.length !== 0) {
      let currentRoom = stack.pop();
      for (let i = 0; i < rooms[currentRoom].length; i++) {
          let roomUnlocked = rooms[currentRoom][i];
          if (seenSet.has(roomUnlocked) !== true) {
              seenSet.add(roomUnlocked);
              stack.push(roomUnlocked);
          }
          if(rooms.length === seenSet.size) {
              return true;
          }
      }
  }
  return false;
};