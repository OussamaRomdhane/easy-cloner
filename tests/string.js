var easyCloner = require('../app');

describe('easyCloner(\'Hello, World!\')', function() {
  it('should return \'Hello, World!\'', function() {
    return easyCloner('Hello, World!') === 'Hello, World!';
  });
});
