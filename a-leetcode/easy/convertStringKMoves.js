/**
 * @param {string} s
 * @param {string} t
 * @param {number} k
 * @return {boolean}
 */
 var canConvertString = function(s, t, k) {
  if (s.length !== t.length) {
      return false;
  }

  let freq = {};
  for (let i = 0; i < s.length; i++) {
      let diff = (t.charCodeAt(i) - s.charCodeAt(i) + 26) % 26;
      if (diff > 0 && (diff + (freq[diff] || 0) * 26) > k) {
          return false;
      }
      freq[diff] = (freq[diff] || 0) + 1;
  }
  return true;
};