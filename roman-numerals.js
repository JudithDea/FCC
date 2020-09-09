function convertToRoman(num) {
  const numerals = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };
  let romanNumeral = "";

  for (let key in numerals) {
    //  console.log(numerals[key])
    while (num >= numerals[key]) {
      // we compare the number to our list of Roman numerals. If it matches, we add that roman numeral to the string and subtract that amount from num, to run again with the remainder.
      romanNumeral += key;
      num -= numerals[key];
    }
  }
  return romanNumeral;
}

console.log(convertToRoman(44));
