var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = []; // fix me
  return set;
};

var setPrototype = {};

//method, takes any string and adds it to the set
// O(n)
setPrototype.add = function(item) {
  var found = false;
  if (this._storage.length === 0) {
    this._storage.push(item);
  } else {

    for (var i = 0; i < this._storage.length; i++) {
      if (this._storage[i] === item) {
        found = true;
        break;
      }
    }
    if (found === false) {
      this._storage.push(item);
    }
  }
};

//  method, takes any string and returns a boolean reflecting whether it can be found in the set
// O(n)
setPrototype.contains = function(item) {
  var found = false;
  if (this._storage.length === 0) {
    return false;
  } else {
    for (var i = 0; i < this._storage.length; i++) {
      if (this._storage[i] === item) {
        found = true;
        break;
      }
    }
  }
  return found;
};

// method, takes any string and removes it from the set, if present
// O(n)
setPrototype.remove = function(item) {
  for (var i = 0; i < this._storage.length; i++) {
    if (this._storage[i] === item) {
      delete this._storage[i];
    }
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
