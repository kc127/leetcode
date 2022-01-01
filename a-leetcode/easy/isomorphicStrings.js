/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isIsomorphic = function(s, t) {
  if (s.length !== t.length) {
      return false;
  }
  let sTot = {};
  let tTos = {};

  for (let i = 0; i < s.length; i++) {
      let c1 = s.charAt(i);
      let c2 = t.charAt(i);

      if (!sTot[c1] && !tTos[c2]) {
          sTot[c1] = c2;
          tTos[c2] = c1;
      } else if (sTot[c1] !== c2 && tTos[c2] !== c1) {
          return false;
      }
  }
  return true;
};