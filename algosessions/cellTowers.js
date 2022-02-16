/*
You are given an array representing the positions of cell towers along a 1 dimensional line. You are given a second array representing positions of customers across the same 1 dimensional line. Given these two inputs, you must determine a signal strength k such that every customer is covered by at least one cell tower. All cell towers must have the exact same signal strength and covers customers to its left and right equally.

Examples
Let's say cell towers are at: [0, 2, 6, 10]
and customers are at: [0, 5, 11]
In this case, you only need a cell distance of 1, because customer 5 would be covered by 6 and customer 11 would be covered by 10.
If the customers were at: [0, 4, 13], you'd need a distance of 3 in order for customer 13 to be covered by 10.

[0, 4, 8, 10]
[5, 11]
                            v
                    c1    c2                        c4
                    0  1  2  3  4  5  6  7 8 9 10   11
                                   p2 p3
                                      ^

                    signal_strength = 1
                    => 1

                    c1    c2          c3       c4
                    0  1  2  3  4  5  6  7 8 9 10   11 12
                    p1                p2        p3
                    => 0

                    c1                c3       c4
                    0  1  2  3  4  5  6  7 8 9 10   11
                    p1 p2 p3
                    => 1


                    c1    c2          c3       c4
                    0  1  2  3  4  5  6  7 8 9 10   11
                    p1          p2             p3
                    => 2


                    c2
                    c1
                    0  1  2  3  4  5  6  7 8 9 10   11
                    p1
                    p2
                    => 0
 assumptions:
 - at least one cell tower and one person

Solution #1
Iterate through each person. For each person, iterate through all cell towers to find the minimum distance, and then max it with our global signal_strength

Runtime: O(cp) = O(mn)
Space: O(1)

Solution #2 Similar to solution #1, optimize by finding closest cell tower using binary search

Runtime: O(p*logc)
Space: O(1)
                                                j
                    c1    c2          c3       c4
                    0  1  2  3  4  5  6  7 8 9 10   11
                    p1          p2
                    i
                    => 10

                    minDistance = 10
                    signalStrength = 10
*/


function cellTowers(towers, people) {
  let signalStrength = Infinity

  for (let i = 0; i < people.length; i++) {
    let minDistance = 0;
    for (let j = 0; j < towers.length; j++) {
      let distance = towers[j] - people[i];
      minDistance = Math.min(distance, minDistance);
    }
    signalStrength = Math.max(minDistance, signalStrength)
  }
      // iterate through tower


  return signalStrength;
}



console.log(cellTowers([0,2,6,10],[0,5,11])) // 1