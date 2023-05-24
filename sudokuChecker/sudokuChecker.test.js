const { sudokuChecker } = require('./sudokuChecker.js');

describe('sudokuChecker', () => {
  it('returns "solved" for a valid solved board', () => {
    const board =
      '735814296\n' +
      '896275314\n' +
      '214963857\n' +
      '589427163\n' +
      '362189745\n' +
      '471356982\n' +
      '923541678\n' +
      '648792531\n' +
      '157638429';
    expect(sudokuChecker(board)).toBe('solved');
  });

  it('returns "invalid" for a board with duplicate digits in a row', () => {
    const board =
      '735814299\n' +
      '896275314\n' +
      '214963857\n' +
      '589427163\n' +
      '362189745\n' +
      '471356982\n' +
      '923541678\n' +
      '648792531\n' +
      '157638429';
    expect(sudokuChecker(board)).toBe('invalid');
  });

  it('returns "invalid" for a board with duplicate digits in a column', () => {
    const board =
      '735814296\n' +
      '796275314\n' +
      '214963857\n' +
      '589427163\n' +
      '362189745\n' +
      '471356982\n' +
      '923541678\n' +
      '648792531\n' +
      '157638429';
    expect(sudokuChecker(board)).toBe('invalid');
  });

  it('returns "invalid" for a board with duplicate digits in a subgrid', () => {
    const board =
      '735814296\n' +
      '896275314\n' +
      '514963857\n' +
      '589427163\n' +
      '362189745\n' +
      '471356982\n' +
      '923541678\n' +
      '648792531\n' +
      '157638429';
    expect(sudokuChecker(board)).toBe('invalid');
  });

  it('returns "invalid" for a partially filled board', () => {
    const board =
      '035814296\n' +
      '896275314\n' +
      '214963857\n' +
      '589427163\n' +
      '062189745\n' +
      '471356982\n' +
      '923541678\n' +
      '648792531\n' +
      '157638420';
    expect(sudokuChecker(board)).toBe('invalid');
  });
});
