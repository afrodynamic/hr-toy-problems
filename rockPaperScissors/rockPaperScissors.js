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
  rounds = Math.max(rounds || 3, 3);

  var moves = ['R', 'P', 'S'];

  var combos = [];

  var playRounds = function (playedSoFar) {
    playedSoFar = playedSoFar || '';

    if (playedSoFar.length === rounds) {
      combos.push(playedSoFar);
      return;
    }

    moves.forEach(function (move) {
      playRounds(playedSoFar + move);
    });
  };

  playRounds();

  return combos;
};

module.exports = rockPaperScissors;
