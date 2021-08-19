function isValid(stale, latest, otjson) {
  // this is the part you will write!

  let operationsArray = JSON.parse(otjson)

  for (let i = 0; i < operationsArray.length; i++) {
    let operation = operationsArray[i]["op"];
    let insertChars = operationsArray[i]["chars"];
    let operationCount = operationsArray[i]["count"];

    if (operation === 'insert') {
      //check if the new chars we are tring to insert is present in latest
      // if (insertChars.length !== latest.slice(0, insertChars.length).length) {
      //   return false;
      // }
      // if yes, remove the new string from latest
      latest = latest.slice(insertChars.length);
    } else if (operation === 'delete') {
      // check if we are trying to delete past the end of the string
      if (operationCount > stale.length) {
        return false;
      }
      // if not then slice stale
      stale = stale.slice(operationCount);
    } else if (operation === 'skip') {
      // check if we are trying to skip past the end of the string

      if (operationCount > stale.length) {
        return false;
      }
      // check if stale and latest match
      if (stale.slice(0, operationCount) !== latest.slice(0, operationCount)) {
        return false;
      }
      // slice stale and latest
      stale = stale.slice(operationCount);
      latest = latest.slice(operationCount);
    }
  }
  return stale === latest;
}

// console.log(isValid(
//   'Repl.it uses operational transformations to keep everyone in a multiplayer repl in sync.',
//   'Repl.it uses operational transformations.',
//   '[{"op": "skip", "count": 40}, {"op": "delete", "count": 47}]'
// )); // true

// console.log(isValid(
//   'Repl.it uses operational transformations to keep everyone in a multiplayer repl in sync.',
//   'Repl.it uses operational transformations.',
//   '[{"op": "skip", "count": 45}, {"op": "delete", "count": 47}]'
// )); // false, delete past end

// console.log(isValid(
//   'Repl.it uses operational transformations to keep everyone in a multiplayer repl in sync.',
//   'Repl.it uses operational transformations.',
//   '[{"op": "skip", "count": 40}, {"op": "delete", "count": 47}, {"op": "skip", "count": 2}]'
// )); // false, skip past end

console.log(isValid(
  'Repl.it uses operational transformations to keep everyone in a multiplayer repl in sync.',
  'We use operational transformations to keep everyone in a multiplayer repl in sync.',
  '[{"op": "delete", "count": 7}, {"op": "insert", "chars": "We"}, {"op": "skip", "count": 4}, {"op": "delete", "count": 1}]'
)); // true

// console.log(isValid(
//   'Repl.it uses operational transformations to keep everyone in a multiplayer repl in sync.',
//   'Repl.it uses operational transformations to keep everyone in a multiplayer repl in sync.',
//   '[]'
// )); // true