var circleExists = (commands) => {
  let x = 0;
  let y = 0;
  let dir = 0;
  let directions = [[0,1],[1,0],[0,-1],[-1,0]];

  for (let i = 0; i < commands.length; i++) {
    if (commands[i] === "G") {
      x = x + directions[dir][0];
      y = y + directions[dir][1];
    } else if (commands[i] === "L") {
      dir = (dir + 3)%4
    } else if (commands[i] === "R") {
      dir = (dir + 1)%4
    }
  }
  if (x === 0 && y === 0) {
    return true
  }
}