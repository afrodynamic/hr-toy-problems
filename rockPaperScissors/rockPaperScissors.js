/*
* Write a function that generates every sequence of throws a single
* player could throw over a three-round game of rock-paper-scissors.
*
* Your output should look something like:
*   ["RRR",
*    "RRP",
*    "RRS",
*    "RPR",
*    ...etc...
*   ]
*
* Extra credit:
*   - Make your function return answers for any number of rounds.
*
* Example:
* rockPaperScissors(5); // => ['RRRRR', 'RRRRP', 'RRRRS', etc...]
*
*/

var rockPaperScissors = function (rounds) {
  var rounds = rounds || 3;

  if (rounds < 0) {
    return [];
  }

  var combos = [];

  var playRounds = function (playedSoFar) {
    playedSoFar = playedSoFar || '';

    if (playedSoFar.length === rounds) {
      combos.push(playedSoFar);
      return;
    }

    ['R', 'P', 'S'].forEach(function (currentPlay) {
      playRounds(playedSoFar + currentPlay);
    });
  };

  playRounds();
  return combos;
};

if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  module.exports = rockPaperScissors;
} else {
  window.rockPaperScissors = rockPaperScissors;
}
