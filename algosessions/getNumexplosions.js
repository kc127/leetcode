

/*

For later, tying this to current events: https://www.nytimes.com/2022/01/11/world/europe/magawa-landmine-hero-rat-dead.html

Given an array of mines where each mine has an x and y position and blast radius 1, determine how many mines will explode given an initial mine by index that will explode.
When a mine explodes, it triggers all unexploded mines that are as for as or closer than its blast radius.

function getNumExplosions(mines, mineIndex): number

const mines = [
  { x: 0, y: 0 },
  { x: 0.5, y: 0 },
  { x: 1, y: 0 },
  { x: 2.5, y: 0 }
];

first pass  o(n^2) time
0: [1, 2]
1: [0, 2]
2: [0, 1]
3: []

second pass o(n) time
mines affected => 0, 1, 2 (set)

return set size

(0, 0) --> (0.5, 0) --> (1, 0) --> (2.5, 1)
map
(0,0) --> { (0.5, 0),  (1, 0), (2.5, 1)}
(1, 0)


mineIdx = 0
{ x: 0, y: 0 },
{ x: 0.5, y: 0 },
{ x: 1, y: 0 },

console.log(getNumExplosions(mines, 0)); // 3
console.log(getNumExplosions(mines, 1)); // 3
console.log(getNumExplosions(mines, 2)); // 3
console.log(getNumExplosions(mines, 3)); // 1

randomized list of mines
postive coordinates
Euclidian distance gives a distance between coordinates
chain reaction
*/

function getNumExplosions(mines, mineIndex) {
  if (mineIndex >= mines.length) {
      return 0;
  }

  let groups = {};

  for (let i = 0; i < mines.length; i++) {
     for (let j = i + 1; j < mines.length; j++) {
         let mine1 = mines[i];
         let mine2 = mines[j]
         let dist = Math.sqrt((mine1[0] - mine2[0]) ** 2 + (mine1[1] - mine2[1]) ** 2);
         if (dist <= 1) {
            if (!groups[i]) {
              groups[i] = [j];
            } else {
              groups[i].push(j);
            }
         }
     }

    let set = new Set()
    for (let key in groups) {
      let values = groups[key]
      set.add(...values)
    }
  }
  return set.size()
}




          