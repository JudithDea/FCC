function rot13(str) {
  let result = "";

  for (let i = 0; i < str.length; i++) {
    let asciiValue = str[i].charCodeAt();
    if (asciiValue >= 65 && asciiValue <= 77) {
      // Capital ASCII letters have a value from 65-90, so for the first half of them we can add 13, for the second half we need to subtract 13
      result += String.fromCharCode(asciiValue + 13);
    } else if (asciiValue >= 78 && asciiValue <= 90) {
      result += String.fromCharCode(asciiValue - 13);
    } else if (str[i] == " ") {
      result += " ";
    } else if (str[i] == "?") {
      result += "?";
    } else if (str[i] == "!") {
      result += "!";
    } else if (str[i] == ".") {
      result += ".";
    }
  }

  return result;
}

rot13("SERR CVMMN!");

console.log(rot13("SERR CVMMN."));
