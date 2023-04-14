var { shuffleDeck, orderedDeck } = require('./shuffleDeck');

describe('shuffleDeck', function() {
  it('should shuffle the deck', function() {
    var ordered = orderedDeck();
    var shuffled = shuffleDeck(ordered.slice());
    expect(shuffled).not.toEqual(ordered);
  });

  it('should return the same number of cards', function() {
    var ordered = orderedDeck();
    var shuffled = shuffleDeck(ordered.slice());
    expect(shuffled.length).toEqual(ordered.length);
  });
});
