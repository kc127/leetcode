/*
Given a 2-D String array of student-marks find the student with the highest average and output his average score. If the average is in decimals, floor it down to the nearest integer.

Example 1:

Input:  [{"Bob","87"}, {"Mike", "35"},{"Bob", "52"}, {"Jason","35"}, {"Mike", "55"}, {"Jessica", "99"}]
Output: 99
Explanation: Since Jessica's average is greater than Bob's, Mike's and Jason's average.

*/

var highestAverage = (scores) => {
  if (scores === null || scores.length === 0) {
    return -1;
  }


  let overallScores = new Map();
  let studentCount = new Map();
  for (let i = 0; i < scores.length; i++) {
    let student = scores[i][0];
    let score = scores[i][1];

    if (overallScores.has(student)) {
      overallScores.set(student,overallScores.get(student) + Number(score));
      studentCount.set(student, studentCount.get(student) + 1);
    } else {
      overallScores.set(student, Number(score));
      studentCount.set(student, 1);
    }
  }

  let highestStudent = "";
  let highestAvg = Number.MIN_SAFE_INTEGER;
  overallScores.forEach((score, student) => {
    let maxAvg = Math.floor(score/studentCount.get(student));
    if (highestAvg < maxAvg) {
      highestAvg = maxAvg;
      highestStudent = student;
    }
  })

  return [highestStudent, highestAvg];
}

let scores = [["Bob","87"], ["Mike", "35"],["Bob", "52"], ["Jason","35"], ["Mike", "55"], ["Jessica", "99"]];

console.log(highestAverage(scores));