var minMeetingRooms = (intervals) => {
  let meetingRooms = 0;
  let startTimes = [];
  let endTimes = [];

  for (let interval of intervals) {
    startTimes.push(interval[0]);
    endTimes.push(interval[1]);
  }

  startTimes.sort((a,b) => a-b);
  endTimes.sort((a,b) => a-b);
  let j = 0;
  for (let i = 0; i < intervals.length; i++) {
    if (startTimes[i] >= endTimes[j]) {
      meetingRooms--;
      j++;
    }
    meetingRooms++;
  }

  return meetingRooms;
}



let intervals = [[0,30],[5,10],[15,20]] // soln: 2

console.log(minMeetingRooms(intervals));