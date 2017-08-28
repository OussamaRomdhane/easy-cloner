var easyCloner = require('../app');

var object = {
  someElem: 1,
  anotherElem: {
    a : 2,
    b: 'Hello!!',
    c: [1, 2, {
      a: 1,
      b: 2
    }, true]
  },
  lastElem: [ 1, 2, 3 ]
};

object.anotherElem.d = object;

describe('easyCloner(object)', function() {
  var copy = easyCloner(object);
  it('should return an object', function() {
    return typeof copy === 'object';
  });
  it('should return a copy of the object', function() {
    copy.someElem = 0;
    return copy !== object && copy.someElem === 0 && object.someElem === 1;
  });
  it('should be recursive', function() {
    copy.anotherElem.a = 1;
    return copy.anotherElem.a === 1 && object.anotherElem.a === 2;
  });
  it('should be circular protected', function() {
    return copy.anotherElem.d === '[circular]';
  });
});
