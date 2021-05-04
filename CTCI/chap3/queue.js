/* functional */

var Queue = () => {
  var someInstance = {};
  var storage = {};
  var start = 0;
  var end = 0;

  someInstance.enqueue = (value) => {
    storage[end++] = value;
  }

  someInstance.dequeue = (value) => {
    var keyToDequeue = storage[start];
    delete storage[start];

    someInstance.size() && start++;
    return keyToDequeue;
  }

  someInstance.size = () => {
    return end - start;
  }

  return someInstance;
}

/* functional-shared */

var Queue = () => {
  var someInstance = {};
  someInstance._storage = {};
  someInstance._start = 0;
  someInstance._end = 0;

  extend(someInstance, objMethods);
}

var extend = (obj, objMethods) => {
  for (var key in objMethods) {
    obj[key] = objMethods[key];
  }
}

var objMethods = {
  enqueue: function(value) {
    this._storage[this._end++] = value;
  }

  dequeue: function () {
    var temp = this._storage[this._start];
    delete this._storage[this._start];
    this.size() && this._start++;
    return temp;
  }

  size: function () {
    return this._end - this._start;
  }
}


