function palindrome(str) {
  let strToTest = str.toLowerCase().replace(/[^\w]|_/g, ""); // turn string to lower case and remove all whitespaces and punctuation
  let strToTestArray = strToTest.split(""); // split str into an array so we can reverse it
  let reversedStrToTest = strToTestArray
    .reverse()
    .join()
    .replace(/[^\w]|_/g, "");

  if (strToTest === reversedStrToTest) {
    return true;
  }
  return false;
}

palindrome("My age is 0, 0 si ega ym.");
