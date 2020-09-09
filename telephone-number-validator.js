function telephoneCheck(str) {
  let pureNumbers = str.replace(/[^0-9]/g, ""); // removing anything that's not a number, however we will still use the original str to check if no other characters were included
  let numberString = pureNumbers.toString(); // turning it into a string so we have easy access to individual values

  if (str.includes("(") && !str.includes(")")) {
    return false;
  } else if (str.includes("?") || str[0] == "-") {
    return false;
  } else if (str[0] === "(" && str[4] !== ")") {
    return false;
  } else if (str.includes(")") && !str.includes("(")) {
    return false;
  } else if (numberString.length === 11 && numberString[0] == 1) {
    return true;
  } else if (numberString.length === 10) {
    return true;
  } else return false;
}

telephoneCheck("1 555-555-5555");

console.log(telephoneCheck("1 555-555-5555"));
