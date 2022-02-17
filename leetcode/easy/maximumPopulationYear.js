/*
You are given a 2D integer array logs where each logs[i] = [birthi, deathi] indicates the birth and death years of the ith person.

The population of some year x is the number of people alive during that year. The ith person is counted in year x's population if x is in the inclusive range [birthi, deathi - 1]. Note that the person is not counted in the year that they die.

Return the earliest year with the maximum population.



Example 1:

Input: logs = [[1993,1999],[2000,2010]]
Output: 1993
Explanation: The maximum population is 1, and 1993 is the earliest year with this population.
Example 2:

Input: logs = [[1950,1961],[1960,1971],[1970,1981]]
Output: 1960
Explanation:
The maximum population is 2, and it had happened in years 1960 and 1970.
The earlier year between them is 1960.

*/

var maximumPopulation = (logs) => {
  let years = new Array(101).fill(0);

  for (let [birth, death] of logs) {
    years[birth - 1950]++;
    years[death - 1950]--;
  }
  let max = 0;

  for (let i = 1; i < years.length; i++) {
    // cumulative sum
    years[i] += years[i-1];
    if (years[i] > years[max]) {
      max = i;
    }
  }
  return max + 1950;
}

console.log(maximumPopulation([[1993,1999],[2000,2010]]))