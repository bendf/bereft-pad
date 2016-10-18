var assert = require('assert');
var bereft = require('./');
describe('Bereft-pad', function() {
    it('should handle short padding', function() {
      assert.equal(bereft('foo', 2), 'foo');
    });
    it('should pad correct number of symbols', function() {
      assert.equal(bereft('bar', 5), '\u26B0\u26B0bar');

    });
});


