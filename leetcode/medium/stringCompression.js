var compress = (chars) => {
  if (chars === null || chars.length === 0) {
    return 0;
  }

  let index = 0;
  let i = 0;

  while (i < chars.length) {
    let j = i;
    while (j < chars.length && chars[i] === chars[j]) {
      j++
    }
    chars[index] = chars[i];
    index++;
    if (j - i > 1) {
      let count = j - i + "";
      for (let c in count.split()) {
        chars[index] = c;
        index++
      }
    }
    i = j
  }
  return index;
}

console.log(compress(["a", "a", "a","b", "b"]));