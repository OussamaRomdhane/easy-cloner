var easyCloner = require('../app');

describe('easyCloner(42)', function() {
  it('should return number 42', function() {
    return easyCloner(42) === 42;
  });
});
