// pseudoclassical

function Trie(){
  this.map = {};
  this.endOfWord = false;
}

Trie.prototype.insert = function (word) {
  let curr = this.map;
  for (let i = 0; i < word.length; i++) {
    let char = word[i];
    if (!curr[char]) {
      curr[char] = {};
    }
    curr = curr[char];
  }
}

Trie.prototype.search = function (word) {
  let curr = this.traverse(word);
  return !!curr && !!curr.endOfWord;
}

Trie.prototype.traverse = function (word) {
  let curr = this.map;
  for (let i = 0; i < word.length; i++) {
    let char = word[i];
    if (!curr[char]) {
      return null;
    }
    curr = curr[char];
  }
  return curr;
}

Trie.prototype.startsWith = function (prefix) {
  let curr = this.traverse(prefix);
  return !!curr;
}
