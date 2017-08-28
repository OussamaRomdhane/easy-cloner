var easyCloner = require('../app');

describe('easyCloner(null)', function() {
  it('should return null', function() {
    return easyCloner(null) === null;
  });
});
