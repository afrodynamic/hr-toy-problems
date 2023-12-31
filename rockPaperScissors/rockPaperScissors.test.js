const rockPaperScissors = require('./rockPaperScissors.js');

describe.only('rockPaperScissors', function () {
  var threeRoundOutput = [
    'RRR',
    'RRP',
    'RRS',
    'RPR',
    'RPP',
    'RPS',
    'RSR',
    'RSP',
    'RSS',
    'PRR',
    'PRP',
    'PRS',
    'PPR',
    'PPP',
    'PPS',
    'PSR',
    'PSP',
    'PSS',
    'SRR',
    'SRP',
    'SRS',
    'SPR',
    'SPP',
    'SPS',
    'SSR',
    'SSP',
    'SSS',
  ];

  test('Should return correct set of combos for a three-round game', function () {
    expect(rockPaperScissors(3)).toEqual(threeRoundOutput);
  });

  test('Should return correct set of combos for an over three-round game', function () {
    var output = [
      'RRRR',
      'RRRP',
      'RRRS',
      'RRPR',
      'RRPP',
      'RRPS',
      'RRSR',
      'RRSP',
      'RRSS',
      'RPRR',
      'RPRP',
      'RPRS',
      'RPPR',
      'RPPP',
      'RPPS',
      'RPSR',
      'RPSP',
      'RPSS',
      'RSRR',
      'RSRP',
      'RSRS',
      'RSPR',
      'RSPP',
      'RSPS',
      'RSSR',
      'RSSP',
      'RSSS',
      'PRRR',
      'PRRP',
      'PRRS',
      'PRPR',
      'PRPP',
      'PRPS',
      'PRSR',
      'PRSP',
      'PRSS',
      'PPRR',
      'PPRP',
      'PPRS',
      'PPPR',
      'PPPP',
      'PPPS',
      'PPSR',
      'PPSP',
      'PPSS',
      'PSRR',
      'PSRP',
      'PSRS',
      'PSPR',
      'PSPP',
      'PSPS',
      'PSSR',
      'PSSP',
      'PSSS',
      'SRRR',
      'SRRP',
      'SRRS',
      'SRPR',
      'SRPP',
      'SRPS',
      'SRSR',
      'SRSP',
      'SRSS',
      'SPRR',
      'SPRP',
      'SPRS',
      'SPPR',
      'SPPP',
      'SPPS',
      'SPSR',
      'SPSP',
      'SPSS',
      'SSRR',
      'SSRP',
      'SSRS',
      'SSPR',
      'SSPP',
      'SSPS',
      'SSSR',
      'SSSP',
      'SSSS',
    ];

    expect(rockPaperScissors(4)).toEqual(output);
  });

  test('Should handle cases where the number of rounds is invalid', function () {
    expect(rockPaperScissors(0)).toEqual(threeRoundOutput);
    expect(rockPaperScissors(-1)).toEqual([]);
  });

  test('Should handle cases where the number of rounds is under 3 and valid', function () {
    var twoRoundOutput = ['RR', 'RP', 'RS', 'PR', 'PP', 'PS', 'SR', 'SP', 'SS'];
    var oneRoundOutput = ['R', 'P', 'S'];
    expect(rockPaperScissors(2)).toEqual(twoRoundOutput);
    expect(rockPaperScissors(1)).toEqual(oneRoundOutput);
  });
});
