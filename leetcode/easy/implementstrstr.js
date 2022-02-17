var strStr = function(haystack, needle) {
  if (haystack.length < needle.length) {
      return -1;
  }
  let m = haystack.length;
  let n = needle.length;

  for (let i = 0; i <= m - n; i++) {
      let j = 0;
      for (j = 0; j < n; j++) {
          if (haystack.charAt(i+j) !== needle.charAt(j)) {
              break;
          }
      }
      if (j === n) {
          return i;
      }
  }
  return -1;
};