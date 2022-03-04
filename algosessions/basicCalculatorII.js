const operators = new Set()
const arr = ["+","-","*","/"]
arr.forEach(x => operators.add(x))

function calculateString(string) {
  let s = []
  let [first, i] = getNum(string, 0)
  s.push(first)

  while (i < string.length) {
    let curr = string[i]
    let [num, j] = getNum(string, i + 1)

    if (curr === "+" || curr === "-") {
      if (curr === "-") num *= -1
      s.push(num)
    } else {
      let last = s.pop()
      if (curr === "*") {
        s.push(last * num)
      } else {
        s.push(last / num)
      }
    }
    i = j
  }

  return s.reduce((acc, x) => acc + x)
}

function getNum(string, i) {
  let num = ""

  while (i < string.length && !operators.has(string[i])) {
    num += string[i]
    i++
  }

  return [parseInt(num), i]
}