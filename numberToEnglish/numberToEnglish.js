/**
* Extend the Number prototype with a new method called `toEnglish`.
* It should return the number as a string using English words.
* Examples:
*   (7).toEnglish(); // > "seven"
*   (575).toEnglish(); // > "five hundred seventy-five"
*   (78193512).toEnglish(); // > "seventy-eight million one hundred ninety-three thousand five hundred twelve"
*
* Extra credit: Make your function support decimals.
* Example:
*   (150043.273).toEnglish() // > "one hundred fifty thousand forty-three and two hundred seventy three thousandths"
*
 */

var numbersToWords = {
  0: 'zero',
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'seven',
  8: 'eight',
  9: 'nine',
  10: 'ten',
  11: 'eleven',
  12: 'twelve',
  13: 'thirteen',
  14: 'fourteen',
  15: 'fifteen',
  16: 'sixteen',
  17: 'seventeen',
  18: 'eighteen',
  19: 'nineteen',
  20: 'twenty',
  30: 'thirty',
  40: 'forty',
  50: 'fifty',
  60: 'sixty',
  70: 'seventy',
  80: 'eighty',
  90: 'ninety',
};
var numbersToPlace = {
  1: '',
  10: 'ten',
  100: 'hundred',
  1000: 'thousand',
  1000000: 'million',
  1000000000: 'billion',
  1000000000000: 'trillion',
  1000000000000000: 'quadrillion',
  1000000000000000000: 'quintillion',
};

const convertHundreds = (number) => {
  let str = '';

  if (number > 99) {
    str += numbersToWords[Math.floor(number / 100)] + ' hundred ';
    number %= 100;
  }

  if (number > 19) {
    str += numbersToWords[Math.floor(number / 10) * 10] + (number % 10 !== 0 ? '-' : ' ');
    number %= 10;
  }

  if (number > 0) {
    str += numbersToWords[number] + ' ';
  }

  return str.trim();
}

const convertDecimalToEnglish = (decimalPart) => {
  let wholeDecimal = parseInt(decimalPart, 10);
  let decimalStr = convertHundreds(wholeDecimal);
  let denominator = numbersToPlace[Math.pow(10, decimalPart.length)];
  return decimalStr + ' ' + denominator + 'ths';
}

const toEnglish = function (number) {
  if (!isFinite(number)) {
    return 'Invalid number';
  }

  if (number < 0) {
    return 'Negative ' + toEnglish(-number);
  }

  let decimalPart = '';

  if (Math.floor(number) !== number) {
    [number, decimalPart] = number.toString().split('.');
    number = parseInt(number);
  }

  let str = '';
  let place = 1;

  if (number === 0) {
    if (decimalPart !== '') {
      str = 'zero and ' + convertDecimalToEnglish(decimalPart);
    } else {
      str = 'zero';
    }
  } else {
    while (number > 0) {
      let mod = number % 1000;

      if (mod > 0) {
        let placeStr = numbersToPlace[place] ? numbersToPlace[place] + ' ' : '';
        str = convertHundreds(mod) + ' ' + placeStr + str;
      }

      number = Math.floor(number / 1000);
      place *= 1000;
    }

    if (decimalPart !== '') {
      str += 'and ' + convertDecimalToEnglish(decimalPart);
    }
  }

  return str.trim();
}

Number.prototype.toEnglish = function () {
  return toEnglish(this);
};

if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  module.exports = toEnglish;
} else {
  window.toEnglish = toEnglish;
}
