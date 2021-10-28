/*
Classic Technique

1. Ask clarifying questions and identify edge cases
2. Identify some solutions
3. Choose a solution
4. Implement the Solution
5. Test your solution

You are given a series of inputs representing delivery events. Each event is represented by an array of length 3:
[1, 1591846068, 0]

The first element is an order number
The second is the timestamp
The third is either 0 (representing a pickup) or 1 (representing a dropoff)

Given a series of events, return the total active time, calculated by the period of time where they have an active delivery (if they've dropped everything off, they are not considered active until they pick something up again).


Examples
Input:
[

  [1, 68, 0]
  [2, 70, 0]
  [1, 71, 1]
  [2, 80, 1] 12
  [3, 90, 0]
  [3, 102, 1]

]


[
  [1, 68, 0]
  [2, 80, 0]
  [2, 90, 1]

]


 1 : [


[[68, 71], [70, 80], [90,102] ]

Time Complexity: O(n log n)
Space Complexity: O(n)

70 < 71 then max of drop of times (71, 80)


[68, 80],  [90, 102]


68 -80 =12
90- 102 = 12

ans =12+12 = 24


24

Output: 24

Function Signature
func activeDeliveryTime(events: [Int]) -> Int

Assumptions
- Assume all inputs are valid
- Assume each event has a different timestamp
- Assume one delivery person


Edge Cases:
- Empty array is possible -> 0
- Single item -> 0

Identify solutions:

*/

  // I: array of arrays, O: integer




//edge case: when no drop off time, times array will have single element


function activeDeliveryTime(events) {

  let times = {};
  let maxTime = 0;

  for (let event of events) {
    let order = event[0];
    let timeStamp = event[1];
    let activity = event[2];

    if (times[order] === undefined) {
        times[order] = []
        if (activity === 0) { // pickup
            times[order][0] = timeStamp;
        }
    } else {
        times[order][1] = timeStamp;
    }
  }
  // a - , dropoff]
  let startTimes = Object.values(times).sort((a, b) => {
    return a[0] - b[0]; // ascending order
  });


  let validTimes = [startTimes[0]];
  for (let i = 1; i < startTimes.length; i++) {
      let currentTime = validTimes[validTimes.length - 1];
      // [a, b], [c, d] = [a, d]
      if (currentTime[1] >= startTimes[i][0]) { // good catch
         validTimes[validTimes.length - 1] = [currentTime[0], Math.max(startTimes[i][1], currentTime[1])];
      } else {
        validTimes.push(startTimes[i]);
      }
  }

  let total = 0;
  for (let time of validTimes) {
      total +=  time[1] - time[0];
  }
  return total;
}


let times = [
  [1, 68, 0],
  [2, 70, 0],
  [1, 71, 1],
  [2, 80, 1],
  [3, 90, 0],
  [3, 102, 1],
];

/*
Time Complexity: O(n log n)
Space Complexity: O(n)
*/

console.log(activeDeliveryTime(times));


let times = [
  [1, 68, 0],
  [2, 70, 0],
  [1, 71, 1],
  [2, 80, 1],
  [3, 90, 0],
  [3, 102, 1],
];

function calculateTotalActiveTime(times) {
  if (times.length === 0) {
    return 0;
  }
  let totalPackages = times[0][2] === 0 ? 1 : 0;
  let startTime = times[0][1];
  let totalTime = 0;

  for (let i = 1; i < times.length; i++) {
    let timeDiff = times[i][1] - startTime;
    if (totalPackages > 0) {
      totalTime += timeDiff;
    }

    startTime = times[i][1];
    totalPackages += times[i][2] == 1 ? -1 : 1;
  }

  return totalTime;

}

// let times2 = [
//   [1, 68, 0], 1
//   [2, 70, 0],    70 - 68 = 2
//   [1, 71, 1],    71 - 70 = 1
//   [2, 80, 1], 0
//   [3, 90, 0], 1
//   [3, 102, 1], 0
// ];

console.log(calculateTotalActiveTime(times2));