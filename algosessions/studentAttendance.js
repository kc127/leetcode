/*
by Alex and Arthur 
Today, you will be working on the student attendance question.
Every day, a student earns a grade for their attendance:

P - Present
A - Absent
L - Late

The student gets to pass the class if they have:

1) No more than one absence
2) No more than 2 consecutive late days.

Function Signature: func canPass(record: String) -> Bool

Example: PLLPAL => true
Example: PPPPLLL => false
Example: AAP => false


------------------- THE REAL PROBLEM: ----------------------------

Followup: given a number of days k, return the total unique attendance records that would be passible?
Example: 1 -> 3, because you can have A, L, P
func possibleRecords(k: Input) -> Int


*/

// O(n) time, O(1) space
const canPass = (record) => {
  let absences = 0;
  let consecutiveLates = 0;

  for(let grade of record) {
    if(grade === "L") {
      consecutiveLates++
      if(consecutiveLates > 2) return false;
    } else {
      consecutiveLates = 0;
      if(grade === "A") {
        absences++;
        if(absences > 1) return false;
      }
    }
  }

  return true;
};

// O(3^n*n) time, O(n) space
const possibleRecords = (k) => {
  let count = 0;
  const solutions = [];
  const _backtrack = (startIdx, working="") => {
    if(startIdx === k) {
      if(canPass(working)) {
        // solutions.push(working);
        count++;
      }
      return;
    }
    for(let possibility of "ALP") {
      _backtrack(startIdx + 1, working + possibility);
    }
  };

  _backtrack(0);

  return count;
}

// O(1.67^n) time-and-space
const possibleRecordsBacktracking = (k) => {
  const solutions = [];
  let count = 0;
  const _backtrack = (startIdx, a=0, l=0) => {
    if(startIdx === k) {
      count++;
      return;
    }

    for(let possibility of "ALP") {
      if(possibility === "A") {
        if(a === 1) continue;
        _backtrack(startIdx + 1, a + 1, 0);
      }
      else if(possibility === "L") {
        if(l === 2) continue;
        _backtrack(startIdx + 1, a, l+1);
      } else {
        _backtrack(startIdx + 1, a, 0);
      }
    }
  };

  _backtrack(0);
  return count;
}

// O(n) time, O(1) space
const possibleRecordsDP = (k) => {
  let counts = {
    countWithAandEndsWithA: 1,
    countWithAandOneEndingL: 0,
    countWithAandTwoEndingL: 0,
    countWithNoAandOneEndingL: 1,
    countWithNoAandTwoEndingL: 0,
    countWithNoAandEndsWithP: 1,
    countWithAandEndsWithP: 0,
  }

  for (let i = 1; i < k; i++) {
    let newCounts = {...counts};
    // consider adding A
    newCounts.countWithAandEndsWithA = counts.countWithNoAandOneEndingL + counts.countWithNoAandTwoEndingL + counts.countWithNoAandEndsWithP;
    // Consider adding first L
    newCounts.countWithAandOneEndingL = counts.countWithAandEndsWithA + counts.countWithAandEndsWithP;
    newCounts.countWithNoAandOneEndingL = counts.countWithNoAandEndsWithP;
    // consider adding 2nd L
    newCounts.countWithAandTwoEndingL = counts.countWithAandOneEndingL;
    newCounts.countWithNoAandTwoEndingL = counts.countWithNoAandOneEndingL;
    // consider adding P
    newCounts.countWithAandEndsWithP = counts.countWithAandEndsWithA + counts.countWithAandOneEndingL + counts.countWithAandTwoEndingL + counts.countWithAandEndsWithP
    newCounts.countWithNoAandEndsWithP = counts.countWithNoAandOneEndingL + counts.countWithNoAandTwoEndingL + counts.countWithNoAandEndsWithP;
    counts = {...newCounts};
  }

  // with A and ends with A and with no A and end with P
  console.log(counts)
  return Object.values(counts).reduce((a,c) => a + c, 0);
}

console.log("DP\t\tBacktracking\tBrute");
for (let k = 1; k < 16; k++) {
  console.log(possibleRecordsDP(k), possibleRecordsBacktracking(k), possibleRecords(k))
}

console.log(possibleRecordsDP(50));