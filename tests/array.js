var easyCloner = require('../app');

var array = [
  1,
  2,
  3,
  {
    a: 1,
    b: 2
  },
  [ 1, 2, 3 ]
];

array[5] = array;

describe('easyCloner(array)', function() {
  var copy = easyCloner(array);
  it('should return an array', function() {
    return Array.isArray(copy);
  });
  it('should return a copy of the array', function() {
    copy[0] = 0;
    return copy !== array && copy[0] === 0 && array[0] === 1;
  });
  it('should be recursive', function() {
    copy[4][0] = 0;
    return copy[4][0] === 0 && array[4][0] === 1;
  });
  it('should be circular protected', function() {
    return copy[5] === '[circular]' && array[5] === array;
  });
});
