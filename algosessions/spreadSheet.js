function spreadSheet(num) {
  let a = {};
  let letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  for (let i = 0; i < 26; i++) {
    a[i] = letters[i];
  }

  let str = '';
  while (num > 0) {
    let rem = num%26;
    if (rem === 0) {
      str = 'Z' + str;
      num = num/26 - 1;
    } else {
      str = a[rem-1] + str;
      num = Math.floor(num/26);
    }
  }

  return str;
}

console.log(spreadSheet(27));
console.log(spreadSheet(52));
console.log(spreadSheet(705));
console.log(spreadSheet(702));
console.log(spreadSheet(676));
console.log(spreadSheet(80));
