/*
Today, we are building a Gradebook.
  Fill out the methods of the following class:

  grades = integers => 0 to 100
  store = {} which maps grade to its frequency
  avg grade = sum of all grades / total number of grades

  mode = the grade with most frequency

  lastAvg * count-1 = totalLastSum
  (totalLastSum + grade / count)

  0 80 80 90 99 100
  sort the keys in the grades object, get the mid grade (o(nlogn))
*/
class Gradebook {
  // Add any properties that you need here.
  constructor(){
    this.grades = {};
    this.min = Infinity;
    this.max = -Infinity;
    this.totalGradesSoFar = 0;
    this.freqGrade = [-Infinity, null];
    this.count = 0;
    this.allGrades = []
  }

  /* o(1) time */
  recordGrade(grade) {
    this.grades[grade] = (this.grades[grade] || 0) + 1;
    if (!this.freqGrade[1] || this.freqGrade[0] <= this.grades[grade]) {
        this.freqGrade = [this.grades[grade], grade];
    }
    this.min = Math.min(this.min, grade);
    this.max = Math.max(this.max, grade);
    this.totalGradesSoFar += grade;
    this.count++;
  }

  /* o(1) */
  minGrade() {
    return this.min;
  }

  maxGrade(){
    return this.max;
  }

  /* o(1) */
  average(){
    let avg = (this.totalGradesSoFar/this.count);
    return avg;
  }

  /* o(1) */
  mode(){
    return this.freqGrade[1];
  }

  /* nlogn */
  median(){
    let allTheGrades = Object.keys(this.grades);
    allTheGrades.sort((a, b) => a-b);
    let m = Math.floor((allTheGrades.length/2));
    return allTheGrades[m];
  }
}


/* tests */
// 0, 80, 90, 90,99, 100
let gradeBook1 = new Gradebook();
gradeBook1.recordGrade(0)
gradeBook1.recordGrade(80)
gradeBook1.recordGrade(80)
gradeBook1.recordGrade(80)
gradeBook1.recordGrade(90)
gradeBook1.recordGrade(90)
gradeBook1.recordGrade(99)
gradeBook1.recordGrade(100)
console.log(gradeBook1.grades);
console.log(gradeBook1.minGrade());
console.log(gradeBook1.maxGrade());
console.log(gradeBook1.average());
console.log(gradeBook1.mode());