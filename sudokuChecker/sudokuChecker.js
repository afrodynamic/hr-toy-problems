/*
Given a full sudoku board, return 'solved' if the board is solved, or 'invalid' if the board is invalid.

A sudoku board is solved if each column, row, and 3 x 3 subgrid contains all of the digits from 1 to 9.

Input: A String representing the board.
Output: 'solved' if the board is valid, 'invalid' if it isn't

Example input:
"735814296\n
896275314\n
214963857\n
589427163\n
362189745\n
471356982\n
923541678\n
648792531\n
157638429"
*/

function sudokuChecker(board) {
  const validate = (array) => {
    const seen = new Set();

    for (let i = 0; i < 9; i++) {
      const digit = array[i];

      if (seen.has(digit)) {
        return false;
      }

      seen.add(digit);
    }

    return true;
  }

  const rows = board.split('\n').map(row => row.trim().split('').map(Number));

  for (let i = 0; i < 9; i++) {
    const row = rows[i];

    if (!validate(row)) {
      return "invalid";
    }
  }

  for (let i = 0; i < 9; i++) {
    const column = [];

    for (let j = 0; j < 9; j++) {
      column.push(rows[j][i]);
    }

    if (!validate(column)) {
      return "invalid";
    }
  }

  for (let i = 0; i < 9; i += 3) {
    for (let j = 0; j < 9; j += 3) {
      const subgrid = [];

      for (let k = 0; k < 3; k++) {
        for (let l = 0; l < 3; l++) {
          subgrid.push(rows[i + k][j + l]);
        }
      }

      if (!validate(subgrid)) {
        return "invalid";
      }
    }
  }

  return 'solved';
}

if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  module.exports.sudokuChecker = sudokuChecker;
} else {
  window.sudokuChecker = sudokuChecker;
}
