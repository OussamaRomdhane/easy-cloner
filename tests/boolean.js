var easyCloner = require('../app');

describe('easyCloner(true)', function() {
  it('should return true', function() {
    return easyCloner(true) === true;
  });
});
