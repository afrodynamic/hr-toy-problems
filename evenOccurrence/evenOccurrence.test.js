var evenOccurrence = require('./evenOccurrence.js');

describe.only('evenOccurrence', function() {
  test('Should return 2 for the the array [1, 3, 3, 3, 2, 4, 4, 2, 5]', function() {
    expect(evenOccurrence([1, 3, 3, 3, 2, 4, 4, 2, 5])).toEqual(2);
  });

  test('Should return 4 for the the array [1, 7, 2, 4, 5, 6, 8, 9, 6, 4]', function() {
    expect(evenOccurrence([1, 7, 2, 4, 5, 6, 8, 9, 6, 4])).toEqual(4);
  });

  test('Should handle strings', function() {
    expect(evenOccurrence(['meow', 1, 1, 'meow', 'meow', 'meow'])).toEqual(
      'meow'
    );
  });
});
