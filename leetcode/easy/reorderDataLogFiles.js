/*
Input: logs = ["dig1 8 1 5 1","let1 art can","dig2 3 6","let2 own kit dig","let3 art zero"]

Output: ["let1 art can","let3 art zero","let2 own kit dig","dig1 8 1 5 1","dig2 3 6"]

*/

var reorderLogFiles = (logs) => {
  let letter = [];
  let digit = [];
  for (let file of logs) {
    if (file.split(" ")[1].charAt(0) >= 0 && file.split(" ")[1].charAt(1) <= 0) {
      digit.push(file);
    } else {
      letter.push(file);
    }
  }
  console.log(letter[0].split(" ")[1]);
  letter.sort((a,b) => {
    if (a.split(" ")[1].localeCompare(b.split(" ")[1]) === 0 || a.split(" ")[2].localeCompare(b.split(" ")[2]) === 0) {
      return a.split(" ")[0].localeCompare(b.split(" ")[0])
    } else {
      return a.split(" ")[1].localeCompare(b.split(" ")[1]) || a.split(" ")[2].localeCompare(b.split(" ")[2]);
    }
  })

  return letter.concat(digit);
}

let logs = ["dig1 8 1 5 1","let1 art can","dig2 3 6","let2 own kit dig","let3 art zero"]

console.log(reorderLogFiles(logs))