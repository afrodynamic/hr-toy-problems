const asyncMap = require('./asyncMap.js');

describe('asyncMap', function() {
  test('should invoke callback with results in the correct order', (done) => {
    const tasks = [
      (cb) => {
        setTimeout(() => {
          cb('one');
        }, 200);
      },
      (cb) => {
        setTimeout(() => {
          cb('two');
        }, 100);
      },
    ];
    asyncMap(tasks, (results) => {
      expect(results).toEqual(['one', 'two']);
      done();
    });
  });
});
