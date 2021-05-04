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
    var propToDelete = this._storage[this._start];
    delete this._storage[this._start];
    this.size() && this._start++;
    return propToDelete;
  }

  size: function () {
    return this._end - this._start;
  }
}


/* prototypal */

var Queue = () => {
  var someInstance  = Object.create(queueMethods);
  someInstance._storage = {};
  someInstance._start = 0;
  someInstance._end = 0;

  return someInstance;
}

var queueMethods = {};

queueMethods.enqueue = (value) => {
  this._storage[this._end++] = value;
}

queueMethods.dequeue = () => {
  var propToDelete = this._storage[this._start];
  delete this._storage[this._start];
  this.size() && this._start++;
  return propToDelete
}

/* pseudoclassical */
var Queue = () => {
  this._storage = {};
  this._start = 0;
  this._end = 0;
}

Queue.prototype.enqueue = {
  this._storage[this._end++] = value;
}

Queue.prototype.dequeue = {
  var propToDelete = this._storage[this._start];
  delete this._storage[this._start];
  this.size() && this._start++;
  return propToDelete;
}

Queue.prototype.size = {
  return this._end - this._start;
}

/* es6 */

class Queue {
  constructor(){
    this._storage = {};
    this._start = 0;
    this._end = 0;
  }

  enqueue (value) {
    this._storage[this._end++] = value;
  }

  dequeue() {
    var propToDelete = this._storage[this._start];
    delete this._storage[this._start];
    this.size() && this._start++;
    return propToDelete;
  }

  size() {
    return this._end - this._start;
  }
}