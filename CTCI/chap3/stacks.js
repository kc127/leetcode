/* functional */

var Stacks = () => {
  var someInstance = {};
  var storage = {};
  var index = 0;

  someInstance.push = function (value) {
    storage[index++] = value;
  }

  someInstance.pop = function () {
    index && index--;
    var propToDelete = storage[index];
    delete storage[index];
    return propToDelete;
  }

  someInstance.size = function () {
    return index;
  }

  return someInstance;
}