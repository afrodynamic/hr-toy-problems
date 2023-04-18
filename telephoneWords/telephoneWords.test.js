const telephoneWords = require('./telephoneWords.js');

describe('telephoneWords', function() {
  test('should return every combination that can be spelled on a phone with these digits', function() {
    const expected = [
      'APG',
      'APH',
      'API',
      'AQG',
      'AQH',
      'AQI',
      'ARG',
      'ARH',
      'ARI',
      'ASG',
      'ASH',
      'ASI',
      'BPG',
      'BPH',
      'BPI',
      'BQG',
      'BQH',
      'BQI',
      'BRG',
      'BRH',
      'BRI',
      'BSG',
      'BSH',
      'BSI',
      'CPG',
      'CPH',
      'CPI',
      'CQG',
      'CQH',
      'CQI',
      'CRG',
      'CRH',
      'CRI',
      'CSG',
      'CSH',
      'CSI',
    ];

    expect(telephoneWords('274')).toEqual(expected);
  });
});
