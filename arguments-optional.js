function addTogether() {
  let firstArgument = arguments[0]; // saving this value here so it's easier accessible from a deeper layer
  if (arguments.length > 1) {
    if (typeof arguments[0] !== "number" || typeof arguments[1] !== "number") {
      return undefined;
    } else {
      return arguments[0] + arguments[1];
    }
  } else if ((arguments.length = 1)) {
    // console.log("one argument only")
    if (typeof arguments[0] !== "number") {
      return undefined;
    } else {
      // console.log(firstArgument);
      return function singleArgumentCase(num) {
        if (typeof num !== "number") {
          return undefined;
        } else {
          return firstArgument + num;
        }
      };
    }
  }
}
