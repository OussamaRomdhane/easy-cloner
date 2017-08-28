var easyCloner = require('../app');

describe('easyCloner(undefined)', function() {
  it('should return undefined', function() {
    return easyCloner(undefined) === undefined;
  });
});
